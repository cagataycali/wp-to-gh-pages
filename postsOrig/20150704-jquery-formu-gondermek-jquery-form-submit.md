title: Jquery Formu Göndermek ( Jquery Form Submit)
link: http://cagataycali.com/jquery-formu-gondermek-jquery-form-submit/
author: cagataycali
description: 
post_id: 526
created: 2015/07/04 10:48:23
created_gmt: 2015/07/04 07:48:23
comment_status: closed
post_name: jquery-formu-gondermek-jquery-form-submit
status: publish
post_type: post

# Jquery Formu Göndermek ( Jquery Form Submit)

<!DOCTYPE html>
    <html>
    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script>
    $(document).ready(function(){
        $("form").submit(function(){
            alert("Submitted");
        });
    });
    </script>
    </head>
    <body>
    
    <form action="">
      First name: <input type="text" name="FirstName" value="Mickey"><br>
      Last name: <input type="text" name="LastName" value="Mouse"><br>
      <input type="submit" value="Submit">
    </form> 
    
    </body>
    </html>