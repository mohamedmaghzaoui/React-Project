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


    #[Route("/allGigs", name: "allGigs")]
    public function getAllGigs(ManagerRegistry $doctrine): Response
    {

        $repository = $doctrine->getRepository(Gig::class);
        $gigs = $repository->findAll();

        $serializedGigs = [];
        foreach ($gigs as $gig) {
            $user = $gig->getUser();

            $serializedGigs[] = [
                'id' => $gig->getId(),
                'title' => $gig->getTitle(),
                'description' => $gig->getDescription(),
                'price' => $gig->getPrice(),
                'category' => $gig->getCategory(),
                'username' => $user ? $user->getUsername() : null,
                'userDescription' => $user ? $user->getDescription() : null,
                'userCountry' => $user ? $user->getCountry() : null,
                'userLanguages' => $user ? $user->getLanguages() : null,
                'userOccupation' => $user ? $user->getOccupation() : null,
            ];
        }

        return $this->json($serializedGigs);
    }
}
