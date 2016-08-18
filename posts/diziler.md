
Değişkenler varken neden dizeler var diye soranlar olacaktır,dizilerin değişkenlerden farkı şudur;dizeler birden fazla değer alabilir,aldığı değerleri sıralayabilir,tersten yazdırabilir,karakter karakter bölüp ayrı değişkenlere atayabilir ve birden fazla fonksiyon sayesinde verilere çoklu müdahaleye izin verir.Biz web yazılımcıları için bulunmaz bir nimettir. Basit bir dize örneği yapalım; 
    
    
    $meyveler = array("Elma", "Armut", "Muz", "Kiraz");

  **$meyveler** dizisine **array()** fonksiyonuyla 4 tane değer atadık. Aynı işlemi fonksiyon kullanmadan yapalım: 
    
    
    $meyveler[0] = "Elma";
    $meyveler[1] = "Armut";
    $meyveler[2] = "Muz";
    $meyveler[3] = "Kiraz";

Birinci örnekte anahtarları php kendi atar ve Elma=>0 ve artarak anahtarları yerleştirir. İkinci örnekte ise anahtarlar açık ve net bir şekilde görülmektedir. Elbette anahtarları elimizlede girebiliriz. 
    
    
    $meyveler = array('7' => 'Elma', '8' => 'Armut', '9' => 'Muz');

Gibi basit bir örnek ile.   Dizinin genel tanımı şu şekildedir. 
    
    
    $dizi["anahtar"] = "değer";

Dizileri yazdırmak; 
    
    
    $meyveler[0] = "Elma";
    $meyveler[1] = "Armut";
     
    echo $meyveler[0];
    

İç içe dizi tanımlamak 
    
    
    $yemek["tatlı"] = array("pasta", "kurabiye", "şeker");
    $yemek["acı"] = array("biber", "acılı adana", "meksika sosu");
     
    echo 'Ben ' . $yemek["tatlı"][0] . ' yedim';

Dizileri silmek 
    
    
    $meyveler[0] = "Elma";
    $meyveler[1] = "Armut";
     
    // sadece bir diziyi silmek için:
    unset($meyveler[0]);
    // tamamını silmek için:
    unset($meyveler);

Dizilerin tümünü yazdırmak [Burada](http://cagataycali.me/print_r-fonksiyonu/) Dizilerin eleman sayısını bulmak 
    
    
    $renkler = array("mavi", "turuncu", "yeşil");
    echo count($renkler);

** Global diziler** $_SERVER global dizisi 
    
    
    Array
    (
        [HTTP_USER_AGENT] => Ziyaretçinin browser bilgileri
        [SERVER_NAME] => Serverin adı
        [SERVER_ADDR] => Server IP adresi
        [SERVER_PORT] => Server portu
        [REMOTE_ADDR] => Ziyaretçinin IP adresi
        [DOCUMENT_ROOT] => Dosyanın ana dizini
        [SCRIPT_FILENAME] => Çalışan scriptin dizi adresi
        [REQUEST_URI] => Şu an hangi adreste olduğu
        [SCRIPT_NAME] => Çalışan dosyanın adı
        [PHP_SELF] => Burası da çalışan dosyanın adı
        [REQUEST_TIME] => Şu anki zaman
    )

Devamı eklenecektir.