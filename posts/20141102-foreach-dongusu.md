title: Foreach Döngüsü
link: http://cagataycali.com/foreach-dongusu/
author: cagataycali
description: 
post_id: 126
created: 2014/11/02 17:57:32
created_gmt: 2014/11/02 15:57:32
comment_status: open
post_name: foreach-dongusu
status: publish
post_type: post

# Foreach Döngüsü

Foreach döngüsü, bir dizi değişkenin bütün elemanları için istenilen işlemi yapar. For döngüsünde kaç defa tekrar edileceğini belirleriz fakat foreach döngüsünde kaç defa döneceğini belirlemeyiz.Döngü sayısı dizenin içerisindeki eleman sayısı ile doğru orantılıdır.  
    
    
    <?php
    
    $altbilgi = array('Çağatay','Çalı','2014');
    foreach($altbilgi as $icerik){
    echo $icerik."<br>";
    }
     
    ?>

  .