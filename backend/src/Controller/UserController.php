<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authenticator\FormLoginAuthenticator;

class UserController extends AbstractController
{
    #[Route('/create1', name: 'app_user_create')]
    public function create(Request $request, UserPasswordHasherInterface $passwordHasher, ManagerRegistry $doctrine, UserAuthenticatorInterface $userAuthenticator, FormLoginAuthenticator $formLoginAuthenticator): Response
    {
        // Get data from the request
        $data = json_decode($request->getContent(), true);
        dd($data);

        // Create a new user with the data
        $user = new User($passwordHasher);
        $user->setUsername($data['username']);
        $user->setPassword($data['password']);
        $user->setRoles(["ROLE_USER"]);

        // Persist the user to the database
        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Authenticate the user
        $userAuthenticator->authenticateUser($user, $formLoginAuthenticator, $request);

        return $this->redirectToRoute('projects');
    }

    #[Route('/roles', name: "roles")]
    public function users(ManagerRegistry $doctrine)
    {
        $userRepository = $doctrine->getRepository(User::class);
        $users = $userRepository->findAll();

        return $this->render('security/roles.html.twig', [
            'users' => $users,
        ]);
    }
    #[Route('/roles/{id}/{role}')]
    public function setRole(User $user, string $role, ManagerRegistry $doctrine)
    {
        $user->setRoles([$role]);
        $doctrine->getManager()->flush();

        return $this->redirectToRoute('roles');
    }
}