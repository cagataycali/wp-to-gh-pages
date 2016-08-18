
Şablonlarımızın içerisinde rol kontrolü yaptırmak için örnek kod; 
    
    
    {% if is_granted('ROLE_ADMIN') %}
        <a href="...">Sil</a>
    {% endif %}