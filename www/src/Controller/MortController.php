<?php

namespace App\Controller;

use App\Entity\Mort;
use App\Form\MortType;
use App\Repository\MortRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/mort')]
class MortController extends AbstractController
{
    #[Route('/', name: 'app_mort_index', methods: ['GET'])]
    public function index(MortRepository $mortRepository, /*UserRepository $user*/): Response
    {

        $user = $this->getUser();

        return $this->render('pixel_up/mort.html.twig', [
            'morts' => $mortRepository->checkMort(/*$user*/)
        ]);
    }

}
