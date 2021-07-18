const speed = $(".speed-value");
const arrow = $(".arrow");

let lat;
let lon;
let map;

navigator.geolocation.watchPosition(
  (data) => {
    lat = data.coords.latitude;
    lon = data.coords.longitude;
    speed.text(data.coords.speed);
    arrow.css("transform", `rotate(${data.coords.heading}deg)`);
    if (map) {
      map.center = new Microsoft.Maps.Location(lat, lon);
    }
  },
  (err) => {
    alert(
      `you need to consent
        ${err}`
    );
  }
);

function GetMap() {
  navigator.geolocation.getCurrentPosition((data) => {
    lat = data.coords.latitude;
    lon = data.coords.longitude;

    map = new Microsoft.Maps.Map("#myMap", {
      center: new Microsoft.Maps.Location(lat, lon), //Location center position
      mapTypeId: Microsoft.Maps.MapTypeId.load, //Type: [load, aerial,canvasDark,canvasLight,birdseye,grayscale,streetside]
      zoom: 18, //Zoom:1=zoomOut, 20=zoomUp[ 1~20 ]
    });
    //Get MAP Infomation
    let center = map.getCenter();

    //PushPin
    let pin = new Microsoft.Maps.Pushpin(center);
    pin.metadata = {
      color: "#ff0000",
    };
    map.entities.push(pin); //Add Pushpin to Map
  });
}
