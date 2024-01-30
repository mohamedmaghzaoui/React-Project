<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/test', name: 'app_test')]
    public function index(): JsonResponse
    {
        //send json data
        return $this->json([
            'test' => 'aziz fine',
            'test2' => '7out azraq',
            'test3' => 'works fine',
        ]);
    }
}
