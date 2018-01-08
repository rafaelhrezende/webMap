function loadBusInfo(bus){
  vueController.showCapture = !vueController.showCapture;
  if (bus == 616){
    vueController.startPoint = bus616.startPoint;
    vueController.routePoints = bus616.routePoints;
  }
  else if (bus == 617){
    vueController.startPoint = bus617.startPoint;
    vueController.routePoints = bus617.routePoints;
  }
}

/************************* Cons Extracted from BHTrans ***************/
var bus616 = {
    startPoint: 'RUA+CLEIDE+APARECIDA,+285,+Belo+Horizonte+-+Minas+Gerais',
    routePoints:'RUA+CARMELITA+MOREIRA+REIS+320+Belo+Horizonte+-+Minas+Gerais+to:RUA+PEDRO+MOREIRA+DO+NASCIMENTO+93+Belo+Horizonte+-+Minas+Gerais+to:RUA+DOIS+573+Belo+Horizonte+-+Minas+Gerais+to:RUA+VISCONDE+DO+RIO+BRANCO+417+Belo+Horizonte+-+Minas+Gerais+to:RUA+RADIALISTA+ORLANDO+CAVALCANTE+453+Belo+Horizonte+-+Minas+Gerais+to:RUA+RADIALISTA+JOSUE+POLICARPO+48+Belo+Horizonte+-+Minas+Gerais+to:RUA+RADIALISTA+MACLEREVSKI+183+Belo+Horizonte+-+Minas+Gerais+to:RUA+RADIALISTA+CARLOS+LOTT+167+Belo+Horizonte+-+Minas+Gerais+to:RUA+RADIALISTA+ORLANDO+ARCANJO+127+Belo+Horizonte+-+Minas+Gerais+to:RUA+MARIA+GERTRUDES+SANTOS+357+Belo+Horizonte+-+Minas+Gerais+to:RUA+ANTONIO+JOSE+DOS+SANTOS+565+Belo+Horizonte+-+Minas+Gerais+to:RUA+ANTONIO+FERREIRA+DE+BARROS+12+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOAO+ZACARIAS+DE+MIRANDA+361+Belo+Horizonte+-+Minas+Gerais+to:RUA+FRANCISCO+BRETAS+BHERING+120+Belo+Horizonte+-+Minas+Gerais+to:AVE+PORTUGAL+100+Belo+Horizonte+-+Minas+Gerais+to:AVE+PORTUGAL+1995+Belo+Horizonte+-+Minas+Gerais+to:AVE+PORTUGAL+3700+Belo+Horizonte+-+Minas+Gerais+to:AVE+PORTUGAL+2557+Belo+Horizonte+-+Minas+Gerais+to:AVE+PORTUGAL+681+Belo+Horizonte+-+Minas+Gerais+to:RUA+FRANCISCO+BRETAS+BHERING+309+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOAO+ZACARIAS+DE+MIRANDA+100+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOSE+JOAQUIM+DOS+SANTOS+140+Belo+Horizonte+-+Minas+Gerais+to:RUA+ANTONIO+JOSE+DOS+SANTOS+300+Belo+Horizonte+-+Minas+Gerais+to:+CLEIDE+APARECIDA+285+Belo+Horizonte+-+Minas+Gerais'
  };
  var bus617 = {
    startPoint:'RUA+ZELIA,+227,+Belo+Horizonte+-+Minas+Gerais',
    routePoints:'RUA+CACAPAVA+375+Belo+Horizonte+-+Minas+Gerais+to:RUA+ITANHAEM+105+Belo+Horizonte+-+Minas+Gerais+to:RUA+ARACATUBA+35+Belo+Horizonte+-+Minas+Gerais+to:RUA+ALTINOPOLIS+795+Belo+Horizonte+-+Minas+Gerais+to:PCA+SAO+CAETANO+DO+SUL+21+Belo+Horizonte+-+Minas+Gerais+to:RUA+LIMEIRA+200+Belo+Horizonte+-+Minas+Gerais+to:RUA+PEDRA+SABAO+345+Belo+Horizonte+-+Minas+Gerais+to:RUA+PEDRA+DE+ANIL+40+Belo+Horizonte+-+Minas+Gerais+to:AVE+BERNARDA+SILVESTRE+597+Belo+Horizonte+-+Minas+Gerais+to:RUA+AUGUSTO+DOS+ANJOS+1333+Belo+Horizonte+-+Minas+Gerais+to:RUA+CARLOS+ALBERTO+227+Belo+Horizonte+-+Minas+Gerais+to:RUA+MARCIO+LIMA+PAIXAO+251+Belo+Horizonte+-+Minas+Gerais+to:RUA+DESEMBARGADOR+ONOFRE+MENDES+JUNIOR+2+Belo+Horizonte+-+Minas+Gerais+to:RUA+ERICO+VERISSIMO+1007+Belo+Horizonte+-+Minas+Gerais+to:RUA+ENGENHEIRO+JOSE+GUIMARAES+50+Belo+Horizonte+-+Minas+Gerais+to:RUA+DOMINGOS+GARCIA+261+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOAO+SAMAHA+1315+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOAO+SAMAHA+275+Belo+Horizonte+-+Minas+Gerais+to:RUA+SAO+PEDRO+DO+AVAI+189+Belo+Horizonte+-+Minas+Gerais+to:AVE+DOM+PEDRO+I+1355+Belo+Horizonte+-+Minas+Gerais+to:AVE+DOM+PEDRO+I+1220+Belo+Horizonte+-+Minas+Gerais+to:RUA+JOAO+SAMAHA+492+Belo+Horizonte+-+Minas+Gerais+to:RUA+DOMINGOS+GARCIA+66+Belo+Horizonte+-+Minas+Gerais+to:+ZELIA+227+Belo+Horizonte+-+Minas+Gerais'
  }
var bus = {
  startPoint:'',
  routePoints: ''
}
