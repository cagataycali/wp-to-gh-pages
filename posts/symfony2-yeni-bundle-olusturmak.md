
Önceki yazımda hazır bundle üzerindeki indexAction'u inceledik ve ilk Merhaba dünyamızı yazmış olduk.Şimdi yapacağımız şey ise kendi projemizin kodlarının bulunacağı kod demeti,bohçası olan "Bundle"  yaratmak. 

* * *

 

  * İlk olarak varsa kullandığımız editörden terminali açmak.(Ben **PhpStorm** kullanıyorum ve kısayolu alt-F12 kombinasyonudur) 
    * Terminal üzerinden bulunduğumuz dizine geliyoruz. 
      *             cd /var/www/html/Symfony (Linux içindir,siz kendi localhost dizininizi yazın)

    * İlk önce yazma iznimiz yoksa yazma izni verelim 
      *             sudo chmod -R 777 /var/www/html [ENTER]

    * Ardından terminalde benzer bir dizin görüntüsü olacaktır. 
      *             cagatay@cagatay-Vostro-3460:/var/www/html/Symfony$

    * Linux için bir üst yetkiye sahip olmalıyız onun için ise; 
      * su [ENTER]
      * kullanıcı adın [ENTER]
      * kullanıcı şifren [YAZARKEN ŞİFRE GÖRÜLMEZ ENTER]
  *     * Başarıyla giriş yaptığında şu şekilde görünecek. 
      *             root@cagatay-Vostro-3460:/var/www/html/Symfony$

    * Bu aşamaya geldiysek artık symfony terminal kodlarını kullanarak yeni bir bohça oluşturabiliriz. 
      *             root@cagatay-Vostro-3460:/var/www/html/Symfony# php bin/console generate:bundle
            
                                                        
              Welcome to the Symfony2 bundle generator  
                                                        
            
            
            Your application code must be written in bundles. This command helps
            you generate them easily.
            
            Each bundle is hosted under a namespace (like Acme/Bundle/BlogBundle).
            The namespace should begin with a "vendor" name like your company name, your
            project name, or your client name, followed by one or more optional category
            sub-namespaces, and it should end with the bundle name itself
            (which must have Bundle as a suffix).
            
            See http://symfony.com/doc/current/cookbook/bundles/best_practices.html#index-1 for more
            details on bundle naming conventions.
            
            Use / instead of   for the namespace delimiter to avoid any problem.
            
            Bundle namespace: DenemeBundle
            
            The namespace sometimes contain a vendor namespace (e.g. VendorName/BlogBundle instead of simply DenemeBundle).
            If you've *did* type a vendor namespace, try using a forward slash / (Acme/BlogBundle)?
            
            Keep DenemeBundle as the bundle namespace (choose no to try again)? [yes]: 
            
            In your code, a bundle is often referenced by its name. It can be the
            concatenation of all namespace parts but it's really up to you to come
            up with a unique name (a good practice is to start with the vendor name).
            Based on the namespace, we suggest DenemeBundle.
            
            Bundle name [DenemeBundle]: 
            
            The bundle can be generated anywhere. The suggested default directory uses
            the standard conventions.
            
            Target directory [/var/www/html/Symfony/src]: 
            
            Determine the format to use for the generated configuration.
            
            Configuration format (yml, xml, php, or annotation): yml
            
            To help you get started faster, the command can generate some
            code snippets for you.
            
            Do you want to generate the whole directory structure [no]? yes
            
                                         
              Summary before generation  
                                         
            
            You are going to generate a "DenemeBundleDenemeBundle" bundle
            in "/var/www/html/Symfony/src/" using the "yml" format.
            
            Do you confirm generation [yes]? 
            
                                 
              Bundle generation  
                                 
            
            Generating the bundle code: OK
            Checking that the bundle is autoloaded: OK
            Confirm automatic update of your Kernel [yes]? 
            Enabling the bundle inside the Kernel: OK
            Confirm automatic update of the Routing [yes]? 
            Importing the bundle routing resource: OK
            
                                                           
              You can now start using the generated code!  
                                                           
            
            root@cagatay-Vostro-3460:/var/www/html/Symfony# 
            

 
    * DenemeBundle adlı yeni bir bundle oluşturduk fakat linux kullanıyorsak bizim tarafımızdan oluşturulmayan dosyalara yazma izni vermeliyiz 
      *             chmod -R 777 /var/www/html

    * Dizindeki görünümünü görelim; 
      * ![Symfony2 Bundle](http://cagataycali.me/wp-content/uploads/2015/03/bundleolusturma.png)Standart olarak Gelen dosyaları sol tarafta görüyorsunuz.
      * İncelemelerini ve ne işe yaradıklarını [önceki makalemde](http://cagataycali.me/symfony2-merhaba-dunya/) dile getirmiştim inceleyebilirsiniz.