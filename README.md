# webMap
Work with google maps Api to create a web client that show information about transportation.
GITHUB: https://github.com/rafaelhrezende/webMap
working site: http://webmap-routemaker.000webhostapp.com/
# Goal
This project is used to learn about some technologies.
 * Current used: VueJS, Google Maps API, Some thing like BEM to organize CSS..

# How-to
It is possible to use just to view points or create routes. But the main goal here is to allow create route with the bus stops.
To do it you need to get the information of all stops on the Bus company site (At some point in future it will be automatic.).
 - Using BHTrans web page:
    - Access the BHTRans's site and find the 'Itinerário service' [lINK](http://servicosbhtrans.pbh.gov.br/bhtrans/e-servicos/e-servicos.asp?servico=S02&opcao=ITINER%C3%81RIO%20DE%20%C3%94NIBUS)
    - Find the bus-line/number and select it.
    - Chose the origin-destiny
    - Copy the table
    - Paste on webmap-route's capture textbox
    - Click on capture.
    - Then you are ready to create the route on map by clicking on Set Route.
# Web Map Page detail
  * To add a new address. Go to side menu and type the address into the text box. Then click add.
  * To request a route between the locations, click in 'Set Route'
  * To request a single mark at each location, click in 'Mark'
  * The 'Clear Map' button will try to remove itens from map.
