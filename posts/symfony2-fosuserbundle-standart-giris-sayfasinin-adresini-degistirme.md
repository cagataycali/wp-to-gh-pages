title: Symfony2 | FosUserBundle Standart giriş sayfasının adresini değiştirme
link: http://cagataycali.com/symfony2-fosuserbundle-standart-giris-sayfasinin-adresini-degistirme/
author: cagataycali
description: 
post_id: 419
created: 2015/04/13 02:59:45
created_gmt: 2015/04/12 23:59:45
comment_status: closed
post_name: symfony2-fosuserbundle-standart-giris-sayfasinin-adresini-degistirme
status: publish
post_type: post

# Symfony2 | FosUserBundle Standart giriş sayfasının adresini değiştirme

Standart giriş sayfası 
    
    
    FOSUserBundle:Security:login.html.twig

iken biz kendi bohçamızın içerisine ( bundle ) bir login sayfası oluşturup oraya yönlendirebiliriz. 
    
    
     protected function renderLogin(array $data)
        {
            return $this->render('FOSUserBundle:Security:login.html.twig', $data);
        }

Aşağıdaki gibi değiştirin; 
    
    
     protected function renderLogin(array $data)
        {
            return $this->render('DenemeBundle::login.html.twig', $data);
        }

  Bu projemizde fos user bundle ile göbek bağımızı ayıracaktır.