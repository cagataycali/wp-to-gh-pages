
{% if is_granted("IS_AUTHENTICATED_REMEMBERED") %}
    
                    {{ app.security.getToken().getUser().getUsername() }}
    
    {% else %}
    
                    <a href="{{ path('fos_user_security_login') }}">{{ 'layout.login'|trans({}, 'FOSUserBundle') }}</a>
    
    {% endif %}