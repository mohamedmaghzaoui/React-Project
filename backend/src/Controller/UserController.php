<?php

namespace App\Controller;

use App\Entity\Chat;
use App\Entity\User;

use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

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

    #[Route('/get_user', name: "get_user")]
    public function getUserData(#[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }
        return $this->json([
            "userid" => $user->getId(),
            "username" => $user->getUsername(),
            "role" => $user->getRoles(),
            "userProfileData" => [
                "occupation" => $user->getOccupation(),
                "description" => $user->getDescription(),
                "languages" => $user->getLanguages(),
                "country" => $user->getCountry(),
                "email" => $user->getEmail()
            ]


        ]);
    }

#[Route('/get_chats', name: 'get_chats')]
public function getChats(#[CurrentUser] User $user): Response
{
    if (null == $user) {
        return $this->json([
            'invalid credentials',
        ], Response::HTTP_UNAUTHORIZED);
        # code...
    }
    return $this->json([
        $user->getChats(),
        ]);

}

    #[Route('/add_freelancer', name: "add_freelancer")]
    public function addFreelancer(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }



        $data = json_decode($request->getContent(), true);

        $user->setDescription($data['description']);
        $user->setCountry($data['country']);
        $user->setOccupation($data['occupation']);
        $user->setRoles(["ROLE_FREELANCER"]); // Initial role set to 'client'
        $user->setLanguages($data["languages"]);

        // Persist the user to the database
        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();


        // Authenticate the user if needed (optional)
        // Note: Authenticating the user immediately might not be necessary depending on your use case.
        return $this->json(["user doesnt not exist" => $data]);
    }
    #[Route('/change_userdata', name: "change_username")]
    public function changeUsername(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user)
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }
        $data = json_decode($request->getContent(), true);
        $user->setUsername($data['username']);
        $user->setOccupation($data['occupation']);
        $user->setCountry($data['country']);
        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json(["user changed"]);
    }
    #[Route('/change_description', name: "change_description")]
    public function changeDescription(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user)
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }
        $data = json_decode($request->getContent(), true);
        $user->setDescription($data['description']);

        $entityManager = $doctrine->getManager();
        $entityManager->persist($user);
        $entityManager->flush();
        return $this->json(["description changed"]);
    }
}
