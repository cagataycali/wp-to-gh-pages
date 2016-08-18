
Fos user bundle 'ı kurmadan önce symfony dosyalarımız arasında ilk olarak kendi bundle'mızı oluşturmamız gerekmektedir.Kendi bundle'mızı yani bohçamızı açmadan içerisinde fos user bundle tanımlayamayız. Yeni bundle açmak için : [tıkla ](http://cagataycali.me/symfony2-yeni-bundle-olusturmak/)

* * *

  FosUserBundle symfony2 projenizde kullanıcı giriş,çıkış,kayıt, şifremi unuttum,kullanıcı davet et vb birçok özelliği size hızlıca kullanma imkanı veriyor.Hızlıca kuruluma geçelim. 

* * *

  Eğer composer yoksa ilk olarak composer kuralım.Composer kurulum makalesi [burada](http://cagataycali.me/composer-kurulumu/). 

* * *

## HATIRLATMA: 

Projenizin dizinine yani #/var/www/html/my_project dizinine çıkıp aşağıdaki terminal kodunu direkt kopyalıyıp yapıştıracaksınız. Veya phpstorm kullanıyorsanız terminal'de su yetkilerine sahip olduktan sonra aşağıdaki terminal kodlarını direkt yapıştıracaksınız. **ADIM 1** Terminal üzerinden fosuserbundle paketini çağıracak composer komutunu girelim. 
    
    
    php composer.phar require friendsofsymfony/user-bundle "~2.0@dev"

Composer projemizin **vendor/friendsofsymfony** dizinine fosuserbundle dosyalarını kuracaktır. 

* * *

**ADIM 2** AppKernel.php 'den bundle'mızı aktif edelim. 
    
    
    <?php
    // app/AppKernel.php
    
    public function registerBundles()
    {
        $bundles = array(
            // ...
            new FOSUserBundleFOSUserBundle(),
        );
    }

 

* * *

  **ADIM 3** Projemizde User adlı bir entity oluşturalım. 

#### a) Doctrine ORM User class'ı

##### Annotations
    
    
    <?php
    // src/Acme/UserBundle/Entity/User.php
    
    namespace AcmeUserBundleEntity;
    
    use FOSUserBundleModelUser as BaseUser;
    use DoctrineORMMapping as ORM;
    
    /**
     * @ORMEntity
     * @ORMTable(name="fos_user")
     */
    class User extends BaseUser
    {
        /**
         * @ORMId
         * @ORMColumn(type="integer")
         * @ORMGeneratedValue(strategy="AUTO")
         */
        protected $id;
    
        public function __construct()
        {
            parent::__construct();
            // your own logic
        }
    }

 

##### yaml
    
    
    <?php
    // src/Acme/UserBundle/Entity/User.php
    
    namespace AcmeUserBundleEntity;
    
    use FOSUserBundleModelUser as BaseUser;
    
    /**
     * User
     */
    class User extends BaseUser
    {
        public function __construct()
        {
            parent::__construct();
            // your own logic
        }
    }

Eğer yaml kullanıyorsanız iki dosya oluşturmalısınız. Entity ve orm.yml 
    
    
    # src/Acme/UserBundle/Resources/config/doctrine/User.orm.yml
    AcmeUserBundleEntityUser:
        type:  entity
        table: fos_user
        id:
            id:
                type: integer
                generator:
                    strategy: AUTO

 

##### xml
    
    
    <?php
    // src/Acme/UserBundle/Entity/User.php
    
    namespace AcmeUserBundleEntity;
    
    use FOSUserBundleModelUser as BaseUser;
    
    /**
     * User
     */
    class User extends BaseUser
    {
        public function __construct()
        {
            parent::__construct();
            // your own logic
        }
    }

Eğer xml kullanıyorsanız da iki dosya oluşurmalısınız. User entity ve user.xml 
    
    
    <?xml version="1.0" encoding="utf-8"?>
    <!-- src/Acme/UserBundle/Resources/config/doctrine/User.orm.xml -->
    <doctrine-mapping xmlns="http://doctrine-project.org/schemas/orm/doctrine-mapping"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://doctrine-project.org/schemas/orm/doctrine-mapping http://doctrine-project.org/schemas/orm/doctrine-mapping.xsd">
    
        <entity name="AcmeUserBundleEntityUser" table="fos_user">
            <id name="id" type="integer" column="id">
                <generator strategy="AUTO"/>
            </id>
        </entity>
    </doctrine-mapping>

#### b)MongoDB User class'ı
    
    
    <?php
    // src/Acme/UserBundle/Document/User.php
    
    namespace AcmeUserBundleDocument;
    
    use FOSUserBundleModelUser as BaseUser;
    use DoctrineODMMongoDBMappingAnnotations as MongoDB;
    
    /**
     * @MongoDBDocument
     */
    class User extends BaseUser
    {
        /**
         * @MongoDBId(strategy="auto")
         */
        protected $id;
    
        public function __construct()
        {
            parent::__construct();
            // your own logic
        }
    }

 

#### c) CouchDB User class'ı
    
    
    <?php
    // src/Acme/UserBundle/Document/User.php
    
    namespace AcmeUserBundleCouchDocument;
    
    use FOSUserBundleModelUser as BaseUser;
    use DoctrineODMCouchDBMappingAnnotations as CouchDB;
    
    /**
     * @CouchDBDocument
     */
    class User extends BaseUser
    {
        /**
         * @CouchDBId
         */
        protected $id;
    
        public function __construct()
        {
            parent::__construct();
            // your own logic
        }

 

> # İlişkiler kurarken
>     
>     
>     public function __construct()
>         {
>             parent::__construct();
>             // your own logic
>         }

 
    
    
    parent::__construct(); 

  Olmazsa projenizde salt'ın olmadığı yönünde hata alacaksınız. 

* * *

  **ADIM 4** security.yml'ın içerisinde hazır olarak gelen tüm kodları silip içerisine aşağıdaki kodları yapıştıralım. 
    
    
    # app/config/security.yml
    security:
        encoders:
            FOSUserBundleModelUserInterface: sha512
    
        role_hierarchy:
            ROLE_ADMIN:       ROLE_USER
            ROLE_SUPER_ADMIN: ROLE_ADMIN
    
        providers:
            fos_userbundle:
                id: fos_user.user_provider.username
    
        firewalls:
            main:
                pattern: ^/
                form_login:
                    provider: fos_userbundle
                    csrf_provider: security.csrf.token_manager # Use form.csrf_provider instead for Symfony <2.4
                logout:       true
                anonymous:    true
    
        access_control:
            - { path: ^/login$, role: IS_AUTHENTICATED_ANONYMOUSLY }
            - { path: ^/register, role: IS_AUTHENTICATED_ANONYMOUSLY }
            - { path: ^/resetting, role: IS_AUTHENTICATED_ANONYMOUSLY }
            - { path: ^/admin/, role: ROLE_ADMIN }

   

* * *

      **ADIM 5** Config.yml dosyamızı düzenleyelim. 
    
    
    # app/config/config.yml
    fos_user:
        db_driver: orm # other valid values are 'mongodb', 'couchdb' and 'propel'
        firewall_name: main
        user_class: AcmeUserBundleEntityUser

xml kullananlar için. 
    
    
    <!-- app/config/config.xml -->
    
    <!-- other valid 'db-driver' values are 'mongodb' and 'couchdb' -->
    <fos_user:config
        db-driver="orm"
        firewall-name="main"
        user-class="AcmeUserBundleEntityUser"
    />

 

* * *

  **ADIM 6** Projemizin temel routing'ine fos user'in routingini dahil edelim. Yml için: 
    
    
    # app/config/routing.yml
    fos_user:
        resource: "@FOSUserBundle/Resources/config/routing/all.xml"

Xml için: 
    
    
    <!-- app/config/routing.xml -->
    <import resource="@FOSUserBundle/Resources/config/routing/all.xml"/>

 

* * *