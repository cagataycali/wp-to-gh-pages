
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