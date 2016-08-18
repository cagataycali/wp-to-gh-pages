title: Symfony2 | Farklı adreslerde farklı HTTP protokolü kullanmak
link: http://cagataycali.com/symfony2-farkli-adreslerde-farkli-http-protokolu-kullanmak/
author: cagataycali
description: 
post_id: 465
created: 2015/06/01 02:05:18
created_gmt: 2015/05/31 23:05:18
comment_status: closed
post_name: symfony2-farkli-adreslerde-farkli-http-protokolu-kullanmak
status: publish
post_type: post

# Symfony2 | Farklı adreslerde farklı HTTP protokolü kullanmak

Http veya Https arasında değişiklik yapmamız gereken durumlarda security.yml dosyasını düzenleyeceğiz. 
    
    
    access_control:
        - { path: ^/secure, roles: ROLE_ADMIN, requires_channel: https }

**requires_channel: https **