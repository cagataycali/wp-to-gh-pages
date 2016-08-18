
Node JS 
    
    
    kill -9 $(ps aux | grep '\snode\s' | awk '{print $2}')

Meteor JS 
    
    
    #Server
    kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'` && git pull origin master && meteor
    
    #Coder
    kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'` && meteor run ios-device --mobile-server http://159.203.103.51:3000

Eğer kntrl + C kombinasyonu ile kill ederseniz yukarıdaki işlemleri yapamanıza gerek kalmayacaktır.