title: Symfony2 - FosUserBundle Standart Routing(Yönlendirmeler)
link: http://cagataycali.com/symfony2-fosuserbundle-standart-routingyonlendirmeler/
author: cagataycali
description: 
post_id: 348
created: 2015/03/28 14:57:13
created_gmt: 2015/03/28 12:57:13
comment_status: open
post_name: symfony2-fosuserbundle-standart-routingyonlendirmeler
status: publish
post_type: post

# Symfony2 - FosUserBundle Standart Routing(Yönlendirmeler)

# app/config/routing.yml
    fos_user_security:
        resource: "@FOSUserBundle/Resources/config/routing/security.xml"
    
    fos_user_profile:
        resource: "@FOSUserBundle/Resources/config/routing/profile.xml"
        prefix: /profile
    
    fos_user_register:
        resource: "@FOSUserBundle/Resources/config/routing/registration.xml"
        prefix: /register
    
    fos_user_resetting:
        resource: "@FOSUserBundle/Resources/config/routing/resetting.xml"
        prefix: /resetting
    
    fos_user_change_password:
        resource: "@FOSUserBundle/Resources/config/routing/change_password.xml"
        prefix: /profile

TİPS; 
    
    
    fos_user_security_login
    fos_user_security_check
    fos_user_security_logout
    
    
    fos_user_profile_show
    fos_user_profile_edit
    
    
    fos_user_change_password