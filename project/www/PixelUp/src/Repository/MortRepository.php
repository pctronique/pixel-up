<?php

namespace App\Repository;

use App\Entity\Mort;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Mort>
 *
 * @method Mort|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mort|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mort[]    findAll()
 * @method Mort[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MortRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mort::class);
    }

    public function add(Mort $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Mort $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    
    public function checkMort($user){

        $query = $this->createQueryBuilder('m')
        ->select('u.username', 'm.compteur', 'c.nom')
        ->innerJoin('m.user', 'u')
        ->innerJoin('m.cat_mort', 'c')
        ->where('u = :user')
        ->setParameter(':user', $user);
        return $query->getQuery()->getResult();
    }

    public function incrementValue($newMortType, $user) {
        $qb = $this->createQueryBuilder("m")
        ->select("m.compteur")
        ->innerJoin('m.user', 'u')
        ->where("m.cat_mort = :catMort")
        ->setParameter(':catMort', $newMortType)
        ->andWhere('u = :user')
        ->setParameter(':user', $user);
        $result = $qb->getQuery()->getSingleScalarResult();
        $result+= 1;
        
        return $result;
        
        }

        // Methode qui recupere la class mort

        public function recupClassMort($user, $newMortType){

            $query = $this->createQueryBuilder('m')
                ->select('m')
                ->innerJoin('m.user', 'u')
                ->where("m.cat_mort = :catMort")
                ->setParameter(':catMort', $newMortType)
                ->andWhere('u = :user')
                ->setParameter(':user', $user);
            return $query->getQuery()->getResult();
        }

    //    /**
    //     * @return Mort[] Returns an array of Mort objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('m.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?Mort
    //    {
    //        return $this->createQueryBuilder('m')
    //            ->andWhere('m.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
