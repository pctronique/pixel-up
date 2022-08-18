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

    #[ORM\ManyToOne(inversedBy: 'morts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?CatMort $cat_mort = null;

    #[ORM\ManyToOne(inversedBy: 'morts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?user $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCatMort(): ?CatMort
    {
        return $this->cat_mort;
    }

    public function setCatMort(?CatMort $cat_mort): self
    {
        $this->cat_mort = $cat_mort;

        return $this;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }
}
