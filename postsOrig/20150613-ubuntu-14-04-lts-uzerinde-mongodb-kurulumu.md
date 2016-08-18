title: Ubuntu 14-04 LTS üzerinde MongoDB Kurulumu
link: http://cagataycali.com/ubuntu-14-04-lts-uzerinde-mongodb-kurulumu/
author: cagataycali
description: 
post_id: 517
created: 2015/06/13 11:47:44
created_gmt: 2015/06/13 08:47:44
comment_status: closed
post_name: ubuntu-14-04-lts-uzerinde-mongodb-kurulumu
status: publish
post_type: post

# Ubuntu 14-04 LTS üzerinde MongoDB Kurulumu

İlk olarak mongo db'yi yüklemek için terminalimizi açıyoruz. ( CTRL-ALT-T  Kombinasyonu ile açılabilir ) . MongoDB herkese açık anahtarını tanıtmak için terminale şu kodu yazıyoruz. 
    
    
    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10

Ardından terminale şu kodu girip gerekli yerde liste dosyasını oluşturmasını sağlıyoruz. 
    
    
    echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list

Veritabanındaki paketleri güncelliyoruz. 
    
    
    sudo apt-get update

Son mongoDB sürümünü çekmek için terminale şu kodları giriyoruz. 
    
    
    sudo apt-get install -y mongodb-org

  Kurulum tamamlandı,çalıştırmak durdurmak ve tekrardan başlatmak için aşağıdaki komutları kullanacağız. Başlatmak için ; 
    
    
    sudo service mongod start

Durdurmak için ; 
    
    
    sudo service mongod stop

Yeniden başlatmak için ; 
    
    
    sudo service mongod restart

Kabuk dizine çıkmak için ; 
    
    
    mongo

Servis durumunu öğrenmek için ; 
    
    
    sudo service mongod status

  Bütün servis durumu özetlerini görmek için ; 
    
    
    mongostat