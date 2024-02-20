<?php

namespace App\Controller;

use App\Entity\User;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

class UserController extends AbstractController
{
    //function to verify user email for firest react registration form
    #[Route('/verifyUser', name: 'verify_user')]
    public function verifyUser(Request $request, ManagerRegistry $doctrine): Response
    {
        $repository = $doctrine->getRepository(User::class);

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Check if the email already exists
        $existingUser = $repository->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['Email already exists'], Response::HTTP_CONFLICT);
        }

        return $this->json(["user doesnt not exist"]);
    }

    //function to add a user to the data base
    #[Route('/addUser', name: 'add_user')]
    public function addUser(Request $request, UserPasswordHasherInterface $passwordHasher, ManagerRegistry $doctrine): Response
    {
        $repository = $doctrine->getRepository(User::class);

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Check again if email exist for safety reasons
        $existingUser = $repository->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['Email already exists'], Response::HTTP_CONFLICT);
        }


        $user = new User($passwordHasher);
        $user->setEmail($data['email']);
        $user->setUsername($data['username']);
        $user->setRoles(["ROLE_CLIENT"]); // Initial role set to 'client'

        $user->setPassword($data['password']);

        // Persist the user to the database
        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();


        // Authenticate the user if needed (optional)
        // Note: Authenticating the user immediately might not be necessary depending on your use case.
        return $this->json(["user doesnt not exist"]);
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
    #[Route('/check', name: "roles")]
    public function check(): Response

    {
        if ($this->getUser()) {
            return $this->json("authenticated");
        } else {
            return $this->json("not authenticated");
        }
    }
    #[Route('/roles/{id}/{role}')]
    public function setRole(User $user, string $role, ManagerRegistry $doctrine)
    {
        $user->setRoles([$role]);
        $doctrine->getManager()->flush();

        return $this->redirectToRoute('roles');
    }
}
