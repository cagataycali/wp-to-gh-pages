title: Symfony2 - FosUserBundle Örnek Securty.yml
link: http://cagataycali.com/symfony2-fosuserbundle-ornek-securty-yml/
author: cagataycali
description: 
post_id: 350
created: 2015/03/28 15:00:27
created_gmt: 2015/03/28 13:00:27
comment_status: open
post_name: symfony2-fosuserbundle-ornek-securty-yml
status: publish
post_type: post

# Symfony2 - FosUserBundle Örnek Securty.yml

# app/config/security.yml
    security:
        access_denied_url:    ~ # Example: /foo/error403
    
        # strategy can be: none, migrate, invalidate
        session_fixation_strategy:  migrate
        hide_user_not_found:  true
        always_authenticate_before_granting:  false
        erase_credentials:    true
        access_decision_manager:
            strategy:             affirmative
            allow_if_all_abstain:  false
            allow_if_equal_granted_denied:  true
        acl:
    
            # any name configured in doctrine.dbal section
            connection:           ~
            cache:
                id:                   ~
                prefix:               sf2_acl_
            provider:             ~
            tables:
                class:                acl_classes
                entry:                acl_entries
                object_identity:      acl_object_identities
                object_identity_ancestors:  acl_object_identity_ancestors
                security_identity:    acl_security_identities
            voter:
                allow_if_object_identity_unavailable:  true
    
        encoders:
            # Examples:
            AcmeDemoBundleEntityUser1: sha512
            AcmeDemoBundleEntityUser2:
                algorithm:           sha512
                encode_as_base64:    true
                iterations:          5000
    
            # PBKDF2 encoder
            # see the note about PBKDF2 below for details on security and speed
            AcmeYourClassName:
                algorithm:            pbkdf2
                hash_algorithm:       sha512
                encode_as_base64:     true
                iterations:           1000
                key_length:           40
    
            # Example options/values for what a custom encoder might look like
            AcmeDemoBundleEntityUser3:
                id:                   my.encoder.id
    
            # BCrypt encoder
            # see the note about bcrypt below for details on specific dependencies
            AcmeDemoBundleEntityUser4:
                algorithm:            bcrypt
                cost:                 13
    
            # Plaintext encoder
            # it does not do any encoding
            AcmeDemoBundleEntityUser5:
                algorithm:            plaintext
                ignore_case:          false
    
        providers:            # Required
            # Examples:
            my_in_memory_provider:
                memory:
                    users:
                        foo:
                            password:           foo
                            roles:              ROLE_USER
                        bar:
                            password:           bar
                            roles:              [ROLE_USER, ROLE_ADMIN]
    
            my_entity_provider:
                entity:
                    class:              SecurityBundle:User
                    property:           username
                    # name of a non-default entity manager
                    manager_name:       ~
    
            # Example custom provider
            my_some_custom_provider:
                id:                   ~
    
            # Chain some providers
            my_chain_provider:
                chain:
                    providers:          [ my_in_memory_provider, my_entity_provider ]
    
        firewalls:            # Required
            # Examples:
            somename:
                pattern: .*
                # restrict the firewall to a specific host
                host: admin.example.com
                 # restrict the firewall to specific http methods
                methods: [GET, POST]
                request_matcher: some.service.id
                access_denied_url: /foo/error403
                access_denied_handler: some.service.id
                entry_point: some.service.id
                provider: some_key_from_above
                # manages where each firewall stores session information
                # See "Firewall Context" below for more details
                context: context_key
                stateless: false
                x509:
                    provider: some_key_from_above
                remote_user:
                    provider: some_key_from_above
                http_basic:
                    provider: some_key_from_above
                http_digest:
                    provider: some_key_from_above
                form_login:
                    # submit the login form here
                    check_path: /login_check
    
                    # the user is redirected here when they need to log in
                    login_path: /login
    
                    # if true, forward the user to the login form instead of redirecting
                    use_forward: false
    
                    # login success redirecting options (read further below)
                    always_use_default_target_path: false
                    default_target_path:            /
                    target_path_parameter:          _target_path
                    use_referer:                    false
    
                    # login failure redirecting options (read further below)
                    failure_path:    /foo
                    failure_forward: false
                    failure_path_parameter: _failure_path
                    failure_handler: some.service.id
                    success_handler: some.service.id
    
                    # field names for the username and password fields
                    username_parameter: _username
                    password_parameter: _password
    
                    # csrf token options
                    csrf_parameter: _csrf_token
                    intention:      authenticate
                    csrf_provider:  my.csrf_provider.id
    
                    # by default, the login form *must* be a POST, not a GET
                    post_only:      true
                    remember_me:    false
    
                    # by default, a session must exist before submitting an authentication request
                    # if false, then Request::hasPreviousSession is not called during authentication
                    # new in Symfony 2.3
                    require_previous_session: true
    
                remember_me:
                    token_provider: name
                    key: someS3cretKey
                    name: NameOfTheCookie
                    lifetime: 3600 # in seconds
                    path: /foo
                    domain: somedomain.foo
                    secure: false
                    httponly: true
                    always_remember_me: false
                    remember_me_parameter: _remember_me
                logout:
                    path:   /logout
                    target: /
                    invalidate_session: false
                    delete_cookies:
                        a: { path: null, domain: null }
                        b: { path: null, domain: null }
                    handlers: [some.service.id, another.service.id]
                    success_handler: some.service.id
                anonymous: ~
    
            # Default values and options for any firewall
            some_firewall_listener:
                pattern:              ~
                security:             true
                request_matcher:      ~
                access_denied_url:    ~
                access_denied_handler:  ~
                entry_point:          ~
                provider:             ~
                stateless:            false
                context:              ~
                logout:
                    csrf_parameter:       _csrf_token
                    csrf_provider:        ~
                    intention:            logout
                    path:                 /logout
                    target:               /
                    success_handler:      ~
                    invalidate_session:   true
                    delete_cookies:
    
                        # Prototype
                        name:
                            path:                 ~
                            domain:               ~
                    handlers:             []
                anonymous:
                    key:                  4f954a0667e01
                switch_user:
                    provider:             ~
                    parameter:            _switch_user
                    role:                 ROLE_ALLOWED_TO_SWITCH
    
        access_control:
            requires_channel:     ~
    
            # use the urldecoded format
            path:                 ~ # Example: ^/path to resource/
            host:                 ~
            ips:                  []
            methods:              []
            roles:                []
        role_hierarchy:
            ROLE_ADMIN:      [ROLE_ORGANIZER, ROLE_USER]
            ROLE_SUPERADMIN: [ROLE_ADMIN]