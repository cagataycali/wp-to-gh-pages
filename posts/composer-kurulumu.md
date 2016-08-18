title: Composer Kurulumu
link: http://cagataycali.com/composer-kurulumu/
author: cagataycali
description: 
post_id: 459
created: 2015/05/31 23:49:23
created_gmt: 2015/05/31 20:49:23
comment_status: closed
post_name: composer-kurulumu
status: publish
post_type: post

# Composer Kurulumu

Composer birçok ek paketi projemize eklerken bize yardımcı olan bir araçtır.Hızlıca kuruluma geçelim. Terminalde kuracağımız dizine yani projemizin dizinine gelelim. 
    
    
    cd /var/www/html/hint2flow

Ardından composer'i curl veya php kullarak çağıralım.Curl yoksa php ile çağırabilirsiniz. Curl ile :
    
    
    curl -sS https://getcomposer.org/installer | php

 PHP ile: 
    
    
    php -r "readfile('https://getcomposer.org/installer');" | php

  Tamamdır! 

* * *