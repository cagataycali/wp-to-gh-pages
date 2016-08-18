
İlişkiler makalemde uzun uzun nasıl yapıldığını anlattım,fakat sadece one-to-many türü ilişki yapmak için tüm makaleyi okumamanız için özet geçiyorum.İki adet entity'miz olsun.

  1. Kullanici
  2. Yorum
Kullanıcının yorumları olacak.One To Many türünde ilişki yapacağız. Kurulum basit 4 adımda bitecek! 

* * *

 

## **ADIM 1 : **

  İlk olarak entity'ler içerisindeki get ve set komutlarını siliyoruz. 

* * *

 

## **ADIM 2 :**

One-To-Many ilişkimizde one olacak yani tekil olacak entity'e giriyoruz.Bizim örneğimizde Kullanici entity'si one olacak taraftır. #src/EntityBundle/Entity/Kullanici.php 
    
    
    ..
    /**
         * @ORMOneToMany(targetEntity="Yorum", mappedBy="kullanici")
         */
        private $yorumlar;
    
    ..

Yukarıdaki satırları ekliyoruz. 

* * *

 

## **ADIM 3 :**

Kullanici.php entity'sindeki işimiz henüz bitmiş değil,array collection adını verdiğimiz,ilişkili veritabanından verileri çekerken kullanacağımız array'leri tanımlamalıyız.Kullanici.php ' entitysi one olan taraftır.Tüm one olan taraflara eklenecektir. 
    
    
     public function __construct()
        {
            #parent::__construct(); EĞER FOS USER BUNDLE KULLANIYORSANIZ.
    
            $this->yorumlar = new ArrayCollection();
           
        }

ArrayCollection(); yazarken entity'mizde ArrayCollection özelliğini aktif etmek için entity dosyamızda şu satırların eklenmesi gerekmektedir. 
    
    
    <?php
    ..
    use DoctrineCommonCollectionsArrayCollection;
    ..

 

* * *

 

## **ADIM 4 : **

Yorum entity'sine yani many olan tarafa şu kodu ekleyeceğiz. 
    
    
     /**
         * @ORMManyToOne(targetEntity="Kullanici", inversedBy="yorumlar")
         * @ORMJoinColumn(name="kullanici_id", referencedColumnName="id" ,onDelete="CASCADE")
         */
        private $kullanici;

 

* * *

   

# **Kural : **

  * Entity ilişkilerinde one olan taraf many olan taraftaki değişkeni çoğul olarak yazılacak. 
    * Kullanici.php; 
      * private $yorumlar;
    * Yorum.php; 
      * private $kullanici;
 

### ** Veritabanımızı güncellemek için:**
    
    
    php app/console doctrine:schema:update --force

 

### **İlişkiler kuruldu fakat kontrol ettirelim;**
    
    
    php app/console doctrine:schema:validate

İşlem tamam!  

# **Hatırlatma! **
    
    
    php app/console doctrine:generate:entities MyBundle

Get ve set komutlarının otomatik oluşturulması için generate yapıyoruz.Bu işlemi yapmazsak twig'den get ve set controllerden get ve set komutlarını kullanamayız.