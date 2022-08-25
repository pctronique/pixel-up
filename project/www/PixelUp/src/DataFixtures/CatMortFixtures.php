<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\CatMort;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CatMortFixtures extends Fixture
{

    public const SUCCES_REFERENCE = 'succes-succes';

    public function load(ObjectManager $manager): void
    {

        $nameCat = [
            0 => "Requin",
            1 => "Chute",
            2 => "Asteroide"
        ];


        for ($i=0; $i < 3; $i++) { 
        
            $catMort = new CatMort();
            $catMort->setNom($nameCat[$i]);
            $this->addReference('succes_'.$i, $catMort);

            $manager->persist($catMort);
            
            $manager->flush();
        }
    }
}
