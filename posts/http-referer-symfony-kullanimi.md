
Symfony projemizde kullanıcının hangi sayfa üzerinden controller'ımıza eriştiğini öğrenmek gerekebilir, onun için http_referer'i kullanmalıyız. 
    
    
            /**
             * İsteğin hangi route üzerinden geldiğini yakalayalım.
             */
            $route = $request->server->get('HTTP_REFERER');
    
            #. .
            # . .
            #  .  .
            /**
             * Kullanıcıyı geldiği route'a geri döndürelim
             */
            return $this->redirect($route);