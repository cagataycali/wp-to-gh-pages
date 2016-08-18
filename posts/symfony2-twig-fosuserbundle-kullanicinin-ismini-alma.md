title: Symfony2 - Twig - FosUserBundle Kullanıcının İsmini Alma
link: http://cagataycali.com/symfony2-twig-fosuserbundle-kullanicinin-ismini-alma/
author: cagataycali
description: 
post_id: 345
created: 2015/03/28 14:52:10
created_gmt: 2015/03/28 12:52:10
comment_status: open
post_name: symfony2-twig-fosuserbundle-kullanicinin-ismini-alma
status: publish
post_type: post

# Symfony2 - Twig - FosUserBundle Kullanıcının İsmini Alma

{% if is_granted("IS_AUTHENTICATED_REMEMBERED") %}
    
                    {{ app.security.getToken().getUser().getUsername() }}
    
    {% else %}
    
                    <a href="{{ path('fos_user_security_login') }}">{{ 'layout.login'|trans({}, 'FOSUserBundle') }}</a>
    
    {% endif %}