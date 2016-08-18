
Giriş yapılırken illaki kullanıcı adı ile girilmesin,mail adresi ilede girilebilsin diyorsanız yapmanız gereken. 
    
    
    # app/config/security.yml
    security:
        providers:
            fos_userbundle:
                id: fos_user.user_provider.username_email