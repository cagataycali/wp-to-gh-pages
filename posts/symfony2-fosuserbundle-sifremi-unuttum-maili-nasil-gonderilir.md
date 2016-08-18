
**Projenizde ilgili yere şifremi unuttum butonu koymayı unutmayın.**
    
    
    <a class="form-control btn-warning" href="{{ path('fos_user_resetting_request') }}">Şifremi unutttum</a>

Butonun href bilgisine **fos_user_resetting_request** yazacaksınız.  
    
    
    # app/config/config.yml
    fos_user:
        #...
        resetting:
            email:
                from_email:
                    address:        resetting@acmedemo.com
                    sender_name:    Acme Demo Resetting