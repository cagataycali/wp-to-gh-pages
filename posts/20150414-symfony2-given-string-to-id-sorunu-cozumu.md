title: Symfony2 -  Given string to id sorunu çözümü
link: http://cagataycali.com/symfony2-given-string-to-id-sorunu-cozumu/
author: cagataycali
description: 
post_id: 422
created: 2015/04/14 22:40:48
created_gmt: 2015/04/14 19:40:48
comment_status: closed
post_name: symfony2-given-string-to-id-sorunu-cozumu
status: publish
post_type: post

# Symfony2 -  Given string to id sorunu çözümü

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