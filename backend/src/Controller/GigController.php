<?php

namespace App\Controller;

use App\Entity\Gig;
use App\Entity\User;
use App\Form\GigType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class GigController extends AbstractController
{

    #[Route("/newGig", name: "newGig")]

    public function addGig(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user)
    {
        if (null == $user || !in_array('ROLE_FREELANCER', $user->getRoles())) {
            return $this->json([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            // You may also want to throw an exception or redirect the user as needed.
        }

        $data = json_decode($request->getContent(), true);
        $gig = new Gig();
        $userId = $user->getId();

        $gig->setTitle($data['gigTitle']);
        $gig->setDescription($data['gigDescription']);
        $gig->setPrice($data['gigPrice']);
        $gig->setCategory($data['category']);
        $gig->setUser($user);

        $entityManager = $doctrine->getManager();
        $entityManager->persist($gig);
        $entityManager->flush();
        return $this->json(["gig is added"]);
    }


    #[Route("/gig/{id}", name: "gig")]

    public function show(Gig $gig): Response
    {
        return $this->render('gig/show.html.twig', [
            'gig' => $gig,
        ]);
    }
}
