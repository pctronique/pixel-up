<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ModifProfilController extends AbstractController
{
    /**
     * @Route("/modif/profil", name="app_modif_profil")
     */
    public function index(): Response
    {
        return $this->render('modif_profil/index.html.twig', [
            'controller_name' => 'ModifProfilController',
        ]);
    }
}
