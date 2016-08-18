
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