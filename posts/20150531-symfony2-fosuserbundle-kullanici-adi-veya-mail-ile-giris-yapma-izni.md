title: Symfony2 | FosUserBundle | Kullanıcı adı veya mail ile giriş yapma izni
link: http://cagataycali.com/symfony2-fosuserbundle-kullanici-adi-veya-mail-ile-giris-yapma-izni/
author: cagataycali
description: 
post_id: 454
created: 2015/05/31 23:37:42
created_gmt: 2015/05/31 20:37:42
comment_status: closed
post_name: symfony2-fosuserbundle-kullanici-adi-veya-mail-ile-giris-yapma-izni
status: publish
post_type: post

# Symfony2 | FosUserBundle | Kullanıcı adı veya mail ile giriş yapma izni

Giriş yapılırken illaki kullanıcı adı ile girilmesin,mail adresi ilede girilebilsin diyorsanız yapmanız gereken. 
    
    
    # app/config/security.yml
    security:
        providers:
            fos_userbundle:
                id: fos_user.user_provider.username_email