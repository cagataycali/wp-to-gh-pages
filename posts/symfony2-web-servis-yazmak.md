
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