<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class JeuxController extends AbstractController
{
    #[Route('/game', name: 'app_jeux')]
    public function index(): Response
    {
        return $this->render('jeux/index.html.twig', [
            'controller_name' => 'JeuxController',
        ]);
    }

    #[Route('/game/ludovic', name: 'app_jeux_ludovic')]
    public function ludovic(): Response
    {
        return $this->render('jeux/ludovic.html.twig', [
            'controller_name' => 'JeuxController',
        ]);
    }

    #[Route('/game/vanessa', name: 'app_jeux_vanessa')]
    public function vanessa(): Response
    {
        return $this->render('jeux/vanessa.html.twig', [
            'controller_name' => 'JeuxController',
        ]);
    }

    #[Route('/game/fred', name: 'app_jeux_fred')]
    public function fred(): Response
    {
        return $this->render('jeux/fred.html.twig', [
            'controller_name' => 'JeuxController',
        ]);
    }
}
