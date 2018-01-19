class Location{
  constructor(id, location){
    this.id = id;
    this.location=location;
    this.status='W';
    this.showInput=false;
    this.color = "";
    this.active = true;
  }

  getMarkColor(){
    return this.color.replace('#','') + '|'+ this.invertColor(this.color).replace('#','');
  }
  invertColor(hexTripletColor) {
    var color = hexTripletColor;
    color = color.substring(1);           // remove #
    color = parseInt(color, 16);          // convert to integer
    color = 0xFFFFFF ^ color;             // invert three bytes
    color = color.toString(16);           // convert to hex
    color = ("000000" + color).slice(-6); // pad with leading zeros
    color = "#" + color;                  // prepend #
    return color;
}
}
