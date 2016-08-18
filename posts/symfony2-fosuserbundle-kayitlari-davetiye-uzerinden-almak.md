
Projemize kayıtların davetiye kodu üzerinden alınmasını sağlamak için hızlıca ayarlamalarımızı yapalım. **ADIM 1** İlk olarak davet classlarımızı içerecek olan entity'mizi oluşturalım. **EntityInvitation.php **
    
    
    <?php
    
    namespace AcmeUserBundleEntity;
    
    use DoctrineORMMapping as ORM;
    
    /** @ORMEntity */
    class Invitation
    {
        /** @ORMId @ORMColumn(type="string", length=6) */
        protected $code;
    
        /** @ORMColumn(type="string", length=256) */
        protected $email;
    
        /**
         * When sending invitation be sure to set this value to `true`
         *
         * It can prevent invitations from being sent twice
         *
         * @ORMColumn(type="boolean")
         */
        protected $sent = false;
    
        /** @ORMOneToOne(targetEntity="User", mappedBy="invitation", cascade={"persist", "merge"}) */
        protected $user;
    
        public function __construct()
        {
            // generate identifier only once, here a 6 characters length code
            $this->code = substr(md5(uniqid(rand(), true)), 0, 6);
        }
    
        public function getCode()
        {
            return $this->code;
        }
    
        public function getEmail()
        {
            return $this->email;
        }
    
        public function setEmail($email)
        {
            $this->email = $email;
        }
    
        public function isSent()
        {
            return $this->sent;
        }
    
        public function send()
        {
            $this->sent = true;
        }
    
        public function getUser()
        {
            return $this->user;
        }
    
        public function setUser(User $user)
        {
            $this->user = $user;
        }
    }

**ADIM 2** User entity'mizle one-to-one türünde bir ilişki kuralım. EntityUser.php 
    
    
    <?php
    
    namespace AcmeUserBundleEntity;
    
    use DoctrineORMMapping as ORM;
    use SymfonyComponentValidatorConstraints as Assert;
    
    /** @ORMEntity */
    class User extends FOSUserBundleEntityUser
    {
        /** @ORMId @ORMColumn(type="integer") @ORMGeneratedValue(strategy="AUTO") */
        protected $id;
    
        /**
         * @ORMOneToOne(targetEntity="Invitation", inversedBy="user")
         * @ORMJoinColumn(referencedColumnName="code")
         * @AssertNotNull(message="Your invitation is wrong", groups={"Registration"})
         */
        protected $invitation;
    
        public function setInvitation(Invitation $invitation)
        {
            $this->invitation = $invitation;
        }
    
        public function getInvitation()
        {
            return $this->invitation;
        }
    }

**ADIM 3** Bundle'mız altında Form adlı bir klasör oluşturalım.Form klasörünün içerisine Type adlı bir klasör daha oluşturup 
    
    
    RegistrationFormType.php

Adlı bir php dosyası açalım.İçerisine aşağıdaki kodları yapıştıralım. 
    
    
    <?php
    
    namespace AcmeUserBundleFormType;
    
    use FOSUserBundleFormTypeRegistrationFormType as BaseRegistrationFormType;
    use SymfonyComponentFormFormBuilderInterface;
    
    class RegistrationFormType extends BaseRegistrationFormType
    {
        public function buildForm(FormBuilderInterface $builder, array $options)
        {
            parent::buildForm($builder, $options);
    
            $builder->add('invitation', 'acme_invitation_type');
        }
    
        public function getName()
        {
            return 'acme_user_registration';
        }
    }

Ardından InvitationFormType.php adlı bir dosya daha oluşturup içine aşağıdaki kodları yapıştıralım. 
    
    
    <?php
    
    namespace AcmeUserBundleFormType;
    
    use SymfonyComponentFormAbstractType;
    use SymfonyComponentFormFormBuilderInterface;
    use SymfonyComponentOptionsResolverOptionsResolverInterface;
    use DoctrineORMEntityRepository;
    use AcmeUserBundleFormDataTransformerInvitationToCodeTransformer;
    
    class InvitationFormType extends AbstractType
    {
        protected $invitationTransformer;
    
        public function __construct(InvitationToCodeTransformer $invitationTransformer)
        {
            $this->invitationTransformer = $invitationTransformer;
        }
    
        public function buildForm(FormBuilderInterface $builder, array $options)
        {
            $builder->addViewTransformer($this->invitationTransformer, true);
        }
    
        public function setDefaultOptions(OptionsResolverInterface $resolver)
        {
            $resolver->setDefaults(array(
                'class' => 'AcmeUserBundleEntityInvitation',
                'required' => true,
            ));
        }
    
        public function getParent()
        {
            return 'text';
        }
    
        public function getName()
        {
            return 'acme_invitation_type';
        }
    }

Ardından Form klasörünün altına DataTransformer adlı bir klasör açıp içerisine InvitationToCodeTransformer.php adlı bir dosya açıp aşağıdaki kodları yapıştıralım. 
    
    
    <?php
    
    namespace AcmeUserBundleFormDataTransformer;
    
    use AcmeUserBundleEntityInvitation;
    use DoctrineORMEntityManager;
    use SymfonyComponentFormDataTransformerInterface;
    use SymfonyComponentFormExceptionUnexpectedTypeException;
    
    /**
     * Transforms an Invitation to an invitation code.
     */
    class InvitationToCodeTransformer implements DataTransformerInterface
    {
        protected $entityManager;
    
        public function __construct(EntityManager $entityManager)
        {
            $this->entityManager = $entityManager;
        }
    
        public function transform($value)
        {
            if (null === $value) {
                return null;
            }
    
            if (!$value instanceof Invitation) {
                throw new UnexpectedTypeException($value, 'AcmeUserBundleEntityInvitation');
            }
    
            return $value->getCode();
        }
    
        public function reverseTransform($value)
        {
            if (null === $value || '' === $value) {
                return null;
            }
    
            if (!is_string($value)) {
                throw new UnexpectedTypeException($value, 'string');
            }
    
            return $this->entityManager
                ->getRepository('AcmeUserBundleEntityInvitation')
                ->findOneBy(array(
                    'code' => $value,
                    
                ));
        }
    }

* * *

  **ADIM 4** app/config/services.yml 'a aşağıdaki kodları ekleyelim 
    
    
    services:
    
        acme.registration.form.type:
            class: AcmeUserBundleFormTypeRegistrationFormType
            arguments: [%fos_user.model.user.class%]
            tags: [{ name: "form.type", alias: "acme_user_registration" }]
    
        acme.invitation.form.type:
            class: AcmeUserBundleFormTypeInvitationFormType
            arguments: [@acme.invitation.form.data_transformer]
            tags: [{ name: "form.type", alias: "acme_invitation_type" }]
    
        acme.invitation.form.data_transformer:
            class: AcmeUserBundleFormDataTransformerInvitationToCodeTransformer
            arguments: [@doctrine.orm.entity_manager]

Xml kullananlar için: 
    
    
    <!-- src/Acme/UserBundle/Resources/config/services.xml -->
    
    <?xml version="1.0" ?>
    
    <container xmlns="http://symfony.com/schema/dic/services"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"