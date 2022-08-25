<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\CatMort;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class CatMortFixtures extends Fixture
{

    public function __construct(
        private UserPasswordHasherInterface $passwordEncoder,
        ){}

    public const USER_REFERENCE = 'user-robin';

    public function load(ObjectManager $manager): void
    {
            $catMort = new CatMort();
            $catMort->setNom('Requin');

            $catMort2 = new CatMort();
            $catMort2->setNom('Chute');

            $catMort3 = new CatMort();
            $catMort3->setNom('Asteroid');

            $manager->persist($catMort);
            $manager->persist($catMort2);
            $manager->persist($catMort3);
            
            $manager->flush();
        
    }
}
