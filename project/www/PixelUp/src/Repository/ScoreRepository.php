<?php

namespace App\Repository;

use App\Entity\Score;
use Doctrine\ORM\Query;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Score>
 *
 * @method Score|null find($id, $lockMode = null, $lockVersion = null)
 * @method Score|null findOneBy(array $criteria, array $orderBy = null)
 * @method Score[]    findAll()
 * @method Score[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ScoreRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Score::class);
    }

    public function add(Score $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Score $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }



    // Methode qui recherche le meilleur score de chaque joueur ( Classement )

    public function getUserScore(){
        $query = $this->createQueryBuilder('s')
            ->innerJoin('s.user', 'u')
            ->select('u.username, MAX(s.score) AS max_score, s.date');
        $query->groupBy('s.user');
        $query->orderBy('max_score', 'DESC');
        return $query->getQuery()->getResult();
    }


    // Methode qui recherche le meilleur score personnel de l'utilisateur connecté

    public function getPersonnalScore($user){
        $query = $this->createQueryBuilder('s')
        ->select('s.score','u.username')
        ->innerJoin('s.user', 'u')
        ->where('u = :user')
        ->setParameter(':user', $user);
        $query->orderBy('s.score', 'DESC');
        return $query->getQuery()->getResult();
    }

    // Methode qui recherche le meilleur score du joueur recherché par son identifiant

    public function search($mots){

        $query = $this->createQueryBuilder('s');
        if($mots != null) {
            $query->select('u.username', 'MAX(s.score) AS max_score', 's.date')
            ->innerJoin('s.user', 'u')
            ->where('MATCH_AGAINST(u.username) AGAINST(:mots boolean)>0')
            ->setParameter('mots', $mots);
            $query->groupBy('s.user');
            $query->orderBy('max_score', 'DESC');
        }
        return $query->getQuery()->getResult();

    }

    // TEST METHODES POUR CLASSER LES SCORES 

    //public function classmentBDD($user){

    //$subquery = $this->createQueryBuilder('s')
    //        ->select('s.compteur')
    //        ->andWhere('s.user > :user')
    //        ->setParameter('user', $user)
    //    ;

    //     return $this->createQueryBuilder('s')
    //        ->select('1 + count(*) AS rank')
    //        ->andWhere('f.points > :subquery')
    //        ->setParameter('subquery', $subquery)
    //        ->getQuery()
    //       ->getOneOrNullResult()
    //   ;
    //}

//    /**
//     * @return Score[] Returns an array of Score objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('s.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Score
//    {
//        return $this->createQueryBuilder('s')
//            ->andWhere('s.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
