<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Routing\Annotation\Route;

class SecurityController extends AbstractController
{
    #[Route(path: "/login", name: "login")]
    public function login(AuthenticationUtils $utils)
    {
        $error = $utils->getLastAuthenticationError();
        $lastUsername = $utils->getLastUsername();
        return $this->render("security/login.html.twig", [
            "last_username" => $lastUsername,
            "error" => $error
        ]);
    }

    #[Route(path: "/logout", name: "logout")]
    public function logout()
    {
    }
}
