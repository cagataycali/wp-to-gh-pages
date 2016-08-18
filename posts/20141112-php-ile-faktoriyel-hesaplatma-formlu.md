title: PHP İle Faktöriyel Hesaplatma (Formlu)
link: http://cagataycali.com/php-ile-faktoriyel-hesaplatma-formlu/
author: cagataycali
description: 
post_id: 220
created: 2014/11/12 17:57:44
created_gmt: 2014/11/12 15:57:44
comment_status: open
post_name: php-ile-faktoriyel-hesaplatma-formlu
status: publish
post_type: post

# PHP İle Faktöriyel Hesaplatma (Formlu)

<?php
    echo"<form action='' method='post'>
    		 Sayı:
    		 <input type='text' name='sayi'/>
    		 <br>
    		 <input type='submit' value='Faktöriyel Hesapla'/>
    
    </form>";
    
    function faktoriyel($sayi) {
    
        if(!is_numeric($sayi)) return false;
    
        $total=1;
    
        for($a=1; $a<=$sayi; $a++) {
            $total *= $a;
        }
    
        return $total;
    }
    echo faktoriyel($_POST["sayi"]);
    
    ?>