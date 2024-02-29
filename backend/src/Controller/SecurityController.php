<?php
//impport dependacies

namespace App\Controller;

use App\Entity\User;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
//login user
class SecurityController extends AbstractController
{
    #[Route("/login", name: "app_login", methods: ['Post'])]
    public function login(#[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }
        return $this->json([
            "userid" => $user->getId(),
            "username" => $user->getUsername()
        ]);
    }
    #[Route("logout", name: "app_logout")]
    public function logout()
    {
    }
}
