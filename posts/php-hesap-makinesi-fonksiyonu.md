
<form action="" method="post">
        <ul>
            <li>İlk sayı    <input type="text" name="birincisayi" value="Birinci Sayıyı Giriniz"></li>
            <li>İkinci sayı <input type="text" name="ikincisayi" value="İkinci Sayıyı Giriniz">  </li>
            <select size="1" name="kod">
                <option value="-1" selected="selected">Lütfen Seçin</option>
                <option value="1">Toplama</option>
                <option value="2">Çıkarma</option>
                <option value="3">Çarpma</option>
                <option value="4">Bölme</option>
                <option value="5">Ortalama</option>
                <li><input type="submit" name="Hesapla"></li>
        </ul>
    </form>
    </select>
    <?php
    //Hesap makinesi fonksiyonu yapmaya çalışacağım.veriyi dışarıdan almalırsak gerçek bir hesap makinesi olur.Formu yukarıda oluşturduk.
    if(isset($_POST["Hesapla"])){
        echo hesapla($birincisayi,$ikincisayi,$kod);
        echo " ==> <strong>Cevabınız.";
    }
    
    
    
    
    function hesapla($birincisayi,$ikincisayi,$kod){
        //toplamayı yapmalıyız ilk olarak.
        switch($kod)    //işlemleri en iyi switch ile yapabiliyoruz.
        {
            case 1 : $sonuc=$birincisayi + $ikincisayi; break;
            case 2 : $sonuc=$birincisayi - $ikincisayi; break;
            case 3 : $sonuc=$birincisayi * $ikincisayi; break;
            case 4 : $sonuc=$birincisayi / $ikincisayi; break;
            case 5 : $sonuc=(($birincisayi + $ikincisayi)/ 2); break;
        }
        return $sonuc;  //sonuçları alacağımız kısımdır süslü parantezlere dikkat .
    }
    $s1=$_POST['birincisayi'];
    $s2=$_POST['ikincisayi'];
    $kod=$_POST['kod'];
    

Gerekli açıklamalar kod satırları arasında mevcuttur.Tamamen kendi yazımımdır arkadaşlar isteyen istediği sitede/forumda kaynak göstermeksizin yayınlayabilir.     Yeni yazmış olduğum dört işlem hesap makinesi [burada](http://cagataycali.me/dort-islem-fonksiyonlui/)