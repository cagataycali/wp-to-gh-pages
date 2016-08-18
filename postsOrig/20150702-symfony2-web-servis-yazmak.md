title: Symfony2 - Web servis yazmak
link: http://cagataycali.com/symfony2-web-servis-yazmak/
author: cagataycali
description: 
post_id: 522
created: 2015/07/02 13:53:10
created_gmt: 2015/07/02 10:53:10
comment_status: closed
post_name: symfony2-web-servis-yazmak
status: publish
post_type: post

# Symfony2 - Web servis yazmak

Symfony2 ile diğer platformlar için json tabanlı web servisleri yazmak için şu kodları kullanacağız. 
    
    
    ..
    use SymfonyComponentHttpFoundationRequest;
    use SymfonyComponentHttpFoundationResponse;
    ..
    public testAction(Request $request)
    {
    
    $yanit = array();
    
                $response = new Response(json_encode($yanit));
                $response->headers->set('Content-type', 'application/json; charset=utf-8');
                $response->setStatusCode(200);
                return $response;
    }

Sadece hata kodu veya başarılı kodu vermek için ; 
    
    
    return new Response(
                    'Bad Request',
                    400,
                    array('content-type' => 'text/html')
                );