<?php

namespace App\Controller;

use App\Entity\Score;
use App\Form\ScoreType;
use App\Form\SearchScoreType;
use App\Service\ScoreService;
use Doctrine\ORM\EntityManager;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/score/{id}')]
class ScoreController extends AbstractController
{
    #[Route('/', name: 'app_score_index', methods: ['GET'])]
    public function index(ScoreRepository $scoreRepository, UserRepository $userRepo,
     Request $request, ScoreService $ScoreService,
     ManagerRegistry $doctrine,  int $id): Response
    {
        $scores = $ScoreService->getPaginatedScores();
        $form = $this->createForm(SearchScoreType::class);
        $search = $form->handleRequest($request);
        $user = $this->getUser()->getId();
        $personnalRank = $scoreRepository->classmentBDD($user);
        $personnalScores = $scoreRepository->getPersonnalScore($user);




         //TEST NOUVELLE METHODE POUR REMPLACER LE SCORE ACTUEL PAR LE NOUVEAU S'IL EST MEILLEUR 

        //$score = $entityManager->getRepository(Score::class);
        //$entityManager = $doctrine->getManager();


        $nouveauScore = 52000;
        $entityManager = $doctrine->getManager();
        
        //$scoreAll = $scoreRepository->getAllUserScore();
        //$score = $entityManager->getRepository(Score::class)->find($id);
        $userForeach = $userRepo->findAll();
        $userId = "";
        $scoreRank = "";


        
        if($nouveauScore > $personnalScores[0]["score"]){

            foreach ($userForeach as $value) {
                $userId = $value->getId();
                $userRank = $scoreRepository->classmentBDD($value);
                $bliblablou = $scoreRepository->getPersonnalScore($value);
                $scoreRank = $scoreRepository->find($bliblablou[0]["id"]);
                $scoreRank->setClassement($userRank["rank"]);
                $scoreRepository->add($scoreRank);
                $entityManager->persist($scoreRank);
                $entityManager->flush();
                
            }
        }

        
        

        

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
            'personnalScores' => $personnalScores,
            'form' => $form->createView(),
            'rank' =>$personnalRank,
            'user' => $user,
            'user_rank' => $userId,
            'score_rank' => $scoreRank,
        ]);
    }

}

