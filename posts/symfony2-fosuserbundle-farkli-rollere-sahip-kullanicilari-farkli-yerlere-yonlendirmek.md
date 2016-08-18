
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