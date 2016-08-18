
Controllera yeni kayıt ekledikten sonra eklediğimiz kaydı başka bir ilişkili tabloya kayıt etmek istersek eklenilen kaydın id değerini elde etmemiz gerekecektir. 

* * *

Yeni eklenen kaydın değerini şu şekilde alacağız; 
    
    
    public function addMemberAction(Request $request)
        {
            $em = $this->getDoctrine()->getManager();
    
    
            $username        = $request->request->get('kullaniciAdi'); //memberin user name'i
            $kullaniciSifre  = $request->request->get('kullaniciSifre'); //member pass
            $kullaniciMail   = $request->request->get('kullaniciMail');
            $kullaniciAd     = $request->request->get('kullaniciAd');
            $kullaniciGrup   = $request->request->get('grup');
            $leader          = $request->request->get('member_leader');
    
    
    
            $user = new User();
            $user->setUsername($username);
            $user->setEmail($kullaniciMail);
            $user->setPlainPassword($kullaniciSifre);
            $user->setEnabled(true);
            $user->setRoles(array("ROLE_MEMBER"));
    
    
    
            $em->persist($user);
            $em->flush();
    
            $user->getId(); //kayıt olan user'in id sini çek
    
            $group_who= $em->getRepository('TouchBundle:grup')->find($kullaniciGrup);
    
            $grup= new member();
            $grup->setUser($user); //fos_user_id
            $grup->setGrup($group_who); //group_id
            $grup->setMemberAd($kullaniciAd); //isim //Todo yaptığım bu olayı bloguna yazı olarak ekle
    
            $em->persist($grup);
            $em->flush();
    
    
    
    
    
            return $this->redirect($this->generateUrl('anasayfa'));
        }

Örnekte User ve members tablosu bire bir ilişkili ( One-To-One ) members ile group çoktan bire ilişkili ( Many-To-One ) . persist();'den sonra 
    
    
    $user->getId(); //kayıt olan user'in id sini çek

$user artık yeni kaydın Id değerini taşıyor.