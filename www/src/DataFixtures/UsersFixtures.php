<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UsersFixtures extends Fixture
{

    public function __construct(
        private UserPasswordHasherInterface $passwordEncoder,
        ){}

    public const USER_REFERENCE = 'user-robin';

    public function load(ObjectManager $manager): void
    {
        /*$admin = new User();
        $admin->setUsername('Robin');
        $admin->setPassword(
            $this->passwordEncoder->hashPassword($admin, 'secret')
        );
        $admin->setRoles(['ROLE_USER']);
        $this->addReference(self::USER_REFERENCE, $admin);

        $manager->persist($admin);
        $manager->flush();*/


        for ($i = 0; $i < 50; $i++) {

            $admin = new User();
            $admin->setUsername('Robin' . $i);
            $admin->setRoles(['ROLE_USER']);
            $admin->setPassword(
                $this->passwordEncoder->hashPassword($admin, 'secret')
            );
            $this->addReference('user_'.$i, $admin);
            $manager->persist($admin);
            
            }
            $manager->flush();
    }
}
