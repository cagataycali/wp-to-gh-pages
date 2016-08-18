title: Sql Injection Önleme Fonksiyonu
link: http://cagataycali.com/sql-injection-onleme-fonksiyonu/
author: cagataycali
description: 
post_id: 215
created: 2014/11/12 16:49:50
created_gmt: 2014/11/12 14:49:50
comment_status: open
post_name: sql-injection-onleme-fonksiyonu
status: publish
post_type: post

# Sql Injection Önleme Fonksiyonu

function sqlfilter($cek){ 
    $sqlinjectionchars = array("*","/","'",""","=","+","(",")","%20","%","\","select"); 
    $sqlinjectionchars; 
    $filtered = ''; 
    for($i = 0; $i <= strlen($cek); $i++){ 
    if(!in_array(substr($cek,$i,1),$sqlinjectionchars)){ 
    $filtered .= substr($cek,$i,1); 
    }       
    } 
    for($i = 0; $i < count($sqlinjectionchars); $i++){ 
    $filtered = str_replace($sqlinjectionchars[$i],"*",$filtered); 
    } 
    return $filtered; 
    }

Sql Injection önlemek için fonksiyon