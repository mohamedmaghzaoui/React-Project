<?php
//impport dependacies

namespace App\Controller;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
//login user
class SecurityController extends AbstractController
{
    #[Route("/login", name: "app_login")]
    public function login(AuthenticationUtils $utils, Request $request): Response
    {

        $error = $utils->getLastAuthenticationError();
        $lastUsername = $utils->getLastUsername();
        if ($this->getUser()) {
            echo ("authenticated");
            # code...
        }
        // Correctly retrieve the password field


        // Debugging output



        // Your existing code...



        return $this->render(
            'security/login.html.twig',
            [
                'controller_name' => 'LoginController',
                "last_username" => $lastUsername,
                "error" => $error
            ]
        );
    }
    #[Route("logout", name: "logout")]
    public function logout()
    {
    }
}
