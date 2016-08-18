title: Yarıçapı Verilen Daire Hakkında Sütlü Sohbetler
link: http://cagataycali.com/yaricapi-verilen-daire-hakkinda-sutlu-sohbetler/
author: cagataycali
description: 
post_id: 217
created: 2014/11/12 17:04:34
created_gmt: 2014/11/12 15:04:34
comment_status: open
post_name: yaricapi-verilen-daire-hakkinda-sutlu-sohbetler
status: publish
post_type: post

# Yarıçapı Verilen Daire Hakkında Sütlü Sohbetler

<form id="form1" name="form1" method="post" action="calismalar.php">
        <table width="212" border="0">
            <tr>
                <td width="61">Yarıçap:</td>
                <td width="141"><input type="text" name="yaricap" id="yaricap" /></td>
            </tr>
            <tr>
                <td> </td>
                <td><input type="submit" name="button" id="button" value="Hesapla" onclick="alert('Hesaplandı!')" /></td>
            </tr>
        </table>
    </form>
    <?
    define("pi",3); //pi değeri sabit bir değer olduğu için define ile tanımladık
    $yaricap = $_POST['yaricap'];
    $alan = ($yaricap*$yaricap)*pi; // alan formülünü tanımladık
    $cevre = 2*pi*$yaricap; //çevre formülünü tanımladık
    echo "Alan: ".$alan."Çevre: ".$cevre;
    ?>

Kodun düzgün çalışmasını istiyorsanız çalıştığınız dosyanın adını " calismalar.php " yerine yazınız.