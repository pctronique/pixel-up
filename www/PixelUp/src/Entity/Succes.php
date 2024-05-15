<?php

namespace App\Entity;

use App\Repository\SuccesRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: SuccesRepository::class)]
class Succes
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\OneToOne(inversedBy: 'succes', cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?user $user = null;

    #[ORM\Column]
    private ?int $succ1 = null;

    #[ORM\Column]
    private ?int $succ2 = null;

    #[ORM\Column]
    private ?int $succ3 = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(user $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getSucc1(): ?int
    {
        return $this->succ1;
    }

    public function setSucc1(int $succ1): self
    {
        $this->succ1 = $succ1;

        return $this;
    }

    public function getSucc2(): ?int
    {
        return $this->succ2;
    }

    public function setSucc2(int $succ2): self
    {
        $this->succ2 = $succ2;

        return $this;
    }

    public function getSucc3(): ?int
    {
        return $this->succ3;
    }

    public function setSucc3(int $succ3): self
    {
        $this->succ3 = $succ3;

        return $this;
    }
}
