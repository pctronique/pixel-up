<?php

namespace App\Controller;

use App\Entity\Score;
use App\Repository\ScoreRepository;
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

    /**
     * @Route("/score", name="app_score")
     */
    public function score(): Response
    {
        return $this->render('pixel_up/score.html.twig', [
            'controller_name' => 'PixelUpController',
        ]);
    }
}
