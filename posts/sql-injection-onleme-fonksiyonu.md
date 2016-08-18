
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