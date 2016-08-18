
explode($ayraç,$metin) elimizde var olan metni istediğimiz ayraçlar yardımıyla bölmemize yarar. Birkaç örnek yapalım ilk olarak elimizdeki yazıyı boşluklardan bölelim ve bir dizeye atayalım. 
    
    
    <?php
    $metin="Çağatay Çalı 2014";
    $dizi=explode(" ",$metin);
    //Boşluklardan ayırıp dizi değişkenine atadık.
    print_r($dizi); // dizinin değerlerini tek tek yazdırırız.
    ?>

Print_r() fonksiyonu bilmeyenler için; [Print_r() fonksiyonu](http://cagataycali.me/print_r-fonksiyonu/)   Başka bir örnek yapalım,bu örnek yapalım bu örneğimizde veritabanımıza 2014-11-02 şeklinde girilen tarihi 2 Kasım 2014 olarak yazdırmaya çalışalım. 
    
    
    <?php
    $tarih="2014-11-02";
    // - ile ayrılan her sayı diziye atanacak
    $sayilar=explode("-",$tarih); // 0=>2014 1=>11 2=>02
    $aylar=array("Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık");
    echo $sayilar[2]," ",$aylar[$sayilar[1]-1]," ",$sayilar[0];
    ?>

Bir başka örnekte elimizde olan yazının kaç kelimeden oluştuğunu buldurmaya çalışalım. 
    
    
    <?php
    $paragraf="1996 Kasım 4 İzmir/Konak doğumluyum.Öğrenim hayatıma İzmir'in Çeşme ilçesinde Mehmet Akpınar İ.Ö.O'da başladım.4 sene Mehmet Akpınar İ.Ö.O'da okuduktan sonra 5.sınıfın başlarında evimize daha yakın olduğu için Onaltı Eylül İ.Ö.O'da öğrenimime devam ettim.Ortaokulu tekrardan Mehmet Akpınar'da okuduktan sonra Çeşme Hacı Murat Hatice Özsoy A.L'ni kazanıp lise hayatıma başladım.Lise yıllarım boyunca programcılıkla,web işleriyle uğraştım.Öğrenim hayatıma Pamukkale Üniversitesi-Bilgisayar Mühendisliği bölümünde devam ediyorum.Aktif olarak "Divan Yazılım" firmasında çalışıyorum.OpenSource-OpenMinded felsefesini destekliyorum.";
     
    $kelimeler=explode(" ",$paragraf);
    $kelime_sayisi=count($kelimeler);
    $cumleler=explode(".",$paragraf);
    $cumle_sayisi=count($cumleler)-1;
     
    echo "<hr>";
    echo "$paragraf <br><br>";
    echo "Yukarıdaki paragrafta $kelime_sayisi kelime ve $cumle_sayisi cümle vardır.";
     
    echo "<hr>";
    foreach($kelimeler as $indis=>$deger)
       echo $indis+1,"=>",$deger,"<br>";
     
    echo "<hr>";
    foreach($cumleler as $indis=>$deger)
       echo $indis+1,"=>",$deger,"<br>";
    ?>

foreach döngüsünü bilmeyenler için; [foreach döngüsü](http://cagataycali.me/foreach-dongusu/)