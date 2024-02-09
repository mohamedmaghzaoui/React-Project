<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Project;

class ProjectController extends AbstractController
{
    
    #[Route('/projects', name:'projects_list')]
    public function index(ManagerRegistry $doctrine): JsonResponse
    {
        
        $projects = $doctrine->getRepository(Project::class)->findAll();

        
        $data = [];
        foreach ($projects as $project) {
            $data[] = [
                'id' => $project->getId(),
                'title' => $project->getTitle(),
                'description' => $project->getDescription(),
                'image' => $project->getImage(),
            ];
        }

      
        return $this->json($data);
    }
    
    
}   
