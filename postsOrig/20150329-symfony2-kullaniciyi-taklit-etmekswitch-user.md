title: Symfony2 - Kullanıcıyı Taklit Etmek(Switch User)
link: http://cagataycali.com/symfony2-kullaniciyi-taklit-etmekswitch-user/
author: cagataycali
description: 
post_id: 358
created: 2015/03/29 00:14:28
created_gmt: 2015/03/28 22:14:28
comment_status: open
post_name: symfony2-kullaniciyi-taklit-etmekswitch-user
status: publish
post_type: post

# Symfony2 - Kullanıcıyı Taklit Etmek(Switch User)

Symfony uygulama çatısını kullanarak projelerimizi geliştirirken kimi zaman yönetici kullanıcısından çıkıp üye kullanıcısına geçmek için yeni bir üye yaratıp o üye bilgileriyle giriş yapmak **<del>zorunda kalırız</del>,**Symfony bize bu konuda sihirli bir değnek ile dokunup hiç yönetici hesabından çıkış yapmamıza gerek kalmadan üye gözüyle projemizi görmeyi sağlıyor.Bunu roller arasında Switch User adı verilen ve Türkçe'si "Üye değiştir" olan durumla sağlıyor.Nasıl yapılıyor bakalım: 
    
    
    # app/config/security.yml içerisinde yapacağız değişiklikleri
    
    
    # app/config/security.yml
    security:
        role_hierarchy:
            ROLE_ADMIN:       ROLE_USER
            ROLE_SUPER_ADMIN: [ROLE_ADMIN, ROLE_ALLOWED_TO_SWITCH]

Yukarıdaki parça kodda görüldüğü gibi **SUPER_ADMİN** olan kullanıcı tüm kullanıcıların yetkilerini sınayabilir,onların gözünden sayfaları görebilir. 

* * *

Ek olarak aynı dosya içerisinde switch_user: true yapılmalıdır. 
    
    
    # app/config/security.yml
    security:
        firewalls:
            main:
                # ...
                switch_user: true

Hızlı bir şekilde kullanıcılar arasında geçiş yapmak için; [http://localhost/Symfony/admin?_switch_user=ROLE_USER](http://example.com/somewhere?_switch_user=thomas) Geçiş yaptığınız kullanıcıdan çıkmak için ise; [http://localhost/Symfony/admin?](http://example.com/somewhere?_switch_user=thomas)[_switch_user=_exit](http://example.com/somewhere?_switch_user=_exit)

* * *

Ekstra güvenlik için rollerin değiştirebileceği kullanıcı türlerini siz belirleyebilirsiniz; 
    
    
    # app/config/security.yml
    security:
        firewalls:
            main:
                // ...
                switch_user: { role: ROLE_ADMIN, parameter: _olmak_istenen_kullanici }