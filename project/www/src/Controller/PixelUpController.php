<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PixelUpController extends AbstractController
{
    /**
     * @Route("/pixel/up", name="app_pixel_up")
     */
    public function index(): Response
    {
        return $this->render('pixel_up/index.html.twig', [
            'controller_name' => 'PixelUpController',
        ]);
    }
}
