<?php

namespace App\Controller;

use App\Entity\Gig;
use App\Entity\User;
use App\Form\GigType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class GigController extends AbstractController
{

    #[Route("/newGig", name: "newGig")]

    public function addGig(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user)
    {
        if (null == $user || !in_array('ROLE_FREELANCER', $user->getRoles())) {
            return $this->json([
                'message' => 'Invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            // You may also want to throw an exception or redirect the user as needed.
        }

        $data = json_decode($request->getContent(), true);
        $gig = new Gig();
        $userId = $user->getId();

        $gig->setTitle($data['gigTitle']);
        $gig->setDescription($data['gigDescription']);
        $gig->setPrice($data['gigPrice']);
        $gig->setCategory($data['category']);
        $gig->setUser($user);

        $stripe = new \Stripe\StripeClient('sk_test_h8UK0oVZURqGfc3UR7tI5VXT00uFt3iGPi');
        
        
        $gig_stripe = $stripe->products->create([
            'name' => $gig->getTitle(),
            'description' => $gig->getDescription(),
            'shippable' => true
          ], ['stripe_account' => $user->getAcct()]);

        $gig_id = $gig_stripe->id;

        $gig->setStripeID($gig_id);
        
        $gig_price = $stripe->prices->create([
            'product' => $gig->getStripeID(),
            'unit_amount' => $gig->getPrice()*100,
            'currency' => 'eur',
          ], ['stripe_account' => $user->getAcct()]);

          $gig->setStripePriceID($gig_price->id);

          
        $entityManager = $doctrine->getManager();
        $entityManager->persist($gig);
        $entityManager->flush();
        return $this->json(["gig is added"]);
    }


    #[Route("/allGigs", name: "allGigs")]
    public function getAllGigs(ManagerRegistry $doctrine): Response
    {

        $repository = $doctrine->getRepository(Gig::class);
        $gigs = $repository->findAll();

        $serializedGigs = [];
        foreach ($gigs as $gig) {
            $user = $gig->getUser();

            $serializedGigs[] = [
                'id' => $gig->getId(),
                'title' => $gig->getTitle(),
                'description' => $gig->getDescription(),
                'price' => $gig->getPrice(),
                'category' => $gig->getCategory(),
                'username' => $user ? $user->getUsername() : null,
                'userDescription' => $user ? $user->getDescription() : null,
                'userCountry' => $user ? $user->getCountry() : null,
                'userLanguages' => $user ? $user->getLanguages() : null,
                'userOccupation' => $user ? $user->getOccupation() : null,
            ];
        }

        return $this->json($serializedGigs);
    }


    #[Route("/buy_by_gig", name:"buy_by_gig", methods:["GET", "POST"])]
     
    public function buybygig(Request $request, ManagerRegistry $doctrine): Response
    {
    try {
        
        $data = json_decode($request->getContent(), true);
        $id = $data['id'];
        $title = $data['title'];
        $description = $data['description'];
        $price = $data['price'];
        $prix_centimes = $price * 100;
        $commission_centimes = ($price *0.05) * 100;
       
        $repository_gig = $doctrine->getRepository(Gig::class);
        $gig = $repository_gig->findOneBy(['id' => $id]);

        
        $user = $gig->getUser();
        $acct = $user->getAcct();
        $link = 0;
        $pd = $gig->getStripePriceID();
        try {
          
                $stripe = new \Stripe\StripeClient('sk_test_h8UK0oVZURqGfc3UR7tI5VXT00uFt3iGPi');

              $link =  $stripe->checkout->sessions->create(
                    [
                      'invoice_creation' => ['enabled' => true],
                      'line_items' => [
                        [
                          
                          'quantity' => 1,
                          
                          'price_data' => [
                            'currency' => 'eur',
                            'unit_amount' => $prix_centimes,
                            'product_data' => [
                              'name' => $title,
                              'description' => $description,
                              'images' => ["https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/68011f21cd41c664951df861d9f876ac-1682402649988/Art%20_%20Illustration.png"],
                            ],
                          ],
                        ],
                      ],
                      'payment_intent_data' => ['application_fee_amount' => $commission_centimes],
                      'mode' => 'payment',
                      'success_url' => 'http://127.0.0.1:3000/gigs',
                      'cancel_url' => 'http://127.0.0.1:3000/'. $id,
                      
                    ],
                    ['stripe_account' => $acct]
                  );
                  return $this->json([
                    "link" => $link->url
                ], Response::HTTP_CREATED);
      
            
        } catch(\Stripe\Exception\ApiErrorException $e) {
            return $this->json(['error 1' => $e->getMessage()], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        
    } catch (\Exception $e) {
        // Gérer toute autre erreur inattendue
        return $this->json(['error' => $pd], Response::HTTP_INTERNAL_SERVER_ERROR);
    }
    
}
}
