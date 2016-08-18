
#### date
    
    
    {{ post.published_at|date("m/d/Y") }}
    {{ post.published_at|date("m/d/Y", "Europe/Paris") }}
    

#### date_modify
    
    
    {{ post.published_at|date_modify("+1 day")|date("m/d/Y") }}
    

#### format
    
    
    {{ "I like %s and %s."|format(foo, "bar") }}
    

#### replace
    
    
    {{ "I like %this% and %that%."|replace({'%this%': foo, '%that%': "bar"}
    

#### number_format
    
    
    {{ 200.35|number_format }}
    {{ 9800.333|number_format(2, '.', ',') }}
    

#### url_encode
    
    
    {{ data|url_encode() }}
    

#### json_encode
    
    
    {{ data|json_encode() }}
    

#### convert_encoding
    
    
    {{ data|convert_encoding('UTF-8', 'iso-2022-jp') }}
    

#### title
    
    
    {{ 'my first car'|title }}
    {# outputs 'My First Car' #}
    

#### capitalize
    
    
    {{ 'my first car'|capitalize }}
    

#### nl2br
    
    
    {{ "I like Twig.nYou will like it too."|nl2br }}
        {# outputs
    
        I like Twig.<br />
        You will like it too.
    
        #}
    

#### raw
    
    
    {{ var|raw }} {# var won't be escaped #}
    

#### trim
    
    
    {{ ' I like Twig.'|trim('.') }}
    

#### upper
    
    
    {{ 'welcome'|upper }}
    

#### lower
    
    
    {{ 'WELCOME'|lower }}
    

#### striptags
    
    
    {% some_html|striptags %}
    

#### join
    
    
    {{ [1, 2, 3]|join('|') }}
    {# returns 1|2|3 #}
    

#### split
    
    
    {{ "one,two,three"|split(',') }}
    {# returns ['one', 'two', 'three'] #}
    

#### reverse
    
    
    {% for use in users|reverse %}
        ...
    {% endfor %}
    

#### abs
    
    
    {{ number|abs }}
    

#### length
    
    
    {% if users|length > 10 %}
        ...
    {% endif %}
    

#### sort
    
    
    {% for use in users|sort %}
        ...
    {% endfor %}
    

#### default
    
    
    {{ var|default('var is not defined') }}
    

#### keys
    
    
    {% for key in array|keys %}
        ...
    {% endfor %}
    

#### escape
    
    
    {{ user.username|e }}
    {# is equivalent to #}
    {{ user.username|e('html') }}
    {{ user.username|e('css') }}
    {{ user.username|e('js') }}