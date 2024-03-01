<?php

namespace App\Entity;

use App\Repository\ChatRepository;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\NullableType;

#[ORM\Entity(repositoryClass: ChatRepository::class)]

class Chat
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private $id;
    #[ORM\ManyToMany(targetEntity: "App\Entity\User", inversedBy: "chats")]
    private $user;
    #[ORM\OneToMany(targetEntity: "App\Entity\Message", mappedBy: "chat")]
    private $messages;
    #[ORM\Column(type: "string", length: 255)]
    private $title;

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

    /**
     * Get the value of messages
     */
    public function getMessages()
    {
        return $this->messages;
    }

    /**
     * Set the value of messages
     */
    public function setMessages($messages): self
    {
        $this->messages = $messages;

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
}