<?php

namespace App\Service;

use App\Entity\Score;
use App\Repository\ScoreRepository;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class ScoreService
{
    public function __construct(private RequestStack $requestStack, private ScoreRepository $scoreRepo, private PaginatorInterface $paginator){

    }

    public function getPaginatedScores(?Score $score = null){
        $request = $this->requestStack->getMainRequest();
        $page = $request->query->getInt('page',1);
        $limit = 5;
        $scoresQuery = $this->scoreRepo->getUserScore();

        return $this->paginator->paginate($scoresQuery, $page, $limit);
    }

    /*public function getPaginatedScoresSearch(){

        $mots = $_GET["mots"];
        $request = $this->requestStack->getMainRequest();
        $page = $request->query->getInt('page',1);
        $limit = 1;
        $scoresQuery = $this->scoreRepo->search($mots);

        return $this->paginator->paginate($scoresQuery, $page, $limit);
    }*/
}