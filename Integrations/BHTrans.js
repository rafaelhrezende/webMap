//** Extract BHTrans Informations ***//
function BHTransIntegration(busCode){
	var url = 'http://servicosbhtrans.pbh.gov.br/bhtrans/e-servicos/S02F02-itinerarioResultado.asp?linha='+ busCode;
// Read page to var
	var http = new XMLHttpRequest();
	http.open('GET', url) ;
	http.send();
	var htmlPage = http.response;

	//get all tables
	// Used: https://stackoverflow.com/questions/7864723/javascript-regexp-match-text-between-a-tags?rq=1
	var div = document.createElement('div');
	div.innerHTML = htmlPage;
	var tables = div.getElementsByTagName('table');
	//Get data from tables
	var headerLocations = []; //change to class\

	for (var tblIndex in tables){
		console.log('table ' + tblIndex);
		var tbl = tables[tblIndex]
		if (!(tbl.rows === undefined) && tbl.rows.length > 0)
		 if (tbl.rows[0].cells.length > 0 )
		  if (tbl.rows[0].cells[0].innerText == 'Logradouro'){
				var header = {};
				header.id = tblIndex++;

				header.locations = [];
				//for(var rowIndex in tables[tbl].rows){
				  for(var rowIndex in tbl.rows){
					console.log('row' + rowIndex);
					//var row = tables[tbl].rows[rowIndex];
					var row = tbl.rows[rowIndex];
					if (!(row === undefined) && !(row.cells === undefined) ) {
					var streetName = row.cells[0].innerText;
					var numbers = row.cells[1].innerText.replace(/ /g, '').split('|').slice(0,-1);
					for (numberIndex in numbers){
						header.locations.push(streetName + ', ' + numbers[numberIndex].replace(/\D/g,''));
					}
				 }
				}
				headerLocations.push(header);
			}
	}
}
