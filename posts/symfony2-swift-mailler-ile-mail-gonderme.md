
Projelerimizde swift mailler aracılığıyla mail göndermek için ilk olarak parameters.yml dosyamızı düzenliyoruz.  
    
    
    #MyProjectAppconfigparameters.yml
    
    # This file is auto-generated during the composer install
    parameters:
        database_driver: pdo_mysql
        database_host: localhost
        database_port: null
        database_name: db
        database_user: db
        database_password: pass
        mailer_transport: smtp
        mailer_host: "HOST"
        mailer_user: "USER"
        mailer_password: "PASS"
        mailer_port: 465
        locale: tr
        secret: TOKEN

mailler_host: "HOST" 'u yazarken çift tırnakların zorunlu  olduğunu hatırlatmak isterim.   Ardından; config.yml'daki swiftmailler ile ilgili kısmı dolduralım. 
    
    
    # Swiftmailer Configuration
    swiftmailer:
        transport: %mailer_transport%
        host:      %mailer_host%
        username:  %mailer_user%
        password:  %mailer_password%
        port : %mailer_port%
        encryption: ssl
        auth_mode:  login

Projemizde artık swiftmailler mail atabilecek. Developer aşamasında mailleri takip etmek için config_dev.yml dosyasınıda düzenlemeniz gerecektir. 
    
    
    #swiftmailer:
    #    delivery_address: me@example.com
    
    swiftmailer:
        transport: %mailer_transport%
        host:      %mailer_host%
        username:  %mailer_user%
        password:  %mailer_password%
        port : %mailer_port%
        encryption: ssl
        auth_mode:  login

Fakat mailleri developer aşamasında takip için daha başka ayarlar yapmanız gerekmektedir,onlara değinmeyeceğim . Şu adreste tam configrasyonu bulabilirsiniz.[Developer aşamasında mail handing](http://symfony.com/doc/current/cookbook/email/dev_environment.html).   Son olarak controller içerisinde mail atacağımız yerde yazacağımız kodlar; 
    
    
    #MyProjectsrcMyBundleControllerMyAwesomeController.php
    
     public function awesomeAction($id)
        {
    $message = Swift_Message::newInstance()
                ->setSubject('Merhaba '.$isim.' ! Hint2Flow.com')
                ->setFrom('bilgi@hint2flow.com')
                ->setTo($adres)
                ->setBody("Sayın ".$isim." , Hint2Flow.com'da bir çözümünüz onaylandı. <br><b>İçeriği</b>".$icerik." 'dir. Cevabınız için teşekkür ederiz.",
                    'text/html'
                )
            ;
            $this->get('mailer')->send($message);
             }