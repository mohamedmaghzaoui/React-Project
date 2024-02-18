<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class WelcomeUser extends AbstractController
{
    public function index()
    {
        $this->denyAccessUnlessGranted("IS_AUTHENTICATED_FULLY");
        $user = $this->getUser();
        return new Response("Welcome");
    }
}
