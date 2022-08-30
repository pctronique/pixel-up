<?php

namespace App\Controller;

use App\Entity\CatMort;
use App\Form\CatMortType;
use App\Repository\CatMortRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

#[Route('/cat/mort')]
class CatMortController extends AbstractController
{
    #[Route('/', name: 'app_cat_mort_index', methods: ['GET'])]
    public function index(CatMortRepository $catMortRepository): Response
    {
        return $this->render('cat_mort/index.html.twig', [
            'cat_morts' => $catMortRepository->findAll(),
        ]);
    }

    #[Route('/new', name: 'app_cat_mort_new', methods: ['GET', 'POST'])]
    public function new(Request $request, CatMortRepository $catMortRepository): Response
    {
        $catMort = new CatMort();
        $form = $this->createForm(CatMortType::class, $catMort);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $catMortRepository->add($catMort, true);

            return $this->redirectToRoute('app_cat_mort_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('cat_mort/new.html.twig', [
            'cat_mort' => $catMort,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_cat_mort_show', methods: ['GET'])]
    public function show(CatMort $catMort): Response
    {
        return $this->render('cat_mort/show.html.twig', [
            'cat_mort' => $catMort,
        ]);
    }

    #[Route('/{id}/edit', name: 'app_cat_mort_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, CatMort $catMort, CatMortRepository $catMortRepository): Response
    {
        $form = $this->createForm(CatMortType::class, $catMort);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $catMortRepository->add($catMort, true);

            return $this->redirectToRoute('app_cat_mort_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('cat_mort/edit.html.twig', [
            'cat_mort' => $catMort,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_cat_mort_delete', methods: ['POST'])]
    public function delete(Request $request, CatMort $catMort, CatMortRepository $catMortRepository): Response
    {
        if ($this->isCsrfTokenValid('delete'.$catMort->getId(), $request->request->get('_token'))) {
            $catMortRepository->remove($catMort, true);
        }

        return $this->redirectToRoute('app_cat_mort_index', [], Response::HTTP_SEE_OTHER);
    }
}
