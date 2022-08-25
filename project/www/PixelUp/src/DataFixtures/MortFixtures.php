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

    // POUR AJOUTER PLUSIEURS MORTS
    public function load(ObjectManager $manager): void
    {
        for ($count = 0; $count < 2; $count++) {
            $mort = new Mort();
            $mort->setCatMort($count);
            $mort->setUser($this->getReference("user_". rand(0, 49)));
            $mort->setCompteur(rand(0,1000));
            $manager->persist($mort);
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
