<?php

namespace App\Controller;

use App\Repository\MortRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\Persistence\ManagerRegistry;

class SuccesController extends AbstractController
{
    #[Route('/user/succes', name: 'app_succes', methods: ['GET', 'POST'])]
    public function index(MortRepository $mortRepository,UserRepository $user, ManagerRegistry $doctrine): Response
    {

        $user = $this->getUser();
        $morts = $mortRepository->checkMort($user);
        $trueOrFalseSuccess = [
            0 => false, // Requins
            1 => false, // Requins
            2 => false // Chutes
        ];

        $newMortType = (!empty($_POST)&&array_key_exists('typeMort',$_POST))? intval($_POST['typeMort']):0;

        if($newMortType == 4 || $newMortType == 5 || $newMortType == 6 || $newMortType == 7 || $newMortType == 8){
            $newMortType = 2;
        }

        $entityManager = $doctrine->getManager();
        $AddMortRequest = "";
        $classMort = "";

        if($newMortType == 1 || $newMortType == 2 || $newMortType == 3){

            $AddMortRequest = $mortRepository->incrementValue($newMortType, $user);
            $classMort = $mortRepository->recupClassMort($user, $newMortType);
            $classMort[0]->setCompteur($AddMortRequest);
            $entityManager->flush();

        }

        


            if($morts[2]['compteur'] >= 350){ // Astéroides
                $trueOrFalseSuccess[0] = true;
            }

            if($morts[1]['compteur'] >= 600){ // Chutes
                $trueOrFalseSuccess[1] = true;
            }

            if($morts[0]['compteur'] >= 250){ // Requins
                $trueOrFalseSuccess[2] = true;
            }



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
            'AddMortRequest' => $AddMortRequest,
            'classMort' => $classMort,
            'newMortType' => $newMortType
        ]);

        
        

    }
}
