title: Symfony2 - FosUserBundle Kayıt Rolü Düzenlemek
link: http://cagataycali.com/symfony2-fosuserbundle-kayit-rolu-duzenlemek/
author: cagataycali
description: 
post_id: 403
created: 2015/04/01 17:38:18
created_gmt: 2015/04/01 14:38:18
comment_status: open
post_name: symfony2-fosuserbundle-kayit-rolu-duzenlemek
status: publish
post_type: post

# Symfony2 - FosUserBundle Kayıt Rolü Düzenlemek

Kayıt sırasında kullanıcının standart rolünü değiştirmek için ; 
    
    
    #vendors/friendsofsymfony/user-bundle/Model/UserInterface.php
    
    
    const ROLE_DEFAULT = 'ROLE_USER';
    const ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN';
    
    
    const ROLE_DEFAULT = 'ROLE_OGRETMEN';
    const ROLE_SUPER_ADMIN = 'ROLE_SUPER_ADMIN';