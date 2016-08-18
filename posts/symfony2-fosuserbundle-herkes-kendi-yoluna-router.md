
FosUser bundle kullanarak giriş yapıldıktan sonra herkesin kendi rolune uygun bir routinge gitmesini sağlamak için indexAction içerisine şunları girmeniz yeterlidir.    
    
    
    #use SymfonyComponentHttpFoundationRedirectResponse;
    ..
    public function indexAction(Request $request)
        {
            $session = $request->getSession(); //session değerini al
    
    
            $securityContext = $this->container->get('security.context');
            $router = $this->container->get('router');
    
            if ($securityContext->isGranted('ROLE_OGRETMEN')) {
                return new RedirectResponse($router->generate('dashboard'), 307);
            }
    
            if ($securityContext->isGranted('ROLE_OGRENCI')) {
                return new RedirectResponse($router->generate('own_anasayfa'), 307);
            }
    
    
            return $this->render('TouchBundle:Anasayfa:index.html.twig');
        }