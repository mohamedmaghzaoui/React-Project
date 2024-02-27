<?php

namespace App\Controller;

class Person
{
    public $id;
    public $name;
    public $age;

    public function __construct($id, $name, $age)
    {
        $this->id = $id;
        $this->name = $name;
        $this->age = $age;
    }
}





use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    #[Route('/test')]
    public function index(Request $request): JsonResponse
    {

        $data = $request->getContent();

        $person1 = new Person(1, "John", 25);
        $person2 = new Person(2, "Alice", 30);
        $person3 = new Person(3, "Bob", 28);
        $person4 = new Person(4, "Eve", 22);

        // Create an array of objects
        $people = array($person1, $person2, $person3, $person4);

        //send json data
        return $this->json([
            "test" => $data
        ]);
    }
}
