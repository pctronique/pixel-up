<?php

namespace App\Entity;

use App\Repository\MortRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MortRepository::class)]
class Mort
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?users $id_users = null;

    #[ORM\Column]
    private ?int $id_cat = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdUsers(): ?users
    {
        return $this->id_users;
    }

    public function setIdUsers(?users $id_users): self
    {
        $this->id_users = $id_users;

        return $this;
    }

    public function getIdCat(): ?int
    {
        return $this->id_cat;
    }

    public function setIdCat(int $id_cat): self
    {
        $this->id_cat = $id_cat;

        return $this;
    }
}
