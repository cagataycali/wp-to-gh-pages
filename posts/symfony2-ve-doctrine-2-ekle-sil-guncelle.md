
### **GÜNCELLEME :  Çalışan örnek github'da mevcut.[TIKLA](https://github.com/ccali14/Symfony2-EkleSilGuncelle#symfony2-eklesilguncelle)**

[Önceki yazılarımda merhaba dünya,yeni bohça yaratalım(bundle),yeni doctrine class'ları yaratalım(entity), noktalarına değinmiştik.Bu makalemde ise symfony2 ve doctrine2 (ORM) kullanarak POST-GET işlemleri,veritabanına ekle sil güncelle işlemlerini adım adım işleyerek görsellerle zenginleştirerek anlatacağım.Biraz uzun bir makale olacağa benziyor,sonuna kadar dikkatlice okumanızı tavsiye ederim.](https://github.com/ccali14/Symfony2-EkleSilGuncelle#symfony2-eklesilguncelle)

* * *

İlk olarak işe rooting.yml dizininden başlayacağız peki neredeki rooting.yml?App dizinindeki mi yoksa bundle   içerisindeki mi? **_Tabii ki DenemeBundle/Resources/config/rooting.yml _**Kodları inceleyelim;
    
    
    deneme_homepage:
        path:     /hello/{name}
        defaults: { _controller: DenemeBundle:Default:index }

  path: /hello/{name}  Diyor ki; localhost/Symfony/web/app_dev.php/hello/Cagatay yazarsan Cagatay yazısını defaults'da gösterilen DenemeBundle içerisindeki Default controllerinin index actionuna göndereceğim!Bu cümle biraz karışık görünebilir ama birkaç kez okumanızı tavsiye ederim. 

* * *

Rooting.yml dosyamızı şu şekilde değiştiriyoruz. 
    
    
    anasayfa:
        path:     /
        defaults: { _controller: DenemeBundle:Default:index }
    
    listele:
        path:     /calisanlar-listele/
        defaults: { _controller: DenemeBundle:Default:liste }
    
    calisan_ekle_form:
        path:     /calisan-ekle-formu/
        defaults: { _controller: DenemeBundle:Default:ekleForm }
    
    calisan_ekle_post:
        path:     /calisan-ekle/
        defaults: { _controller: DenemeBundle:Default:ekle }
    
    calisan_guncelle_form:
        path:     /{id}/calisan-guncelle
        defaults: { _controller: DenemeBundle:Default:guncelleForm }
    
    calisan_guncelle_post:
         path:     /calisan-guncelle
         defaults: { _controller: DenemeBundle:Default:guncelle }
         requirements: { _method: post|put }
    
    calisan_sil:
         path:    /{id}/calisan-sil
         defaults: {_controller: DenemeBundle:Default:sil}
         requirements: { _method : get|delete }
    
    

Rooting.yml üzerinde bu değişiklikleri yaptıktan sonra sıra controller'a geldi.Controller içerisinde belli metotlarımız var,ekle sil güncelle ve ekle güncelle formlarımız var. Ekle form metodu ekrana ekleme formunu basıyor,ekle metodu ise bunu veritabanına kaydediyor.Güncelle form metodu ekrana güncelleme formunu basıyor,güncellenecek kişinin bilgilerini get ile okuyup ekrana o bilgileri çıkarıyor,güncelle metodu ise bunu veritabanına güncel şekilde kaydediyor.Hadi gelin controlleri görelim. 
    
    
    <?php
    
    namespace DenemeBundleController;
    
    use SymfonyBundleFrameworkBundleControllerController;
    
    class DefaultController extends Controller
    {
        public function indexAction($name) //Name değişkenini get ile okuyor
        { //ardından render diyerek get ile aldığı veriyi index.html.twig içerisine basıyor
            return $this->render('DenemeBundle:Default:index.html.twig', array('name' => $name));
        }
    }
    

Biz controlleri birazcık değiştireceğiz.İlk olarak namespaces altına aşağıda çalıştıracağımız metotlar için zarüri olan classları projemizin controllerine çağıralım. 
    
    
    <?php
    
    namespace DenemeBundleController;
    ..
    use SymfonyBundleFrameworkBundleControllerController;
    use SymfonyComponentHttpFoundationRequest;
    use DenemeBundleEntityCalisanlar;
    ..
    .
    

Ardından indexAction'u düzenleyelim.Açılışta Çalışanları listeletsin istiyoruz. 
    
    
    .
    ..
    public function indexAction()
        {
            $em=$this->getDoctrine()->getRepository('DenemeBundle:Calisanlar'); //Repoyu $em içerisine ata.
            $liste=$em->findAll(); //Tüm kayıtları $liste içerisine yerleştir.
            return $this->render('DenemeBundle:Default:index.html.twig', array('calisanlar' =>$liste)); //Dize şeklinde $liste'yi index.html.twig 'e render et.
        }
    ..
    .

Controller'ı düzenledikten sonra bu listeletmeyi yaptıracağımız index.html.twig dosyası nerede? Tabii ki **DenemeBundle/Resources/views/index.html.twig** İçerisindeki kodları silip aşağıdaki kodları yazıyoruz; 
    
    
    {% extends 'base.html.twig' %}<!-- gereken css js dosyalarını tanımlayacağımız dosya -->
    {% block title %}
        Anasayfa - İşletmecim
    {% endblock %}
    
    {% block body %}
        İşletmeci Hoşgeldin!<br>
        {% for i in calisanlar %}
            {{ i.ad }} {{ i.soyad }}<br>
        {% endfor %}
    {% endblock %}

Şuanda veritabanımızdan verileri çekip ekrana Adı Soyadı şeklinde basan bir projemiz var.Şuanda kaydımız olmadığı için dizini localhostta çalıştırdığımızda boş sayfa ile karşılaşacağız.Sıra ekleme yapmakta; DefaultController.php'yi tekrar açıp iki action daha ekleyeceğiz,birincisi eklemeyi yapacak Action ikincisi eklemeyi yapmadan önce ekrana gelecek olan formun bulunduğu sayfayı çağıracak Actiondur. 
    
    
    public function ekleAction(Request $request) //ekle işlemini yapan action
        {
            $em=$this->getDoctrine()->getManager();
    
    
            $ad = $request->request->get('ad'); // post ile verileri karşılama
            //$ad = $request->query->get('ad'); // get ile verileri karşılama
    
            $soyad=$request->request->get('soyad');
    
            $yeni_insan = new Calisanlar();
            $yeni_insan->setAd($ad);
            $yeni_insan->setSoyad($soyad);
            $em->persist($yeni_insan); 
            $em->flush();
            
            return $this->redirect($this->generateUrl('listele'));
    
        }
        public function ekleFormAction() //Ekleme kısmındaki formu ekrana basar
        {
            return $this->render('DenemeBundle:Default:ekle.html.twig');
        }

Evet controller tarafında şimdilik işimiz bitti fakat ekle.html.twig dosyası yok ve içerisinde bir form olmalı,ekleme formu içermeli. 

* * *

DenemeBundle/Resources/views/Default dizinine girip ekle.html.twig dosyasını oluşturun ve içerisine şu kodları ekleyin. 
    
    
    {% extends 'base.html.twig' %}
    {% block title %}
        Çalışan ekle
    {% endblock %}
    
    {% block body %}
        <form action="{{ path ('calisan_ekle_post') }}" method="post">
            <input type="text" id="ad" name="ad" required="required" placeholder="Adınız"><br>
            <input type="text" id="soyad" name="soyad" required="required" placeholder="Soyadınız"><br>
            <input type="submit" id="ekle" name="ekle" value="Kaydet">
        </form>
    {% endblock %}

Şuanda formu postaladığımızda calisan_ekle_post routingine gidecek ve bu sayede verileri tutup veritabanına kaydedecek. Ve son olarak index.html.twig içerisine girip ekle.html.twig 'e gidecek rooting i görecek link koymalıyız. 
    
    
    .
    ..
    {% block body %}
        İşletmeci Hoşgeldin!<br><hr>
        <a href="{{ path ('calisan_ekle_form') }}">Yeni Çalışan Ekle</a><br>
    ..
    .
    {% endblock %}

Yukarıda görüldüğü gibi bir rootinge uzantı göstermek için {{ path ('yol') }} şeklinde tanımlıyoruz. 

* * *