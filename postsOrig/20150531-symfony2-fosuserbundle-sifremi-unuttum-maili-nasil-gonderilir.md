title: Symfony2 | FosUserBundle | Şifremi unuttum mail'i nasıl gönderilir
link: http://cagataycali.com/symfony2-fosuserbundle-sifremi-unuttum-maili-nasil-gonderilir/
author: cagataycali
description: 
post_id: 456
created: 2015/05/31 23:41:28
created_gmt: 2015/05/31 20:41:28
comment_status: closed
post_name: symfony2-fosuserbundle-sifremi-unuttum-maili-nasil-gonderilir
status: publish
post_type: post

# Symfony2 | FosUserBundle | Şifremi unuttum mail'i nasıl gönderilir

**Projenizde ilgili yere şifremi unuttum butonu koymayı unutmayın.**
    
    
    <a class="form-control btn-warning" href="{{ path('fos_user_resetting_request') }}">Şifremi unutttum</a>

Butonun href bilgisine **fos_user_resetting_request** yazacaksınız.  
    
    
    # app/config/config.yml
    fos_user:
        #...
        resetting:
            email:
                from_email:
                    address:        resetting@acmedemo.com
                    sender_name:    Acme Demo Resetting