class ApiWebScraping{

    getBHTrans(busNumber, locations){
        var url = "/api/bhtrans/webscraping.php?number="+busNumber;
        var data = this.httpRequest(url);

        var initialIndex = locations.length;
        if (data.lines.length > 0){
            data.lines[0].stops.forEach(element => {
                element.numbers.forEach(number => {
                    var location = new Location(initialIndex++, element.address+ ', ' + number+ ' - Belo Horizonte. MG');
                    location.showInput = false;
					locations.push(location)
                });
            });
        }
        return data;
    }
    httpRequest(url){
        var http = new XMLHttpRequest();
        http.open('GET', url, false);
        http.send();
        if (http.status == 200)
            return JSON.parse(http.responseText);
    }
}