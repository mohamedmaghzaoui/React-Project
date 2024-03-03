<?php

namespace App\Entity;

use App\Repository\GigRepository;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\NullableType;

#[ORM\Entity(repositoryClass: GigRepository::class)]

class Gig
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private $id;
    #[ORM\ManyToOne(targetEntity: "App\Entity\User", inversedBy: "gigs")]
    #[ORM\JoinColumn(name: "user_id", referencedColumnName: "id")]
    private $user;
    #[ORM\Column(type: "string", length: 255)]
    private $title;

    #[ORM\Column(type: "text")]
    private $description;

    #[ORM\Column(type: "decimal", precision: 10, scale: 2)]
    private $price;

    #[ORM\Column(type: "string", length: 255, nullable: true)]
    private $userProfileImage;

    #[ORM\Column(length: 255, nullable: true)]
    private $gigImage;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $category = null;

    public function getGigImage(): ?string
    {
        return $this->gigImage;
    }

    public function setGigImage(string $gigImage): self
    {
        $this->gigImage = $gigImage;

        return $this;
    }

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set the value of id
     */
    public function setId($id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Get the value of title
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Set the value of title
     */
    public function setTitle($title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set the value of description
     */
    public function setDescription($description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of price
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set the value of price
     */
    public function setPrice($price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get the value of category
     */
    public function getCategory(): ?string
    {
        return $this->category;
    }

    /**
     * Set the value of category
     */
    public function setCategory(?string $category): self
    {
        $this->category = $category;

        return $this;
    }

    /**
     * Get the value of user
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set the value of user
     */
    public function setUser($user): self
    {
        $this->user = $user;

        return $this;
    }
}
