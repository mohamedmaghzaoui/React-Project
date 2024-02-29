<?php
namespace App\Controller;

use App\Entity\Gig;
use App\Form\GigType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GigController extends AbstractController
{
    
    #[Route("/newGig", name: "newGig")]

    public function new(Request $request ,ManagerRegistry $doctrine): Response
    {
        {
            
        
        
        }

        $gig = new Gig();
        $form = $this->createForm(GigType::class, $gig);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager =$doctrine->getManager();
            $entityManager->persist($gig);
            $entityManager->flush();

            return $this->redirectToRoute('dashboard'); // Redirection après la création du gig
        }

        return $this->render('gig/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    
    #[Route("/gig/{id}", name: "gig")]

    public function show(Gig $gig): Response
    {
        return $this->render('gig/show.html.twig', [
            'gig' => $gig,
        ]);
    }
}
