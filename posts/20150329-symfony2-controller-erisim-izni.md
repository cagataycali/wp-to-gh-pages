title: Symfony2 - Controller Erişim İzni
link: http://cagataycali.com/symfony2-controller-erisim-izni/
author: cagataycali
description: 
post_id: 363
created: 2015/03/29 00:46:54
created_gmt: 2015/03/28 22:46:54
comment_status: open
post_name: symfony2-controller-erisim-izni
status: publish
post_type: post

# Symfony2 - Controller Erişim İzni

Symfony kullanarak yaptığımız projelerde rollerin dizinlere erişimlerini kısıtlayarak çeşitli güvenlik önlemleri almıştık,bunların yanı sıra controller'ımızın içerisindeki metotlarımıza(fonksiyon) da erişim izni vermemiz gerekebilir. Birinci yol; 
    
    
    use SymfonyComponentSecurityCoreExceptionAccessDeniedException;
    // ...
    
    public function indexAction()
    {
        if (false === $this->get('security.context')->isGranted('ROLE_ADMIN')) {
            throw new AccessDeniedException();
        }
    
        // ...
    }

Symfony temel sürümü indirip kurduysanız [kurmak için tıklayın.](http://cagataycali.me/symfony2-merhaba-dunya/) Kendi içerisinde gelen metotları kullanabilirsiniz. Ayrıca isterseniz diğer bir yol olan `JMSSecurityExtraBundle` ‘ı kurup kullanabilirsiniz: 
    
    
    use JMSSecurityExtraBundleAnnotationSecure;
    
    /**
     * @Secure(roles="ROLE_ADMIN")
     */
    public function indexAction()
    {
        // Kodlarımız buraya gelecek
    }

* * *

Bundle kurmak için ; /var/www/html/Symfony dizinindeyken terminale şu kodları yazıp 
    
    
    composer update jms/security-extra-bundle [ENTER]
    

Bizim için gerekli dosyaları indirmiş olduk.Ardından projemizin çekirdeğine(Kernel) ekleyelim 
    
    
    <?php
    
    // in AppKernel::registerBundles()
    $bundles = array(
        // ...
        new JMSAopBundleJMSAopBundle(),
        new JMSSecurityExtraBundleJMSSecurityExtraBundle(),
        new JMSDiExtraBundleJMSDiExtraBundle($this), //Eklenecek kısım 
        // ...
    );
    

Ardından autoloader(Otomatik yükleyici) deki kodları kontrol edelim 
    
    
    <?php
    
    // app/autoload.php
    $loader->registerNamespaces(array(
        // ...
        // ...
        'JMS'              => __DIR__.'/../vendor/bundles',
        'Metadata'         => __DIR__.'/../vendor/metadata/src',
        'CG'               => __DIR__.'/../vendor/cg-library/src',
        // ...
    ));

Burada herşey yolundaysa yeni eklenen bundle'mızı tanıtalım; 
    
    
    php bin/vendors install