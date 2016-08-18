title: Symfony2 - FosUserBundle - Farklı Rollere Sahip Kullanıcıları Farklı Yerlere Yönlendirmek
link: http://cagataycali.com/symfony2-fosuserbundle-farkli-rollere-sahip-kullanicilari-farkli-yerlere-yonlendirmek/
author: cagataycali
description: 
post_id: 408
created: 2015/04/02 00:30:02
created_gmt: 2015/04/01 21:30:02
comment_status: open
post_name: symfony2-fosuserbundle-farkli-rollere-sahip-kullanicilari-farkli-yerlere-yonlendirmek
status: publish
post_type: post

# Symfony2 - FosUserBundle - Farklı Rollere Sahip Kullanıcıları Farklı Yerlere Yönlendirmek

Örneğimizde iki adet rol olduğunu düşünelim,ROLE_USER ve ROLE_ADMIN ve biz admin giriş yaptığında direkt /admin route'una gitmesini istiyoruz.Bunu sağlamak için; 
    
    
    use SymfonyComponentHttpFoundationRedirectResponse;
    
    // ...
    
    public function loginAction(Request $request)
    {
        $securityContext = $this->container->get('security.context');
        $router = $this->container->get('router');
    
        if ($securityContext->isGranted('ROLE_ADMIN')) {
            return new RedirectResponse($router->generate('admin_home'), 307);
        } 
    
        if ($securityContext->isGranted('ROLE_USER')) {
            return new RedirectResponse($router->generate('user_home'), 307);
        }
    
        // ...

Override(Tekrar yazımEzmek) yapacağınız dizin; [FOSUserBundleControllerSecurityController](https://github.com/FriendsOfSymfony/FOSUserBundle/blob/master/Controller/SecurityController.php) loginAction olacak.