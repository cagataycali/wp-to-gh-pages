
FOSUserBundle uygulamanızın kullanıcılarını yönetmenize yardımcı olmak için komut satırı araçları sağlar . Komutlar aşağıdaki görevler için kullanılabilir : 

  1. **Kullanıcı oluşturmak                         ( Create a User )**
  2. **Kullanıcıyı aktifleştirmek                   ( Activate a User )**
  3. **Kullanıcıyı pasifleştirmek                  ( Deactivate a User )**
  4. **Kullanıcıyı yetkilendirmek                 ( Promote a User )**
  5. **Kullanıcının yetkisini almak              ( Demote a User )**
  6. **Kullanıcının şifresini değiştirmek      ( Change a User's Password )**
**Not:**

> Komutları kullanmadan önce FOSUserBundle'ın doğru bir şekilde yapılandırılmış olması gerekmektedir.

### 

### 1) Kullanıcı Oluşturmak ( Create a User ) ;

Uygulamamıza yeni kullanıcıları eklemek için `fos:user:create` komutunu kullanabilirsiniz.Yeni bir kullanıcı eklerken bu komut bizden üç adet argüman ister, kullanıcı adı ( `username` ),e-mail ( `email` ),ve şifre ( `password ).` **Not:**

> Konuyu anlatırken kullanıcı adını " test  " olarak kullanacağım.Örnek üzerinden gidecekseniz kullanıcı adını test olarak kullanmanızı tavsiye ederim.

Örnek vermek gerekirse yeni bir kullanıcıyı kullanıcı adının test,e-mail adresinin test@test.com olduğu ve şifresinin 12345 olduğu bir komut yazmak istersek aşağıdaki gibi bir örnek kullanmalıyız. 
    
    
    $ php app/console fos:user:create test test@test.com 12345

Eğer gerekli argümanları yazmazsak interaktif olarak onları girmemizi isteyecektir. 
    
    
    $ php app/console fos:user:create test

Kullanıcı ekleme komutunun iki özel uzantısı mevcut. Bunlar `--super-admin` ve`\--inactive`. Özel olarak `\--super-admin` uzantısı kullanıcıyı yüksek yönetici ( SUPER_ADMIN) olarak eklememizi sağlar,yüksek yönetici uygulamamızın çeşitli erişim izinlerine sahiptir. Kullanımı şu şekildedir: 
    
    
    $ php app/console fos:user:create test --super-admin

`\--inactive uzantısı ise kullanıcıyı pasif durumuna getirmeye yarar.Aktif hale getirilmediği sürece kullanıcı giriş yapamaz hale gelir.Kullanımı şu şekildedir; `
    
    
    $ php app/console fos:user:create test --inactive

### 2) Kullanıcıyı Akifleştirmek ( Activate a User )

Pasif olan kullanıcıyı `fos:user:activate` komutunu kullanarak aktifleştiririz. Bu komut sadece kullanıcı adı ( `username`  ) argümanını gerektirmektedir. Eğer argüman olarak kullanıcı adı ( `username`  ) girmezseniz interaktif olarak sizden isteyecektir. Kullanımı şu şekildedir; 
    
    
    $ php app/console fos:user:activate test

### 3) Kullanıcıyı Pasifleştirmek ( Deactivate a User )

Kullanıcıyı pasifleştirmek için `fos:user:deactivate` komutunu kullanırız. Bu komut sadece kullanıcı adı ( `username`  ) argümanını gerektirmektedir. Eğer argüman olarak kullanıcı adı ( `username`  ) girmezseniz interaktif olarak sizden isteyecektir. Kullanımı şu şekildedir; 
    
    
    $ php app/console fos:user:deactivate test

### 4) Kullanıcıyı yetkilendirmek ( Promote a User )

Uygulamamızdaki kullanıcıyı yetkili kullanıcı olarak rütbelendirmek için `fos:user:promote` komutunu kullanırız. Bu komut kullanıcı adı ( `username`  ) ve rol (` role )` argümanlarını gerektirmektedir. Eğer argümanları girmezseniz interaktif olarak sizden isteyecektir. Kullanımı şu şekildedir; 
    
    
    $ php app/console fos:user:promote test ROLE_ADMIN

Veya 
    
    
    $ php app/console fos:user:promote test --super

**Not:**

> Aynı anda `role` argümanı ve `\--super` argümanı kullanılamaz.

### 5) Kullanıcının Yetkisini Almak ( Demote a User )

Uygulamamızdaki yetkili kullanıcının yetkisini almak için `fos:user:demote` komutunu kullanırız. 
    
    
    $ php app/console fos:user:demote testuser ROLE_ADMIN

Veya 
    
    
    $ php app/console fos:user:demote testuser --super

Bu komut kullanıcı adı ( `username`  ) ve rol (` role )` argümanlarını gerektirmektedir. Eğer argümanları girmezseniz interaktif olarak sizden isteyecektir. **Not:**

> Aynı anda `role` argümanı ve `\--super` argümanı kullanılamaz.

### 6) Kullanıcının Şifresini Değiştirmek ( Change a User's Password )

Uygulamamızdaki kullanıcının şifresini değiştirmek için `fos:user:change-password` komutunu kullanırız. 
    
    
    $ php app/console fos:user:change-password testuser newp@ssword

Bu komut kullanıcı adı ( `username`  ) ve şifre (` password )` argümanlarını gerektirmektedir. Eğer argümanları girmezseniz interaktif olarak sizden isteyecektir.