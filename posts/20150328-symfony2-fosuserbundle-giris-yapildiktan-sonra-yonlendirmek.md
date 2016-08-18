title: Symfony2 - FosUserBundle - Giriş yapıldıktan sonra yönlendirmek
link: http://cagataycali.com/symfony2-fosuserbundle-giris-yapildiktan-sonra-yonlendirmek/
author: cagataycali
description: 
post_id: 354
created: 2015/03/28 15:10:10
created_gmt: 2015/03/28 13:10:10
comment_status: open
post_name: symfony2-fosuserbundle-giris-yapildiktan-sonra-yonlendirmek
status: publish
post_type: post

# Symfony2 - FosUserBundle - Giriş yapıldıktan sonra yönlendirmek

# app/config/security.yml
    security:
        firewalls:
            main: # veya farklı bir isim
                form_login:
                    default_target_path: # Yönlendirmeniz burada