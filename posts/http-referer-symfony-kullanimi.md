title: Http Referer Symfony Kullanımı
link: http://cagataycali.com/http-referer-symfony-kullanimi/
author: cagataycali
description: 
post_id: 543
created: 2015/09/28 14:03:27
created_gmt: 2015/09/28 11:03:27
comment_status: closed
post_name: http-referer-symfony-kullanimi
status: publish
post_type: post

# Http Referer Symfony Kullanımı

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