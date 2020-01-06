var mymap=L.map("map", {
    center:[38,-118.2437],
    zoom:4
});
API_KEY="pk.eyJ1Ijoib2xnYXJvbWFub3ZhIiwiYSI6ImNrM3FrM3U3YjAyaTYzam1qbW1vYzRuNmUifQ._srodwBBR_FjK7Dw4ELUdw"
var layer = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY
}).addTo(mymap);

function markersize(x) {
    return x*20000;
}

function PointColor(x) {
    if (x<1) {
        return "greenyellow"
    } 
    else if (x<2) {
        return "yellow"
    }
    else if (x<3) {
        return "SandyBrown"
    }
    else if (x<4) {
        return "Orange"
    }
    else if (x<5) {
        return "OrangeRed"
    }
    else  {
        return "DarkRed"
    }
}

var url="https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(url, function(data) { 
  //createDots(data.features);
  console.log(data.features[100].properties.mag*10);
  for (var i=0; i<data.features.length; i++) {
      var place=data.features[i]
      color=PointColor(place.properties.mag)

      L.circle([place.geometry.coordinates[1],place.geometry.coordinates[0]], {
          color: "black",
          weight: 0.3,
          fillColor: color,
          fillOpacity: 0.75,
          radius: markersize(place.properties.mag),
      }).bindPopup("<h3>"+data.features[i].properties.place+"</h3>"+"<hr><p>"+"magnitude: "+data.features[i].properties.mag+"<br>"+"magnitudeType: "+data.features[i].properties.magType+"<br>"+"gap: "+data.features[i].properties.gap+"</p></hr>").addTo(mymap)
  }
});
var limits = [1,2,3,4,5,6];
var colors = ['greenyellow',"yellow","SandyBrown","Orange","OrangeRed","DarkRed"];

var legend = L.control({ position: 'bottomright'});
legend.onAdd = function(map) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades=[0,1,2,3,4,5];

  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
        '<i style="background:' + colors[i] +'"></i> ' +
         grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1]  + '<br>' : '+');
  }
  return div;
};
legend.addTo(mymap);
