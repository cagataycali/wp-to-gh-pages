
İlk olarak projemize [composer](http://cagataycali.me/composer-kurulumu/) indiriyoruz. Ardından composer.json dosyamızın içerisine şu kodları ekliyoruz. 
    
    
    "require": {
            "doctrine/mongodb-odm": "1.0.*@dev",
            "doctrine/mongodb-odm-bundle": "3.0.*@dev"
        },

  Ardından terminalimize aşağıdaki kodları yazıp onaylıyoruz. 
    
    
    php composer.phar update

İşlem başarıyla tamamlandıysa terminale aşağıdaki kodları yazıp onaylıyoruz. 
    
    
    php composer.phar update doctrine/mongodb-odm doctrine/mongodb-odm-bundle

* * *

app/autoload.php dosyamıza aşağıdaki kodları ekliyoruz. 
    
    
    use DoctrineODMMongoDBMappingDriverAnnotationDriver;
    AnnotationDriver::registerAnnotationClasses();

* * *

  Çekirdeğe yeni kodları eklemek için app/AppKernel.php 'dosyasına aşağıdaki kodları ekliyoruz. 
    
    
    / app/AppKernel.php
    public function registerBundles()
    {
        $bundles = array(
            // ...
            new DoctrineBundleMongoDBBundleDoctrineMongoDBBundle(),
        );
    
        // ...
    }

Son olarak config.yml dosyamıza şu kodları eklediğimizde işlem tamamdır! 
    
    
    # app/config/config.yml
    doctrine_mongodb:
        connections:
            default:
                server: mongodb://localhost:27017
                options: {}
        default_database: test_database
        document_managers:
            default:
                auto_mapping: true