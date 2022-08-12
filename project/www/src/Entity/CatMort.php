<?php

namespace App\Entity;

use App\Repository\CatMortRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: CatMortRepository::class)]
class CatMort
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $nom = null;

    #[ORM\ManyToOne(inversedBy: 'catMorts')]
    #[ORM\JoinColumn(nullable: false)]
    private ?mort $cat = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getCat(): ?mort
    {
        return $this->cat;
    }

    public function setCat(?mort $cat): self
    {
        $this->cat = $cat;

        return $this;
    }
}
