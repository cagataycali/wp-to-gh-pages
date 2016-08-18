title: Terminal'den tek satır komut ile nodejs - meteorjs işlemlerini öldürmek
link: http://cagataycali.com/terminalden-tek-satir-komut-ile-nodejs-meteorjs-islemlerini-oldurmek/
author: cagataycali
description: 
post_id: 617
created: 2016/05/18 18:23:59
created_gmt: 2016/05/18 18:23:59
comment_status: closed
post_name: terminalden-tek-satir-komut-ile-nodejs-meteorjs-islemlerini-oldurmek
status: publish
post_type: post

# Terminal'den tek satır komut ile nodejs - meteorjs işlemlerini öldürmek

Node JS 
    
    
    kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')

Meteor JS 
    
    
    #Server
    kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'` && git pull origin master && meteor
    
    #Coder
    kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'` && meteor run ios-device --mobile-server http://159.203.103.51:3000

Eğer kntrl + C kombinasyonu ile kill ederseniz yukarıdaki işlemleri yapamanıza gerek kalmayacaktır.