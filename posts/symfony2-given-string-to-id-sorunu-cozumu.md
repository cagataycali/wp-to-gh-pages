
Projemizde ilişkili tablolara veri girişi yaparken ilişkili tabloya id değerini direkt giriş yapamayız,symfony2 bizden ilişkinin atıfı kimde ise ilk olarak o id değerindeki nesneyi class yapısıyla beraber bir değişkene atamamızı ve ardından sorguya yazmamızı isteyecektir. 
    
    
    public function addMemberAction(Request $request)
        {
    
          $em = $this->getDoctrine()->getManager();
           
          $kullaniciGrup   = $request->request->get('grup');
            
          $grup_repository= $em->getRepository('TouchBundle:grup')->find($kullaniciGrup);
    
           $grup= new member();
           ..
            $grup->setGrup($grup_repository); //group_id
            ..
            $em->persist($grup);
            $em->flush();
    ..

  a