title: Php ile metnin uzunluğunu bulma
link: http://cagataycali.com/php-ile-metnin-uzunlugunu-bulma/
author: cagataycali
description: 
post_id: 121
created: 2014/11/02 17:32:42
created_gmt: 2014/11/02 15:32:42
comment_status: open
post_name: php-ile-metnin-uzunlugunu-bulma
status: publish
post_type: post

# Php ile metnin uzunluğunu bulma

strlen($metin) fonksiyonu ile $metin değişkeninin boyunu rahatlıkla bulabiliriz. 
    
    
    <?php
    $metin="Çağatay Çalı 2014";
    $uzunluk=strlen($metin);
    echo "$metin > cümlesinin uzunluğu = $uzunluk";
    ?>