<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\Mort;
use App\Repository\MortRepository;
use App\Repository\CatMortRepository;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

class RegistrationController extends AbstractController
{
    #[Route('/inscription', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager,  MortRepository $mortRepository, CatMortRepository $catMortRepository): Response
    {
        $user = new User();

        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

           

            // do anything else you need here, like send an email

            $catMort = $catMortRepository->findAll();



           //Permet d'ajouter une mort = 0, affiche les succées
            foreach ($catMort as $value) {
 
                $mort = new Mort();
                $mort->setUser($user);
                $mort->setCompteur(0);
                $mort->setCatMort($value);
                $mortRepository->add($mort);

                

            };

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('Félicitation !', 'Vous avez avez créer vôtre profil');
            return $this->redirectToRoute('app_pixel_up');
        }


        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form->createView(),
        ]);
    }
}
