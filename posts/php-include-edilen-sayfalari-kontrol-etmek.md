title: Php - Include edilen sayfaları kontrol etmek
link: http://cagataycali.com/php-include-edilen-sayfalari-kontrol-etmek/
author: cagataycali
description: 
post_id: 274
created: 2015/03/07 00:24:42
created_gmt: 2015/03/06 22:24:42
comment_status: open
post_name: php-include-edilen-sayfalari-kontrol-etmek
status: publish
post_type: post

# Php - Include edilen sayfaları kontrol etmek

PHP'de kod yazarken hepimiz zaman zaman include,include_once,require,require_once illaki kullanmışızdır. Sayfamıza include yöntemi ile dahil ettiğimiz diğer dosyaların yüklenip yüklenmediğini server-side(Sunucu taraflı) kontrol etmek için ufak bir parça kod yazdım. Bu kod ne işe yarar derseniz; Projenizin ufak boyutlu olduğunu düşünelim ve içerisinde: index.php,login.php,function.php olsun. index.php çağırıldığında eğer function.php başarılı bir şekilde çağırılamadıysa login.php'ye gitmesini isteyebiliriz. DİPNOT:Php ile header("Location: x.php"); komutu <html>tagleri olmadan çalışmaz.  
    
    
    <hmtl>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
        <?php
        include "function.php";
      
        $kontrol=get_included_files(); //Include edilmiş dosyaları $kontrol adlı değişkene ata.
    
        if(isset($kontrol["1"])){ //eğer 1.include mevcut ise içeride yazan kodları çalıştır
            echo "Foksiyonlar başarıyla içeri aktarıldı";
        }else{ //Dize üzerinde 1. değer mevcut olmadığı zaman login.php dosyasına yönlen..
            header("Location: login.php");
        }
        ?>
        </body>
    </hmtl>