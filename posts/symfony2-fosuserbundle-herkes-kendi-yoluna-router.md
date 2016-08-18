title: Symfony2 - FosUserBundle : Herkes kendi yoluna router
link: http://cagataycali.com/symfony2-fosuserbundle-herkes-kendi-yoluna-router/
author: cagataycali
description: 
post_id: 414
created: 2015/04/13 11:23:38
created_gmt: 2015/04/13 08:23:38
comment_status: closed
post_name: symfony2-fosuserbundle-herkes-kendi-yoluna-router
status: publish
post_type: post

# Symfony2 - FosUserBundle : Herkes kendi yoluna router

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