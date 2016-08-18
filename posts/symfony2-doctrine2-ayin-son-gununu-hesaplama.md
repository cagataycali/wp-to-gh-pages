
Doctrine2 sorgusu 
    
    
    public function getPostsByMonth($year, $month)
    {
    // Query for blog posts in each month
    $date = new DateTime("{$year}-{$month}-01");
    $toDate = clone $date;
    $toDate->modify("first day next month midnight");
    
    $qb = $this->createQueryBuilder('b')
    ->where('b.created BETWEEN :start AND :end')
    ->setParameter('start', $date)
    ->setParameter('end', $toDate)
    ;
    
    return $qb->getQuery()->getResult();
    }

  Normal php içerisinde kullanımı 
    
    
     // Bu ayın ilk günü
        $d = new DateTime('first day of this month');
        echo $d->format('jS, F Y');
    
        // First day of a specific month
        $d = new DateTime('2010-01-19');
        $d->modify('first day of this month');
        echo $d->format('jS, F Y');
    
        // alternatively...
        echo date_create('2010-01-19')
          ->modify('first day of this month')
          ->format('jS, F Y');

    $toDate->modify('next month midnight -1 second'); Daha fazla gün belirteçleri için [tıkla.](http://php.net/manual/tr/datetime.formats.relative.php)