# webMap
Work with google maps Api to create a web client that show information about transportation.

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
  * Start Point and Route Points are locations (text address) that will be used on the map.
  * Captute: Will get the thata from input text and transform in a array of locations.
  * Set route: Will call google maps api to make a route on map with all bus's stop as waypoint.
  * Mark Point: Try to create a mak on map for each bus's stop.
