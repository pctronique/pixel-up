<?php

namespace App\Entity;

use App\Repository\MortRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
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
    private ?user $user = null;

    #[ORM\OneToMany(mappedBy: 'cat', targetEntity: CatMort::class)]
    private Collection $catMorts;

    public function __construct()
    {
        $this->catMorts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection<int, CatMort>
     */
    public function getCatMorts(): Collection
    {
        return $this->catMorts;
    }

    public function addCatMort(CatMort $catMort): self
    {
        if (!$this->catMorts->contains($catMort)) {
            $this->catMorts->add($catMort);
            $catMort->setCat($this);
        }

        return $this;
    }

    public function removeCatMort(CatMort $catMort): self
    {
        if ($this->catMorts->removeElement($catMort)) {
            // set the owning side to null (unless already changed)
            if ($catMort->getCat() === $this) {
                $catMort->setCat(null);
            }
        }

        return $this;
    }
}
