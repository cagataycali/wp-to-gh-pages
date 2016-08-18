
Symfony2 projemizde asenkron çalışmayı sağlamak için,node js - autobahn js kullanmak zorunda değiliz. Php ratchet temelleri üzerine kodlanmış GeniusesOfSymfony/WebsocketBundle'ı kurmayı anlatacağım. **Çalışan örnek : [GİTHUB](https://github.com/ccali14/SymfonyWebSockets)**   **ADIM 1 **

* * *

  [Composer kurun!](/composer-kurulumu/) Composer yardımcısı ile ilgili ek bundle'ları projemize ekleyeceğiz!   **ADIM 2**

* * *

Projenizi açtığınız dizindeyken composer ile ilgili paketleri çekelim. 
    
    
    php composer.phar require gos/web-socket-bundle

  **ADIM 3 **

* * *

  Yeni bundle'mızı çekirdeğe kaydedelim. #app/AppKernel.php 
    
    
    <?php
    // app/AppKernel.php
    
    public function registerBundles()
    {
        $bundles = array(
            // ...
            new Gos\Bundle\WebSocketBundle\GosWebSocketBundle(), 
            new Gos\Bundle\PubSubRouterBundle\GosPubSubRouterBundle(), 
        );
    }

  **ADIM 4**  

* * *

Websocket sunucumuzun ayarlarını yapalım #app/config/config.yml 
    
    
    # Web Socket Configuration
    gos_web_socket:
        server:
            port: 8080        #The port the socket server will listen on
            host: 127.0.0.1   #The host ip to bind to

**ADIM 5**

* * *

 
    
    
    php app/console gos:websocket:server

Yukarıdaki kodu terminalimize yazdığımızda websocket sunucumuzu çalıştırmış oluyoruz,sunucu tarafından kurulum tamamlandı. **ADIM 6**

* * *

  İstemci (Client) tarafında websocket kurulumu yapalım; Eğer tema motoru olarak TWİG kullanıyorsak 
    
    
    {{ ws_client() }}

Eklememiz ve şu terminal kodunu çalıştırmamız gerekmektedir; 
    
    
    php app/console assetic:dump --env=prod --no-debug

Eğer kullanmıyorsak ; 
    
    
    GosWebSocketBundle/Resources/public/js/vendor/autobahn.min.js
    GosWebSocketBundle/Resources/public/js/gos_web_socket_client.js

Dosyaları html dosyamızın içerisine eklememiz gerekmektedir. **ADIM 7**

* * *

  Açtığımız socket'e client/istemci bağlanabilmesi için script taglari arasında aşağıdaki kodları yazıyoruz. 
    
    
    var webSocket = WS.connect("ws://127.0.0.1:8080");
    
    webSocket.on("socket/connect", function(session){
        //session is an Autobahn JS WAMP session.
    
        console.log("Successfully Connected!");
    })
    
    webSocket.on("socket/disconnect", function(error){
        //error provides us with some insight into the disconnection: error.reason and error.code
    
        console.log("Disconnected for " + error.reason + " with code " + error.code);
    })

Düzenleyeceğimiz kısım ilk baştaki 
    
    
    var webSocket = WS.connect("ws://127.0.0.1:8080"); // Config.yml

  İşlem tamamdır! Projemizin dizinine gelip öğeyi denetleden consol'u açarsak şu şekilde bir yazı göreceğiz! **Successfully Connected!** Ufak bir hatırlatma yapalım, eklediğimiz bundle'ın symfony2 toolbarında bir yeri mevcut fakat projenizde twig içerisinde base'i extend ederseniz toolbarı görebilirsiniz.   ![Ekran Resmi 2015-11-12 10.59.37](/wp-content/uploads/2015/11/Ekran-Resmi-2015-11-12-10.59.37-300x176.png)