<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SuccesController extends AbstractController
{
    #[Route('/succes', name: 'app_succes')]
    public function index(): Response
    {
        
        return $this->render('pixel_up/succes.html.twig', [
            'controller_name' => 'SuccesController',
        ]);
    }
}
