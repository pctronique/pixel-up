<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Mort;
use App\DataFixtures\CatMortFixtures;
use App\DataFixtures\UsersFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class MortFixtures extends Fixture implements DependentFixtureInterface
{
    public const USER_REFERENCE = 'user-robin';
    public const SUCCES_REFERENCE = 'succes-succes';

    // POUR AJOUTER PLUSIEURS MORTS
    public function load(ObjectManager $manager): void
    {

        for ($i=0; $i < 50 ; $i++) { 
            
        
        
            for ($count = 0; $count < 3; $count++) {
                $mort = new Mort();
                $mort->setCatMort($this->getReference("succes_".$count));
                $mort->setUser($this->getReference("user_".$i));
                $mort->setCompteur(rand(0,1000));
                $manager->persist($mort);
            }
        
    
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            CatMortFixtures::class,
            UsersFixtures::class,
        );
    }
}
