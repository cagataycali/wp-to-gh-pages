
Http veya Https arasında değişiklik yapmamız gereken durumlarda security.yml dosyasını düzenleyeceğiz. 
    
    
    access_control:
        - { path: ^/secure, roles: ROLE_ADMIN, requires_channel: https }

**requires_channel: https **