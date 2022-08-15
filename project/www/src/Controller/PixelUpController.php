<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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

    /**
     * @Route("/profil", name="app_profil")
     */
    public function profil(): Response
    {
        return $this->render('pixel_up/profil.html.twig', [
            'controller_name' => 'PixelUpController',
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
