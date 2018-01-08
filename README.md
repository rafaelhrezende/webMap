# webMap
Work with google maps Api to create a web client that show information about transportation.
GITHUB: https://github.com/rafaelhrezende/webMap
working site: http://webmap-routemaker.000webhostapp.com/
# Goal
This project is used to learn about some technologies.
 * Current used: VueJS, Google Maps API, Some thing like BEM to organize CSS..

# How-to
It is possible to use just to view points or create routes. But the main goal here is to allow create route with the bus stops.
To do it you need to get the information of all stops on BHTrans site (At some point in future it will be automatic.).
 - To get the information I use the source code of BH Trans site.
  'http://servicosbhtrans.pbh.gov.br/bhtrans/bhtmobile/app_itinerario5b.asp?linha=617&nome=ESTACAO%20PAMPULHA%20/%20PIRATININGA%20VIA%20RIO%20BRANCO&saindo=PIRATININGA&nomsubl=PRINCIPAL&tipo=RUA&logradouro=ZELIA&numero=227'
  At line 52 to 55 exists a comment with the information we need. We get the start point at parameter saddr and the route at daddr parameter.

# Web Map Page detail
  * To add a new address. Go to side menu and type the address into the text box. Then click add.
  * To request a route between the locations, click in 'Set Route'
  * To request a single mark at each location, click in 'Mark'
  * The 'Clear Map' button will try to remove itens from map.
  
