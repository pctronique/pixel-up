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

    
     #[Route('/profil', name: 'app_profil')]
     

    public function profil(): Response
    
    {
        return $this->render('pixel_up/profil.html.twig', [
            
        ]);
    }

    

}