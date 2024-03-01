<?php

namespace App\Entity;

use App\Repository\MessageRepository;
use Doctrine\ORM\Mapping as ORM;
use PhpParser\Node\NullableType;

#[ORM\Entity(repositoryClass: MessageRepository::class)]

class Message
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: "integer")]
    private $id;
    #[ORM\ManyToOne(targetEntity: "App\Entity\User", inversedBy: "messages")]
    private $user;
    #[ORM\ManyToOne(targetEntity: "App\Entity\Chat", inversedBy: "messages")]
    private $chat;
    #[ORM\Column(type: "text")]
    private $content;
    #[ORM\Column(type: "datetime")]
    private $date;


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
     * Get the value of chat
     */
    public function getChat()
    {
        return $this->chat;
    }

    /**
     * Set the value of chat
     */
    public function setChat($chat): self
    {
        $this->chat = $chat;

        return $this;
    }

    /**
     * Get the value of content
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Set the value of content
     */
    public function setContent($content): self
    {
        $this->content = $content;

        return $this;
    }

    /**
     * Get the value of date
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set the value of date
     */
    public function setDate($date): self
    {
        $this->date = $date;

        return $this;
    }
}