title: Symfony2 - FosUserBundle Yeni Kullanıcı Ekleme Controller'ı
link: http://cagataycali.com/symfony2-fosuserbundle-yeni-kullanici-ekleme-controlleri/
author: cagataycali
description: 
post_id: 411
created: 2015/04/03 22:15:46
created_gmt: 2015/04/03 19:15:46
comment_status: open
post_name: symfony2-fosuserbundle-yeni-kullanici-ekleme-controlleri
status: publish
post_type: post

# Symfony2 - FosUserBundle Yeni Kullanıcı Ekleme Controller'ı

Yeni kullanıcıyı eklerken kullanacağımız parça kod ;  
    
    
    use AcmeDemoBundleEntityUser;
    use SymfonyComponentHttpFoundationResponse;
    use SymfonyComponentHttpFoundationRequest;
    ..
    $user = new User(); 
            $user->setUsername($kullaniciAdi);
            $user->setEmail($kullaniciMail);
            $user->setPlainPassword($kullaniciSifre);
            $user->setEnabled(true);
            $user->setRoles(array("ROLE_USER"));
    
            $em->persist($user);
            $em->flush();