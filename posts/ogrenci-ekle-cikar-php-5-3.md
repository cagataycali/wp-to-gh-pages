
Basit bir şekilde veritabanı kullanarak öğrenci ekleme ve çıkartma işlemleri yaptım     **-**ilk olarak** index.php** oluşturun,bu **index.php**' içerisinde sitemizin html kodları yer alacak ve bir form olacak. 
    
    
    <html>
    <body>
    <head>
        <title>Öğrencilerim</title>
        <meta charset="UTF-16" content="text/html" http-equiv="content-type">
    </head>
    <h2>Öğrenci Ekle</h2>
    <form action="kayit.php" method="post">
        <table border="1">
            <tr>
                <td>
                    <label for="kullanici">Öğrenci Adı:</label><br>
                    <input type="text" name="kullanici" id="kullanici" />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="yas">Öğrenci Yaşı:</label><br>
                    <input type="text" name="yas" id="yas" />
                </td>
            </tr>
            <tr>
                <td>
                    <label for="tc">Öğrenci Tc'si:</label><br>
                    <input type="text" name="tc" id="tc" />
                </td>
            </tr>
        </table>
        <input type="submit"  value="Kaydet" />
    
    </form>
        <form action="listele.php" method="post">
            <label for="listele"></label><input type="submit" value="Öğrencilerim" />
    
        </form>
    
    
    <form action="sil.php" method="post">
        <label for="sil"></label><input type="submit" value="Öğrenci sil" />
    </form>
    
    </body>
    </html>

Açılış sayfamız artık hazır. Kodları düzgün bir biçimde yazdığınızda aşağıdaki gibi bir sonuç elde etmelisiniz. ![2014-11-27 15:07:28](http://cagataycali.me/wp-content/uploads/2014/11/2014-11-27-150728.png) Eğer bu formu görüyorsanız devam edelim.   **-kayit.php** adlı bir php dosyası oluşturun: 
    
    
    <html>
    <head>
        <title>Kayıt</title>
        <meta charset="UTF-8">
    </head>
    <iframe src=liste.php frameborder="1" width="184" height="94" scrolling="yes"></iframe><br>
    <body>
    <?php
    
    $conn=mysql_connect("localhost","root","kalkandere");
    
    mysql_query("SET NAMES 'utf-8'");
    
    $db=mysql_select_db("test",$conn)or die(mysql_error());
    
    /*
    $sql="insert into ogrenciler
    set ogrenci_adi = 'ahmet',
    yas = 21, tc = 27834687";
    */
    
    $ogrenciAdi = $_POST["kullanici"];
    $yas = $_POST["yas"];
    $tcNo = $_POST["tc"];
    
    $sql='insert into ogrenciler
    set ogrenci_adi = "'.$ogrenciAdi.'",
    yas = '.$yas.', tc = '.$tcNo.'';
    
    
    if(mysql_query($sql,$conn)or die(mysql_error())){
        echo'<h2>Öğrenci eklendi.</h2><br>';
    }
    else{
        echo"Öğrenci eklemede HATA oluştu";
    }
    
    
    mysql_close($conn);
    ?>
    <h1><b><a href="mysql_form.php">Anasayfaya geri dön.</a></b></h1>
    </body>
    </html>

Eğer bu kodları eklediyseniz yeni bir php dosyası oluşturun ve adını **listele.php** koyun. Adını Ferihada koyabilirsiniz bu size kalmış :))   **-sil.php**
    
    
    <html>
    <head>
        <title>Silme</title>
        <meta charset="UTF-8">
    </head>
        <iframe src=liste.php frameborder="1" width="184" height="94" scrolling="yes"></iframe>
    <body>
    
    
    <form id="cagatay" action="sil.php" method="post">
    
        <table>
            <tr>
                <td>
                    <label for="tc">Tc:</label><br>
                    <input type="text" name="tc" id="tc" />
                </td>
            </tr>
        </table>
        <input type="submit"  value="Sil" />
    </form>
    
    
    <?php
    $conn=mysql_connect("localhost","root","kalkandere");
    mysql_query("SET NAMES 'utf-8'");
    $db=mysql_select_db("test",$conn)or die(mysql_error());
    
    $tc=$_POST["tc"];
    
    if($_POST["tc"]){
        $sql="delete from ogrenciler WHERE (tc='$tc')";
        if(mysql_query($sql,$conn)){
            echo"Silme başarılı";
        }
        else{
            echo"Silme başarısız.".'<a href="listele.php';
        }
        echo'<a href=listele.php>Listele</a>';
        mysql_close($conn);
    }
    
    ?>
    <h1><b><a href="mysql_form.php">Anasayfaya geri dön.</a></b></h1>
    </body>
    </html>
    

  **-listele.php**
    
    
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>Listele</title>
    </head>
    
    <body>
    
    
    <?php
    
    $conn=mysql_connect("localhost","root","kalkandere");
    
    mysql_query("SET NAMES 'utf-8'");
    
    $db=mysql_select_db("test",$conn)or die(mysql_error());
    
    $sql="select * from ogrenciler";
    
    $sqlsonuc=mysql_query($sql,$conn);
    
    while($ogrenci=mysql_fetch_array($sqlsonuc)){
        echo'<table border="1">
            <tr>
                <td>'
            .$ogrenci["ogrenci_adi"].'
                </td>
            </tr>
            <tr>
                <td>
                    '.$ogrenci["yas"].'
                </td>
            </tr>
            <tr>
                <td>
                    '.$ogrenci["tc"].'
                </td>
            </tr>
        </table>';
    }
    mysql_close($conn);
    ?>
    <h1><b><a href="mysql_form.php">Anasayfaya geri dön.</a></b></h1>
    
    
    </body>
    </html>

**-liste.php**
    
    
    <html>
    
    <head>
        <meta charset="utf-8">
        <title>Listele</title>
    </head>
    
    <body>
    
    
    <?php
    
    $conn=mysql_connect("localhost","root","kalkandere");
    
    mysql_query("SET NAMES 'utf-8'");
    
    $db=mysql_select_db("test",$conn)or die(mysql_error());
    
    $sql="select * from ogrenciler";
    
    $sqlsonuc=mysql_query($sql,$conn);
    
    while($ogrenci=mysql_fetch_array($sqlsonuc)){
        echo'<table border="1">
            <tr>
                <td>'
            .$ogrenci["ogrenci_adi"].'
                </td>
            </tr>
            <tr>
                <td>
                    '.$ogrenci["yas"].'
                </td>
            </tr>
            <tr>
                <td>
                    '.$ogrenci["tc"].'
                </td>
            </tr>
        </table>';
    }
    mysql_close($conn);
    ?>
    
    
    </body>
    </html>

      Kodlar burada arkadaşlar eğer indirip kullanmak isterseniz [github](https://github.com/ccali14/PhpRep).       Veritabanında test adı verilen bir tablo oluşturun ve içine ogrenciler adlı bir bölüm açın. ogrenci_adi yas tc eklemeniz gereken kısımlardır.