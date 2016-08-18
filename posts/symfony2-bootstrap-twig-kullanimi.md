
Symfony2 projemizde twig üzerine bootstrap temaları giydirmek için bootstrap elementlerini projemize dahil etmeliyiz.Bütün dosyaları internet üzerindeki bir sunucudan çekmek herzaman performanslı olmayacaktır(Çok elzem değildir) Projemizin Web dizini içerisinde assets klasörü açtın.Elementleri yerleştirdikten sonra twig içerisinden çağırmak için; 
    
    
    <script src="{{ asset('bower_components/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    

  Asset yolunu belirtmek için benimde hocam olan Buğra YÜKSEL abimin bloğundan okuyabilirsiniz; <http://www.bugrayuksel.com/symfony2-assets-yolu-belirtme/> Yukarıdaki yazıdaki ilgili yerleri kendi projemizin diznine göre değiştirip devam edelim Projemizde #MyBundle/Resources/temel.html.twig vb twiglerde link href kısmına {{ asset(' ') }} yazıp içerisine dosyanın uzantısını yazıyoruz. Örnek olarak ; ![bootstrap1](http://cagataycali.me/wp-content/uploads/2015/03/bootstrap1-1024x576.png) ![bootstrap2](http://cagataycali.me/wp-content/uploads/2015/03/bootstrap2-1024x576.png) ![bootstrap3](http://cagataycali.me/wp-content/uploads/2015/03/bootstrap3.png)