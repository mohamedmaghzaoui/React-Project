<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;
use Symfony\Component\Security\Http\Authenticator\FormLoginAuthenticator;

class UserController extends AbstractController
{
    #[Route('/adduser', name: 'app_user_create')]
    public function create(Request $request, UserPasswordHasherInterface $passwordHasher, ManagerRegistry $doctrine, UserAuthenticatorInterface $userAuthenticator, FormLoginAuthenticator $formLoginAuthenticator): Response
    {
        $repository = $doctrine->getRepository(User::class);

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Check if the email already exists
        $existingUser = $repository->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['Email already exists']);
        }

        // Create a new user with the data
        $user = new User($passwordHasher);
        $user->setEmail($data['email']);
        $user->setRoles(["ROLE_CLIENT"]); // Initial role set to 'client'
        $user->setUsername(""); // Initial username set to null

        // Hash the password
        $hashedPassword = $passwordHasher->hashPassword($user, $data['password']);
        $user->setPassword($hashedPassword);

        // Persist the user to the database
        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();

        // Authenticate the user if needed (optional)
        // Note: Authenticating the user immediately might not be necessary depending on your use case.
        return $this->json([]);
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
