<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\TextType;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\ErrorHandler\Collecting;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\component\PasswordHasher\Hasher\UserPasswordHasher;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    private $passwordHasher;

    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]

    private ?int $id = null;

    #[ORM\Column(length: 180, unique: true)]
    private ?string $email = null;
    #[ORM\OneToMany(targetEntity: "App\Entity\Gig", mappedBy: "user")]
    private Collection $gigs;
    #[ORM\OneToMany(targetEntity: "App\Entity\Message", mappedBy: "user")]
    private Collection $messages;
    #[ORM\ManyToMany(targetEntity: "App\Entity\Chat", mappedBy: "user")]
    private Collection $chats;
    public function __construct(UserPasswordHasher $passwordHasher)
    {
        $this->gigs = new ArrayCollection();
        $this->passwordHasher = $passwordHasher;
    }

    #[ORM\Column(length: 55)]
    private ?string $username = null;

    #[ORM\Column]
    private array $roles = [];

    /**
     * @var string The hashed password
     */
    #[ORM\Column]
    private ?string $password = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $userImage = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $description = null;
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $country = null;
    #[ORM\Column]
    private ?array $languages = [];
    #[ORM\Column(length: 255, nullable: true)]
    private ?string $occupation = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getMessages(): Collection
    {
        return $this->messages;
    }

    public function setMessages(Collection $messages): self
    {
        $this->messages = $messages;

        return $this;
    }

    public function getChats(): Collection
    {
        return $this->chats;
    }

    public function setChats(Collection $chats): self
    {
        $this->chats = $chats;

        return $this;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }


    /** mettre 'name, lastname username et email' **/

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $this->passwordHasher->hashPassword($this, $password);

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials(): void
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * Get the value of userImage
     */
    public function getUserImage(): ?string
    {
        return $this->userImage;
    }

    /**
     * Set the value of userImage
     */
    public function setUserImage(?string $userImage): self
    {
        $this->userImage = $userImage;

        return $this;
    }

    /**
     * Get the value of description
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * Set the value of description
     */
    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get the value of Country
     */
    public function getCountry(): ?string
    {
        return $this->country;
    }

    /**
     * Set the value of Country
     */
    public function setCountry(?string $country): self
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get the value of languages
     */
    public function getLanguages(): ?array
    {
        return $this->languages;
    }

    /**
     * Set the value of languages
     */
    public function setLanguages(?array $languages): self
    {
        $this->languages = $languages;

        return $this;
    }

    /**
     * Get the value of occupation
     */
    public function getOccupation(): ?string
    {
        return $this->occupation;
    }

    /**
     * Set the value of occupation
     */
    public function setOccupation(?string $occupation): self
    {
        $this->occupation = $occupation;

        return $this;
    }
}
