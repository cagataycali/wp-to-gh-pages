
Foreach döngüsü, bir dizi değişkenin bütün elemanları için istenilen işlemi yapar. For döngüsünde kaç defa tekrar edileceğini belirleriz fakat foreach döngüsünde kaç defa döneceğini belirlemeyiz.Döngü sayısı dizenin içerisindeki eleman sayısı ile doğru orantılıdır.  
    
    
    <?php
    
    $altbilgi = array('Çağatay','Çalı','2014');
    foreach($altbilgi as $icerik){
    echo $icerik."<br>";
    }
     
    ?>

  .