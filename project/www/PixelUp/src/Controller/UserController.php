<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


 
#[Route('/user')]

class UserController extends AbstractController
{
    
    #[Route('/profil', name: 'app_profil')]


    public function profil(): Response

    {
        return $this->render('user/profil.html.twig', []);
    }

    #[Route('/{id}/edit', name: 'app_modif_profil', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, UserRepository $userRepository): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $userRepository->add($user, true);

            return $this->redirectToRoute('app_pixel_up', [], Response::HTTP_SEE_OTHER);
            $this->addFlash('success', 'change successfully completed');
        }

        return $this->renderForm('user/updateProfil.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_user_delete', methods: ['POST'])]
    public function delete(Request $request, User $user, UserRepository $userRepository): Response
    {
        if ($this->isCsrfTokenValid('delete' . $user->getId(), $request->request->get('_token'))) {

            $userRepository->remove($user, true);
        }
        $this->addFlash('success', 'Suppresion du profil effectuer');
        return $this->redirectToRoute('app_pixel_up', [], Response::HTTP_SEE_OTHER);
    }
}
