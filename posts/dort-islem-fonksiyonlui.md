
<?php
    include "htmlfunc.php";
    include "matfunc.php";
    html_ust("Anasayfa");
    ?>
    <form action="index.php" method="post">
        <table>
            <tr>
                <td>
                    <label for="sayi1">Birinci Sayıyı giriniz</label><br>
                    <input type="text" name="sayi1" id="sayi1" />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="sayi2">İkinci Sayıyı giriniz</label><br>
                    <input type="text" name="sayi2" id="sayi2" />
                </td>
            </tr>
            <tr>
                <td>
                    <select name="islem">
    
                        <option  selected="selected" value="topla">Toplama İşlemi</option>
                        <option  value="cikar" >Çıkarma</option>
                        <option  value="bol">Bölme</option>
                        <option value="carp">Çarpma</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>
    
                    <input type="submit"  value="Hesapla" />
                </td>
            </tr>
        </table>
    </form>
    <?
    
    $s1=$_POST["sayi1"];
    $s2=$_POST["sayi2"];
    $islem=$_POST["islem"];
    
    
    
    
    if(isset($islem))
    {
    
    
        echo dort_islem($s1,$s2,$islem);
    }
    
    
    
    
    //print_r($_POST); kontrol amaçlıdır.
    
    html_alt();
    ?>

    Yukarıda index.php dosyasının içindekiler yazmakta. 
    
    
    <?php
    function dort_islem($sayi1,$sayi2,$islem){
    
        switch($islem){
            case "topla";
                $sonuc=$sayi1+$sayi2;
                break;
            case "cikar";
                $sonuc=$sayi1-$sayi2;
                break;
            case "bol";
                $sonuc=$sayi1/$sayi2;
                break;
            case "carp";
                $sonuc=$sayi1*$sayi2;
                break;
        }
    
    
    
        echo $sonuc;
    
    
    
    
    }
    
    
    
    ?>

Yukarıda matfunc.php içersindekiler yer almakta.  
    
    
    <?php
    function html_ust($t){
        echo'
                <html>
                <head>
                <meta http-equiv="content-type" content="text/html" charset="UTF-8" />
                <title>'.$t.'</title>
                </head>
                <body>
        ';
    }
    
    
    function html_alt(){
        echo'</body></html>';
    }
    
    

Son olarak htmlfunc.php yukarıda yer almakta.