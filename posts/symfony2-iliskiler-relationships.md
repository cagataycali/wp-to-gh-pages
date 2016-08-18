
Symfony ve Doctrine kullanarak mySQL üzerinde ilişkili veritabanı yapacağız.Belli başlı ilişki türlerini işleyeceğiz. 

* * *

Çoktan-Bire ilişki ( Many-To-One )  : Veritabanı tablomuzdaki birden çok satırın başka bir tablodaki bir satırı işaret etmesine denir. Çoktan-Çoğa ilişki ( Many-To-Many ) : Veritabanı tablomuzdaki birden çok kaydın başka bir tablodaki birden çok kaydı işaret etmesine denir.Tablomuzdaki veriler diğer tablodaki tek bir satırıda işaret edebilir birden çok satırıda işaret edebilir. Bire-Bir ilişki ( One-To-Many ) : Veritabanı tablomuzdaki bir satırın başka bir tablodaki karşılığının bir satırda bulunması durumudur. 

* * *

Tek yönlü ( Unidirectional ) durumu : Sorgularımızı yazarken ( Query ) ve sorgularımızı çağırırken tek yönlü çağırmamıza olanak verir. Çift yönlü ( Bidirectional ) durumu : Sorgularımızı yazarken ( Query ) ve sorgularımızı çağırıken çift yönlü çağırmamıza olanak verir. Kendini yineleyen ( Self-Referencing ) durumu : Sorgularımızı aynı tablo içerisinde döndüreceksek bize izin veren durumdur. 

Örnek verecek olursak ;

Tek yönlü bir ilişki kurdunuz, üye tablonuz ve grup tablonuz var.Üye tablonuz : user , grup tablonuz: group ve üye ekleyeceğiniz zaman ilişki durumuna göre ilk olarak grup tablosuna kime bağlı olduğu sorulur,üye tablosuna bağlıyım diye yanıt döner ve üyeyi eklerken şu şekilde ekleriz, user.group.. / sayfalama işlemleri sırasında veya filtreleme işlemleri sırasında sürekli user.group şeklinde yazmak gerekecektir.

Çift yönlü bir ilişki kursaydınız,üye tablonuza üye eklerken group.user şeklinde ekleyebilir,filtreleme yaparken direkt gruplara ait üyeleri hızlıca çağırabilirdiniz.Projelerde ilişki durumlarını proje akışına uygun bir şekilde dikkatlice belirlemeliyiz.

* * *

###  Çoktan - Çoğa  ( Tek Yönlü ) | Many-To-Many ( Unidirectional );
    
    
    <?php
    
    namespace YourBundleEntity;
    
    use DoctrineORMMapping as ORM;
    use DoctrineCommonCollectionsArrayCollection;
    
    /**
     * @ORMEntity
     */
    class User
    {
      /**
       * Many-To-Many, Unidirectional
       *
       * @var ArrayCollection $groups
       *
       * @ORMManyToMany(targetEntity="Group")
       * @ORMJoinTable(name="user_has_group",
       *      joinColumns={@ORMJoinColumn(name="user_id", referencedColumnName="id")},
       *      inverseJoinColumns={@ORMJoinColumn(name="group_id", referencedColumnName="id")}
       * )
       */
      protected $groups;
    
      /**
       * Many-To-Many, Unidirectional
       *
       * @var ArrayCollection $permissions
       *
       * @ORMManyToMany(targetEntity="Permission")
       * @ORMJoinTable(name="user_has_permission",
       *      joinColumns={@ORMJoinColumn(name="user_id", referencedColumnName="id")},
       *      inverseJoinColumns={@ORMJoinColumn(name="permission_id", referencedColumnName="id")}
       * )
       */
      protected $permissions;
    
      public function __construct()
      {
        $this->groups = new ArrayCollection();
        $this->permissions = new ArrayCollection();
      }
    }
    
    /**
     * @ORMEntity
     */
    class Group
    {
      /**
       * Many-To-Many, Unidirectional
       *
       * @var ArrayCollection $permissions
       *
       * @ORMManyToMany(targetEntity="Permission")
       * @ORMJoinTable(name="group_has_permission",
       *      joinColumns={@ORMJoinColumn(name="group_id", referencedColumnName="id")},
       *      inverseJoinColumns={@ORMJoinColumn(name="permission_id", referencedColumnName="id")}
       * )
       */
      protected $permissions;
    
      public function __construct()
      {
        $this->permissions = new ArrayCollection();
      }
    }
    
    /**
     * @ORMEntity
     */
    class Permission {}

Görüldüğü gibi üyelerin grupları tek yönlü olarak sağlanmış oldu,üye tablosundan eklemelerimizi yaptıktan sonra gruplar tablosunda hiçbir değişiklik yapmadan tek yönlü bir ilişki kurmuş olduk. 

* * *

### 

### Çoktan Bire ( Tek Yönlü ) | Many-To-One ( Unidirectional );
    
    
    <?php
    
    namespace YourBundleEntity;
    
    use DoctrineORMMapping as ORM;
    use DoctrineCommonCollectionsArrayCollection;
    
    /**
     * @ORMEntity
     */
    class Ticket
    {
      /**
       * Many-To-One, Unidirectional
       *
       * @var Category
       *
       * @ORMManyToOne(targetEntity="Category")
       * @ORMJoinColumn(name="category_id", referencedColumnName="id")
       */
      protected $category;
    
     
    }
    /**
     * @ORMEntity
     */
    class Category {}

Örnekte olduğu gibi biletlerin kategorilerini çoktan bire bir durumda ilişki kurduk. 

* * *

### Bire - Bir ( Tek Yönlü ) | One-To-One ( Unidirectional );
    
    
    <?php
    /** @Entity **/
    class Product
    {
        // ...
    
        /**
         * @ORMOneToOne(targetEntity="Shipping")
         * @ORMJoinColumn(name="shipping_id", referencedColumnName="id")
         **/
        private $shipping;
    
        // ...
    }
    
    /** @Entity **/
    class Shipping{}
    

Örnekte ürünün nakliyesi ile ilgili bire bir tek yönlü durumda ilişki kurduk. 

* * *

### Birden Çoğa ( Çift Yönlü ) | One-To-Many ( Bidirectional );
    
    
    <?php
    
    namespace YourBundleEntity;
    
    use DoctrineORMMapping as ORM;
    use DoctrineCommonCollectionsArrayCollection;
    
    /**
     * @ORMEntity
     */
    class Ticket
    {
    /**
       * One-To-Many, Bidirectional
       *
       * @var ArrayCollection $comments
       *
       * @ORMOneToMany(targetEntity="Comment", mappedBy="ticket")
       */
      protected $comments;
    
      public function __construct()
      {
        $this->comments = new ArrayCollection();
      }
    }
    
    /**
     * @ORMEntity
     */
    class Comment
    {
      /**
       * Many-To-One, Bidirectional
       *
       * @var Ticket $ticket
       *
       * @ORMManyToOne(targetEntity="Ticket")
       * @ORMJoinColumn(name="ticket_id", referencedColumnName="id")
       */
      protected $ticket=null;
    }
    

 

* * *

### Çoktan Çoğa ( Çift Yönlü ) | Many-To-Many ( Bidirectional );
    
    
    <?php
    /** @Entity **/
    class User
    {
        // ...
    
        /**
         * @ORMManyToMany(targetEntity="Group", inversedBy="users")
         * @ORMJoinTable(name="users_groups")
         **/
        private $groups;
    
        public function __construct() {
            $this->groups = new DoctrineCommonCollectionsArrayCollection();
        }
    
        // ...
    }
    
    /** @Entity **/
    class Group
    {
        // ...
        /**
         * @ORMManyToMany(targetEntity="User", mappedBy="groups")
         **/
        private $users;
    
        public function __construct() {
            $this->users = new DoctrineCommonCollectionsArrayCollection();
        }
    
        // ...
    }

Sorumluluk kimde? Many-To-Many ilişki bize bu sorunun cevabını şu şekilde verebilir; 
    
    
    <?php
    class Article
    {
        private $tags;
    
        public function addTag(Tag $tag)
        {
            $tag->addArticle($this); // synchronously updating inverse side
            $this->tags[] = $tag;
        }
    }
    
    class Tag
    {
        private $articles;
    
        public function addArticle(Article $article)
        {
            $this->articles[] = $article;
        }
    }