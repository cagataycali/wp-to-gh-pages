
Merhabalar Aşağıda vereceğim kodları kullanarak kendi sitenize TC üzerinden kayıt yaptırabilirsiniz. index.php 
    
    
    <!DOCTYPE HTML>
    <html lang="tr-TR">
    <head>
    	<meta charset="UTF-8">
    	<title>TC Kimlik Doğrulama</title>
    	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    	<script type="text/javascript">
    		function sorgula(){
    			$('#sonuc').html('');
    			var tcTemiz = $('#sorguForm input[name="tcno"]').val().trim();
    			var adTemiz = $('#sorguForm input[name="ad"]').val().trim();
    			var soyadTemiz = $('#sorguForm input[name="soyad"]').val().trim();
    			var dtTemiz = $('#sorguForm input[name="dtarihi"]').val().trim();
    			if(!tcTemiz || tcTemiz.length != 11){
    				$('#sonuc').html('Geçersiz T.C. Kimlik Numarası!..');
    			}else if(!dtTemiz || dtTemiz.length != 4){
    				$('#sonuc').html('Geçersiz Doğum Tarihi!..');
    			}else if(!tcTemiz || !adTemiz || !soyadTemiz || !dtTemiz){
    				$('#sonuc').html('Boş Alan Bırakmayın!..');
    			}else{
    				$.ajax({
    					type: 'POST',
    					url: 'dogrula.php',
    					data: {'tc_no' : tcTemiz, 'ad' : adTemiz, 'soyad' : soyadTemiz, 'dogum_yili' : dtTemiz},
    					beforeSend : function(msg){
    						$('#sonuc').html('Yükleniyor...');
    					},
    					success: function(msg){
    						$('#sonuc').html(msg); 
    					}
    				});
    			}
    		}
    	</script>
    </head>
    
    <body>
    
    <form id="sorguForm" method="post" onsubmit="return false">
    	<table>
    		<tr>
    			<td style="width:180px">T.C.</td>
    			<td><input type="text" name="tcno" size="11" maxlength="11" /><br /></td>
    		</tr>
    		<tr>
    			<td style="width:180px">Ad</td>
    			<td><input type="text" name="ad" /><br /></td>
    		</tr>
    		<tr>
    			<td style="width:180px">Soyad</td>
    			<td><input type="text" name="soyad" /><br /></td>
    		</tr>
    			<tr style="width:180px"><td>Doğum Tarihi</td>
    			<td><input type="text" name="dtarihi" size="4" maxlength="4" /><br /></td>
    		</tr>
    		<tr>
    			<td style="width:180px; color:red; font-size:12px" id="sonuc"></td>
    			<td><input type="button" onclick="sorgula()" value="Doğrula" /></td>
    		</tr>
    	</table>
    </form>
    
    </body>
    </html>

ve "doğrula.php" 
    
    
    <?php
    header("Content-type: text/html; charset=utf-8");
    function turkce_duzelt($veri){
        $bul = array('ç', 'ğ', 'ı', 'i', 'ö', 'ş', 'ü');
        $deg = array('Ç', 'Ğ', 'I', 'İ', 'Ö', 'Ş', 'Ü');
        return str_replace($bul, $deg, $veri);
    }
    if(isset($_POST) && isset($_POST['tc_no'])){
    	$ad = strtoupper(turkce_duzelt(trim($_POST['ad'])));
    	$soyad = strtoupper(turkce_duzelt(trim($_POST['soyad'])));
    	$dogum_yili = trim($_POST['dogum_yili']);
    	$tc_no = trim($_POST['tc_no']);
    	settype($tc_no, 'double');
    	if(!$ad || strlen($ad) <= 2 || !$soyad || strlen($soyad) <= 2 || !$dogum_yili || !$tc_no){
    		echo 'Boş Alan Bırakmayın!..';
    	}else if(strlen($tc_no) != 11){
    		echo 'T.C. Numaranız 11 Karakter Olmalıdır!..';
    	}else if(strlen($dogum_yili) != 4 || !is_numeric($dogum_yili)){
    		echo 'Geçersiz Doğum Yılı!..';
    	}else{
    		try{
    			$veriler = array('TCKimlikNo' => $tc_no, 'Ad' => $ad, 'Soyad' => $soyad, 'DogumYili' => $dogum_yili);
    			$baglan = new SoapClient('https://tckimlik.nvi.gov.tr/Service/KPSPublic.asmx?WSDL');
    			$sonuc = $baglan->TCKimlikNoDogrula($veriler);
    			if($sonuc->TCKimlikNoDogrulaResult){
    				echo 'Tebrikler! Bilgiler Doğru!..';
    			}else{
    				echo 'Hata! Bilgiler Yanlış!..';
    			}
    		}catch(Exception $hata){
    			echo 'Hata! Geçersiz Bilgiler!..';
    		}
    	}
    }else{
    	echo '<h1>Erişim Engellendi!</h1>';
    }
    ?>

## Comments

**[AHMET](#18 "2016-05-26 14:46:04"):** hocam bu kod çalımıyor sürekli false deği döndeiryor . https://tckimlik.nvi.gov.tr/Service/KPSPublicV2.asmx?op=KisiVeCuzdanDogrula bunu kullnamaya kalktıgımda yükleniyorda takılıp klaıyor bana acilen yardım edebilir misiniz ?

**[cagataycali](#22 "2016-06-18 12:27:13"):** Yazı yazılalı üzerinden fazlasıyla vakit geçti, servis geçerliliğini yitirmiş olabilir inceleyip tekrar derleyeceğim teşekkürler

