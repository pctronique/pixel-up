<?php

namespace App\Controller;


use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class PixelUpController extends AbstractController
{
    /**
     * @Route("/", name="app_pixel_up")
     */
    public function index(): Response
    {
        return $this->render('pixel_up/home.html.twig', [
            'controller_name' => 'PixelUpController',
        ]);
    }

    
     #[Route('/profil', name: 'app_profil', methods: ['GET'])]
     

    public function profil(UserRepository $userRepository): Response
    
    {
        return $this->render('pixel_up/profil.html.twig', [
            'users' => $userRepository->findAll(),
        ]);
    }

    /**
     * @Route("/updateProfil", name="app_modif_profil")
     */
    public function updateP(): Response
    {
        return $this->render('pixel_up/updateProfil.html.twig', [
            'controller_name' => 'PixelUpController',
        ]);
    }

}