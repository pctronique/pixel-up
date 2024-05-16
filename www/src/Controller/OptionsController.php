<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class OptionsController extends AbstractController
{
    #[Route('/options', name: 'app_options')]
    public function index(): Response
    {
        return $this->render('options/index.html.twig', [
            'controller_name' => 'OptionsController',
        ]);
    }
}
