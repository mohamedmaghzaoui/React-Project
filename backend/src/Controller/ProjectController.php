<?php

namespace App\Controller;

use App\Entity\Project;
use App\Form\ProjectType;
use App\Service\FileUploader;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;


class ProjectController extends AbstractController
{
    #[Route("projects", name: "projects")]
    public function readAll(ManagerRegistry $doctrine): Response
    {
        $projectRepository = $doctrine->getRepository(Project::class);
        $projects = $projectRepository->findAll();
        return $this->render("user/projects.html.twig", ["projects" =>  $projects]);
    }

    #[Route("/read/{id}", name: "read")]
    public function read(project $project): Response
    {
        if (!$project) {
            throw $this->createNotFoundException();
        }
        return $this->render("project/read.html.twig", ["project" => $project]);
    }

    #[Route("/create", name: "create")]
    public function create(Request $request, ManagerRegistry $doctrine, ): Response
    {
        $this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        $project = new project();
        $form = $this->createForm(projectType::class, $project);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            if ($form->isSubmitted() && $form->isValid()) {
                $imageFile = $form->get('image')->getData();
                if ($imageFile) {
                   
                }
            }


            $em = $doctrine->getManager();
            $em->persist($project);
            $em->flush();
            return $this->redirectToRoute('home');
        }
        return $this->render("project/form.html.twig", [
            "form" => $form->createView(),
            "type" => "create",
        ]);
    }


    #[Route("/delete/{id}", name: "delete")]
    public function delete(project $project, ManagerRegistry $doctrine): Response
    {
        $this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $this->denyAccessUnlessGranted('ROLE_ADMIN');
        $this->addFlash("danger", "Le project '{$project->getName()}' a été supprimée !");
        $em = $doctrine->getManager();
        $em->remove($project);
        $em->flush();
        return $this->redirectToRoute("projects");
    }

    #[Route("/update/{id}", name: "update")]
    public function update(Project $project, Request $request, ManagerRegistry $doctrine, ): Response
    {
        $this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        if (!$this->isGranted('ROLE_ADMIN') && !$this->isGranted('ROLE_EDIT')) {
            throw $this->createAccessDeniedException('Accès refusé. Vous devez avoir le rôle ROLE_ADMIN ou ROLE_EDIT pour effectuer cette action.');
        }
    
        


        $form = $this->createForm(projectType::class, $project);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $imageFile = $form->get('image')->getData();
            if ($imageFile) { 
                
                $doctrine->getManager()->flush();
                $this->addFlash("warning", "Le project '{$project->getName()}' a été modifiée !");
                return $this->redirectToRoute("projects");
            }
        }
        
        return $this->render("project/form.html.twig", [
            "form" => $form->createView(),
            "project" => $project,
            "type" => "update",
        ]);
    }
}

