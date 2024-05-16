<?php

namespace App\Entity;

use App\Repository\CatMortRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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

    #[ORM\OneToMany(mappedBy: 'cat_mort', targetEntity: Mort::class)]
    private Collection $morts;

    public function __construct()
    {
        $this->morts = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Mort>
     */
    public function getMorts(): Collection
    {
        return $this->morts;
    }

    public function addMort(Mort $mort): self
    {
        if (!$this->morts->contains($mort)) {
            $this->morts->add($mort);
            $mort->setCatMort($this);
        }

        return $this;
    }

    public function removeMort(Mort $mort): self
    {
        if ($this->morts->removeElement($mort)) {
            // set the owning side to null (unless already changed)
            if ($mort->getCatMort() === $this) {
                $mort->setCatMort(null);
            }
        }

        return $this;
    }
}
