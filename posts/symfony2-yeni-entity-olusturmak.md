
Önceki yazılarımda [merhaba dünyamızı](http://cagataycali.me/symfony2-merhaba-dunya/) yaptık ve ardından [kendi bohçamızı oluşturduk](http://cagataycali.me/symfony2-yeni-bundle-olusturmak/).Sırada Entity oluştumak var,yazılarımda mümkün olduğunca güzel Türkçe'mizdeki karşılıklarıyla açıklamaya ve o şekilde aktarmaya ne kadar çalışsamda Entity-Assets gibi kavramlar karşımıza illaki çıkacak.Entity ve assets anlamdaş olup varlık anlamına gelmektedir.Biz symfony2 ile yazarken entity kavramını ORM katmanının classlarını içeren php dosyası olarak düşüneceğiz. 

* * *

ORM için başlıbaşına bir makale yazılması taraftarıyım oyuzden kısaca özet geçeceğim;ORM veritabanı cinsinden bağımsız bir şekilde SQL kodlarını kullanmamıza gerek kalmadan çok biçimli(Polymorphism) ilişkisel veritabanlarını destekleyen yardımcı bir katmandır. 

* * *

  * Entity oluşturmak için önceden [bohçayı oluşturduğumuz şekilde](http://cagataycali.me/symfony2-yeni-bundle-olusturmak/) terminalden dizine gelip şu komutları yazıyoruz. 
    *         root@cagatay-Vostro-3460:/var/www/html/Symfony# php app/console doctrine:generate:entity
        
                                                     
          Welcome to the Doctrine2 entity generator  
                                                     
        
        
        This command helps you generate Doctrine2 entities.
        
        First, you need to give the entity name you want to generate.
        You must use the shortcut notation like AcmeBlogBundle:Post.
        
        The Entity shortcut name: DenemeBundle:Calisanlar [BUNDLE İSMİNDEN SONRA : KULLANMALIYIZ]
        
        Determine the format to use for the mapping information.
        
        Configuration format (yml, xml, php, or annotation) [annotation]: [ENTER]
        
        Instead of starting with a blank entity, you can add some fields now.
        Note that the primary key will be added automatically (named id).
        
        Available types: array, simple_array, json_array, object, 
        boolean, integer, smallint, bigint, string, text, datetime, datetimetz, 
        date, time, decimal, float, blob, guid.
        
        New field name (press <return> to stop adding fields): ad
        Field type [string]: 
        Field length [255]: 
        
        New field name (press <return> to stop adding fields): soyad
        Field type [string]: 
        Field length [255]: 
        
        New field name (press <return> to stop adding fields):  Bitirmek için bir kere boş enter basın
        
        Do you want to generate an empty repository class [no]? [ENTER]
        
                                     
          Summary before generation  
                                     
        
        You are going to generate a "DenemeBundle:Calisanlar" Doctrine2 entity
        using the "annotation" format.
        
        Do you confirm generation [yes]? [ENTER]
        
                             
          Entity generation  
                             
        
        Generating the entity code: OK
        
                                                       
          You can now start using the generated code!  
                                                       
        
        root@cagatay-Vostro-3460:/var/www/html/Symfony# chmod -R 777 /var/www/html [TEKRARDAN İZİN VERDİK]
        root@cagatay-Vostro-3460:/var/www/html/Symfony# 
        

    * Entity oluşturulduktan sonra veritabanımıza bu class'ları otomatik olarak yükletebiliriz fakat öncesinde veritabanı ayarlarımızı yapmalıyız. 
      * ![Symfony2](http://cagataycali.me/wp-content/uploads/2015/03/parametrs.png)Parameters.yml içerisindeki bazı noktaları kendi veritabanımıza göre yeniden şekillendiriyoruz.
      *             # This file is auto-generated during the composer install
            parameters:
                database_driver: pdo_mysql
                database_host: 127.0.0.1
                database_port: null
                database_name: [VERİTABANI ADINIZ]
                database_user: root
                database_password: [VERİTABANI ŞİFRENİZ]
            

Eğer veritabanınızı önceden oluşturmadıysanız; 
        * localhost/phpmyadmin
        * ![veritabani](http://cagataycali.me/wp-content/uploads/2015/03/veritabani-300x69.png)Deneme adlı bir veritabanı oluşturalım
 

* * *

Veritabanımızı oluşturduk,entity oluşturduk fakat henüz veritabanımızın içerisindeki tabloları şekillendirmedik.Tek tek veritabanı tablolarını girecek miyiz,tabii ki hayır.Bunu bizim yerimize terminal kodları halledecek şöyle ki; 
    
    
    php app/console doctrine:schema:update --force

Veritabanımıza tekrar göz atalım ve durumu görüntüleyelim.![calisanlar](http://cagataycali.me/wp-content/uploads/2015/03/calisanlar-1024x131.png)     Entity oluşturmak bukadardı,bir sonraki blog yazımda görüşmek üzere.