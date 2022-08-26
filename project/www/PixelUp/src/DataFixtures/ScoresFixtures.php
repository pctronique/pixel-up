<?php

namespace App\DataFixtures;

use DateTime;
use App\Entity\Score;
use App\DataFixtures\UsersFixtures;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;

class ScoresFixtures extends Fixture implements DependentFixtureInterface
{
    public const USER_REFERENCE = 'user-robin';

    // POUR AJOUTER UN SEUL SCORE 
    /*public function load(ObjectManager $manager): void
    {
        $score = new Score();
        $score->setScore(rand(1, 50000));
        $score->setDate(new DateTime('06/04/2014'));
        $score->setUser($this->getReference(UsersFixtures::USER_REFERENCE));
        $manager->persist($score);
        $manager->flush();
    }*/

    // POUR AJOUTER PLUSIEURS SCORE ( GERER LE NOMBRE DE BOUCLES )
    public function load(ObjectManager $manager): void
    {
        for ($count = 0; $count < 200; $count++) {
            $score = new Score();
            $score->setScore(rand(1, 50000));
            $score->setDate(new DateTime('06/04/2014'));
            $score->setUser($this->getReference("user_". rand(0, 49)));
            $manager->persist($score);
        }
        $manager->flush();
    }

    public function getDependencies()
    {
        return array(
            UsersFixtures::class,
        );
    }
}
