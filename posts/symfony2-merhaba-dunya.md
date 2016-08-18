
> Her yazılım dilinde ilk önce yapılan şeylerden biridir **'Merhaba dünya'** ve kendi merhaba dünyamı nasıl yaptığımı açıklayacağım.

* * *

  İlk önce [Symfony2'nin kendi sitesinden ](http://symfony.com/)gerekli dosyaları temin edin. 

* * *

  Eğer sitedeki composerden haberdar değilseniz şuanda aşağıda anlatacaklarıma eşlik etmeniz açısından kullandığım dosyayı kendi sunucuma yüklüyorum; **[İndirmek için tıklayın.](http://php.cagataycali.me/Symfony_Standard_Vendors_2.6.4.zip)**

* * *

  İndirdiğiniz dosyayı; 

  * **Windows** için : /C/wamp/htdocs/ içerisine
  * **Linux/MacOS** için ise localhostu çalıştırdığınız dizine çıkartın(Extract)
Windows veya MacOS kullanıyorsanız wamp/lamp açmayı unutmayın. 

* * *

  Eğer** Linux** tabanlı bir işletim sistemi kullanıyorsanız dosyaların kullanımı için izin vermek zorunda kalabilirsiniz; 

> sudo chmod -R 777 /var/www/html [ENTER]'e bastığınızda bir sonraki satır geldiği anda işleme devam edebilirsiniz artık yazma izniniz var.

* * *

  Dosyaları çıkarttıktan sonra geliştirme aracımızda dosyaların dizinlerini tanıyalım.Kişisel olarak PhpStorm kullanıyorum,isteğiniz dahilinde Sublime Text,gedit,notepad++ dahi kullanabilirsiniz. 

* * *

 

  * Makalemde kullandığım renklendirmeler: 
    * Yml için : RENK
    * html.twig için : RENK
    * dizin için: RENK

* * *

  * Dizin yapımız ilk açılışta görünüşü aşağıdaki gibidir.Detay incelemeleri sırayla yapacağım.
  * ![anagoruntu](http://cagataycali.me/wp-content/uploads/2015/03/anagoruntu-199x300.png)App dizinini projemizin temel ayarlarının bulunduğu dizindir.
  * Bin dizini ve Vendor dizinini şimdilik bilmemize gerek yok.
  * Src projemizin MVC (Model-View-Controller) yapısını oluşturacağımız dizindir.
  * Web dizini ise içerisinde projemizin çağırıldığı php sayfalarını içerir.
 

* * *

**App dizinini inceleyelim;** ![appdiziniinceleme](http://cagataycali.me/wp-content/uploads/2015/03/appdiziniinceleme-1024x576.png)Config, Resources alt dizinlerini görülen gibi açtım 

  * Config(Ayarlar).yml projemizin en genel ayarlarıdır burayı zamanı geldiğinde kurcalayacağız.
  * Parameters(Parametreler).yml mail gönderme,veritabanı bağlantılarımız vs bağlantıyla ilgili bütün işlemlerin tek elden tanımlandığı yerdir.
  * Routing(Yönlendirme).yml ismindende anlaşıldığı üzere ana proje dizinimizin alt bundle(Geliştirme ortamı,kod bohçası vb)'a yönlendirilmesine yarar.
 

* * *

  ![appResourcesinceleme](http://cagataycali.me/wp-content/uploads/2015/03/appResourcesinceleme.png)**App/Resources dizinini inceleyelim;**

  * views (Projemizin görünen-FrontEnd kısmını temsil eder) 
    * default (Standart olarak örnek gelen index) 
      * index.html.twig (Twig tema motoruyla oluşturulmuş standart sayfa içeriği)
    * base.html.twig (Projemizin içerisine ekleyeceğimiz-Extend yöntemi ile-ve projemizin temel css,js html kodlarını içeren sayfa)
    * * * *

.htaccsess dosyası sitemizin barındığı sunucu üzerinde çalışan apache derleyicisine direkt komutlar vermeye yarar bu konuda daha fazla bilgiye sahip olmanız şimdilik gerekmiyor.

* * *

App/config dizinini inceleyelim;

  * config

![appConfiginceleme](http://cagataycali.me/wp-content/uploads/2015/03/appConfiginceleme.png)

    * config.yml (Projemizin twig-doctrine-swiftmailler ayarlarının yapıldığı yml dosyası)
    * parameters.yml (Projemizin veritabanı ve mailler bağlantı parametrelerinin girildiği dosya) 
    * routing.yml (Projemizin ana yönlendirme dosyası) 
 

* * *

Src dizinini inceleyelim; 

  * ![srcgenel](http://cagataycali.me/wp-content/uploads/2015/03/srcgenel.png)Acme (Standart kurulumda gelen tanıtım bundle'ı) 
    * DemoBundle
      * Controller(Kontrol için methodlarımızın bulunduğu dizin)
      * Form(Symfony2 ile form işlemleri için standart oluşturulan klasör)
      * Resources(Kaynaklar) 
        * config(içerisinde routing.yml mevcut,detaya inilecek)
        * views
          * Demo
            * .html.twig (Bundle için özelleşmiş 'Override' yapılan yer)
  * Bundle içerisinde neden routing.yml ve views var sorusunun cevabı şudur; 
    * Base.html.twig içerisindeki temel ayarların üzerine her bohçanın kendi özellikleri mevcuttur bu kişisel özellikleri burada belirleyeceğiz. 

* * *

İlerleyen zamanlarda detayına ineceğimin müjdesini vermekle beraber,dizinler hakkında birşey eklemek istiyorum.  
  * .._dev.yml
  * .._prod.yml
  * .._test.yml
Nedir peki bunlar?Ne işe yarar? _Yazar burada ne anlatmak istemiş?_

  * Dev kısaltması Developer'den geliyor => Türkçe meali: Geliştirici
  * Prod kısaltması Production'dan geliyor => Türkçe meali: Ürün

## Comments

**[ahmet](#4 "2015-10-27 15:39:59"):** http://php.cagataycali.me/Symfony_Standard_Vendors_2.6.4.zip linki kırık. Düzeltmeniz mümkün mü?

**[cagataycali](#5 "2015-10-28 09:22:13"):** 2.6.4 versiyonunun paket versiyonunu artık bulabilmek neredeyse mümkün değil,bir yenisini indirmeyi deneyebilirsiniz olmazsa yardımcı olacağım.

**[Besim](#8 "2016-02-01 08:19:23"):** Merhaba , Sürüm farklı olduğu için bazı dosyaların yeri farklılaşıyor. Örneğin console dosyası app altından bin klasörünün altına geçmiş. Rica etsem 2.6.4 sürümünün güncel linkini atabilir misiniz ? Sitenizde verdiğiniz link kırılmış. Teşekkür ederim.

**[cagataycali](#9 "2016-02-12 21:48:05"):** Merhabalar, geri dönüş için teşekkür ederim fakat o sürümün dosyası önceki sunucumda kaldığı için şuanda size ulaştıramayacağım.Kusuruma bakmayın lütfen

