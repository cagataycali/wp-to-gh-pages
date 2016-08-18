
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