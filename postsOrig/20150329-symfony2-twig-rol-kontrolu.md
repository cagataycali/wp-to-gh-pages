title: Symfony2 - Twig - Rol Kontrolü
link: http://cagataycali.com/symfony2-twig-rol-kontrolu/
author: cagataycali
description: 
post_id: 361
created: 2015/03/29 00:28:48
created_gmt: 2015/03/28 22:28:48
comment_status: open
post_name: symfony2-twig-rol-kontrolu
status: publish
post_type: post

# Symfony2 - Twig - Rol Kontrolü

Şablonlarımızın içerisinde rol kontrolü yaptırmak için örnek kod; 
    
    
    {% if is_granted('ROLE_ADMIN') %}
        <a href="...">Sil</a>
    {% endif %}