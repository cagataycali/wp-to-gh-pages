title: Symfony2 - Birden fazla tablonun içeriğine erişmek
link: http://cagataycali.com/symfony2-birden-fazla-tablonun-icerigine-erismek/
author: cagataycali
description: 
post_id: 370
created: 2015/03/29 01:04:07
created_gmt: 2015/03/28 23:04:07
comment_status: open
post_name: symfony2-birden-fazla-tablonun-icerigine-erismek
status: publish
post_type: post

# Symfony2 - Birden fazla tablonun içeriğine erişmek

Symfony2 projemizde kullanıcı güncelleme sayfamızda insanlara memleket,cinsiyet gibi öznitelikler seçtirebilmek için birden çok tablodan verileri çekmeliyiz.Ekrana basmak için gerekli olanlar; 
    
    
    ..#
    use OkulBundleEntityCinsiyet;
    use OkulBundleEntityMemleket;
    use OkulBundleEntityBrans;
    use OkulBundleEntityUser;
    use SymfonyComponentHttpFoundationResponse;
    use SymfonyComponentHttpFoundationRequest;
    
    public function indexAction()
        {
    
            $em = $this->getDoctrine()->getManager();
    
            $kullanicilar = $this->getDoctrine()->getRepository('OkulBundle:User')->findAll();
            $brans = $em->getRepository('OkulBundle:Brans')->findAll();
            $memleket = $em->getRepository('OkulBundle:Memleket')->findAll();
            $cinsiyet = $em->getRepository('OkulBundle:Cinsiyet')->findAll();
    
    
            return $this->render('OkulBundle:Default:index.html.twig' , array('kullanicilar' =>$kullanicilar,'memleket'=>$memleket,'cinsiyet'=>$cinsiyet,'brans'=>$brans));
        }
    }

  Twig; 
    
    
                        {% for k in kullanicilar %}
                            {{ k.id }} {{ k.kullaniciAdi }}
                        {% endfor %}
    
                        {% for c in cinsiyet %}
                            {{ c.id }} {{ c.cinsiyet }}
                        {% endfor %}
                   
                        {% for m in memleket %}
                            {{ m.id }} {{ m.memleket }}
                        {% endfor %}