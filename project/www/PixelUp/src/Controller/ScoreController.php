<?php

namespace App\Controller;

use App\Entity\Score;
use App\Form\ScoreType;
use App\Form\SearchScoreType;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\ScoreService;

#[Route('/score')]
class ScoreController extends AbstractController
{
    #[Route('/', name: 'app_score_index', methods: ['GET'])]
    public function index(ScoreRepository $scoreRepository, UserRepository $user, Request $request, ScoreService $ScoreService): Response
    {
        $scores = $ScoreService->getPaginatedScores();
        $form = $this->createForm(SearchScoreType::class);
        $search = $form->handleRequest($request);
        $user = $this->getUser();

        

        if($form->isSubmitted() && $form->isValid() && empty($search->get('mots')->getData())) {
            return $this->redirectToRoute('app_score_index');
            exit();
            echo'test1';
        }else if($form->isSubmitted() && $form->isValid()){
            // On recherche les scores correspondant au joueur
            $scores = $scoreRepository->search($search->get('mots')->getData());
        } 

        return $this->render('pixel_up/score.html.twig', [
            'scores' => $scores,
            'personnalScores' => $scoreRepository->getPersonnalScore($user),
            'form' => $form->createView()
        ]);
    }

}

