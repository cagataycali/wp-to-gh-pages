
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