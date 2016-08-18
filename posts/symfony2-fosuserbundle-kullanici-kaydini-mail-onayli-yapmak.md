
Symfony2 projemizde eğer fos user bundle kullanıyorsak kullanıcı kayıtları sırasında kişiye mail atıp onaylamasını sağlatabiliriz. İlk olarak mail ayarlarımızı yapmalıyız.Bunun için swiftmailler ile mail gönderme makalemdeki giriş ayarlarını yapmanız yeterli olacaktır. 

* * *

 
    
    
    # app/config/config.yml
    fos_user:
        db_driver: orm # other valid values are 'mongodb', 'couchdb' and 'propel'
        firewall_name: main
        user_class: DizinBundleEntityKullanici
        registration:
                confirmation:
                    enabled:    true
        from_email:
                address:        bilgi@hint2flow.com
                sender_name:    Hint2Flow
        service:
                mailer:                 fos_user.mailer.default

Ardından işlem tamamdır !