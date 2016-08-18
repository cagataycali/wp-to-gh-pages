title: Symfony2 - Form Type'lara Özellik Eklemek
link: http://cagataycali.com/symfony2-form-typelara-ozellik-eklemek/
author: cagataycali
description: 
post_id: 398
created: 2015/03/30 23:50:10
created_gmt: 2015/03/30 20:50:10
comment_status: open
post_name: symfony2-form-typelara-ozellik-eklemek
status: publish
post_type: post

# Symfony2 - Form Type'lara Özellik Eklemek

Form Tiplerinin içerisine class="form-control" required,auto focus ve türevi özerllikler ekleme ile ilgili örnek ; 
    
    
    // Symfony/vendor/friendsofsymfony/user-bundle/Form/Type/RegistrationFormType.php
    
    ..
    ....
    public function buildForm(FormBuilderInterface $builder, array $options)
        {
            $builder
                ->add('email', 'email', array('label'=>false , 'attr'=>array('placeholder'=>'E-Mail' , 'class'=>'form-control')))
                ->add('username', null, array('label' => false, 'attr'=>array('placeholder'=>'Kullanıcı Adınız' , 'class'=>'form-control')))
                ->add('plainPassword', 'repeated', array(
                    'type' => 'password',
                    'first_options' => array('label' => false,'attr'=>array('class'=>'form-control','placeholder'=>'Şifreniz')),
                    'second_options' => array('label' => false ,'attr'=>array('class'=>'form-control','placeholder'=>'Tekrar Şifreniz')),
                    'invalid_message' => 'Şifreniz uygun değildir',
                    )
                )
            ;
        }