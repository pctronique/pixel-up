<?php

namespace App\Repository;

use App\Entity\Score;
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

    public function getUserScore(){
        $query = $this->createQueryBuilder('s')
            ->innerJoin('s.user', 'u')
            ->select('u.username, s.score, s.date');
        $query->orderBy('s.score', 'DESC');
        return $query->getQuery()->getResult();
    }

    public function getPersonnalScore($user){
        $query = $this->createQueryBuilder('s')
        ->select('s.score','u.username')
        ->innerJoin('s.user', 'u')
        ->where('u = :user')
        ->setParameter(':user', $user);
        $query->orderBy('s.score', 'DESC');
        return $query->getQuery()->getResult();
    }

    public function search($mots){

        $query = $this->createQueryBuilder('u');
        if($mots != null) {
            $query->where('MATCH_AGAINST(u.username) AGAINST(:mots boolean)>0')
            ->setParameter('mots', $mots);
        }
        return $query->getQuery()->getResult();

    }

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
