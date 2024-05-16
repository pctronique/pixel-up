<?php

namespace App\Controller;

use App\Repository\MortRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class SuccesController extends AbstractController
{
    #[Route('/user/succes', name: 'app_succes')]
    public function index(MortRepository $mortRepository,UserRepository $user): Response
    {

        $user = $this->getUser();
        $morts = $mortRepository->checkMort($user);
        $trueOrFalseSuccess = [
            0 => false, // Requins
            1 => false, // Requins
            2 => false // Chutes
        ];

            /*if($morts[2]['compteur'] >= 350){ // Astéroides
                $trueOrFalseSuccess[0] = true;
            }

            if($morts[1]['compteur'] >= 600){ // Chutes
                $trueOrFalseSuccess[1] = true;
            }

            if($morts[0]['compteur'] >= 250){ // Requins
                $trueOrFalseSuccess[2] = true;
            }*/



        function array_multisum(array $arr): float { //Fonction pour calculer le total des morts
            $sum = array_sum($arr);
            foreach($arr as $child) {
                $sum += is_array($child) ? array_multisum($child) : 0;
            }
            return $sum;
        }


        
        return $this->render('/user/succes.html.twig', [
            'morts' => $morts,
            'trueOrFalseSuccess' => $trueOrFalseSuccess,
            'totalMorts' => array_multisum($morts),
        ]);

        
        

    }
}
