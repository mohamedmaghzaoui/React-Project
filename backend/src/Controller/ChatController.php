<?php
namespace App\Controller;

use App\Entity\Chat;
use App\Form\ChatType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ChatController extends AbstractController
{
    
    #[Route("/newChat", name: "newChat")]
    public function new(Request $request ,ManagerRegistry $doctrine): Response
    {
        $chat = new Chat();
        $form = $this->createForm(ChatType::class, $chat);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager =$doctrine->getManager();
            $entityManager->persist($chat);
            $entityManager->flush();
            return $this->redirectToRoute('dashboard'); // Redirection après la création du chat
        }
        return $this->render('chat/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }


    #[Route("/chat/{id}", name: "chat")]
    public function show(Chat $chat): Response
    {
        return $this->render('chat/show.html.twig', [
            'chat' => $chat,
        ]);
    }
}
