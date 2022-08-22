<?php

namespace App\Controller;

use App\Entity\Score;
use App\Form\ScoreType;
use App\Repository\UserRepository;
use App\Repository\ScoreRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[Route('/score')]
class ScoreController extends AbstractController
{
    #[Route('/', name: 'app_score_index', methods: ['GET'])]
    public function index(ScoreRepository $scoreRepository, ScoreRepository $personnalScoreRepository, UserRepository $user ): Response
    {
        $user = $this->getUser();
        return $this->render('pixel_up/score.html.twig', [
            //'scores' => $scoreRepository->findBy([],['score' => 'DESC']),
            'scores' => $scoreRepository->getUserScore(),
            'personnalScores' => $personnalScoreRepository->getPersonnalScore($user)
        ]);
    }

    /*public function getUserScore($user)
    {
        $query = $this->createQueryBuilder('s')
            ->innerJoin('s.user', 'u');
        $query->andWhere('u = :user')
            ->setParameter(':user', $user);
        $query->orderBy('s.created_at')
            ->setFirstResult(($page * $limit) - $limit)
            ->setMaxResults($limit)
        ;
        $query->orderBy('p.created_at', 'DESC');
        return $query->getQuery()->getResult();
    }*/

}

