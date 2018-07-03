var sliderControl = null;
var myMap = L.map('map').setView([32.8242404,-117.3891702], 10);

// Adding tile layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		accessToken: 'pk.eyJ1IjoiZ2FyeWZyYW5raGF1c2VyIiwiYSI6ImNqaWR3MmtlNzA3MDczcHBuMWhqZWR1dXIifQ.bd98n5rTTf3obi7MR7IRlg',
		id: 'mapbox.streets',
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	})
	.addTo(myMap);

//Fetch some data from a GeoJSON file
$.getJSON("coffeeShops.js", function(json) { //was server/data/coffee.. for flask, coffeeShops.js is put in static dir
    var testlayer = L.geoJson(json),
        sliderControl = L.control.sliderControl({
            position: "bottomleft",
            layer: testlayer
        });

    //Make sure to add the slider to the map ;-)
    myMap.addControl(sliderControl);
    //And initialize the slider
    sliderControl.startSlider();
});

// Link to GeoJSON
var sliderControl1 = null;
var geojson;

// Grabbing data with d3...
d3.json("choropleth_RE_Data.js", function(data) {

  // Creating a new choropleth layer
  geojson = L.choropleth(data, {
    // Which property in the features to use
    valueProperty: "med_val",
    // Color scale
    scale: ["#ffffb2", "#b10026"],
    // Number of breaks in step range
    steps: 10,
    // q for quantile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },
    // Binding a pop-up to each layer
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.region + "<br>Median Home Value:<br>" +
        "$" + feature.properties.med_val);
    }
  }).addTo(myMap);

  // Setting up the legend
  var legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend");
    var limits = geojson.options.limits;
    var colors = geojson.options.colors;
    var labels = [];

    // Add min & max
    var legendInfo = "<h1>Median Home Value</h1>" +
      "<div class=\"labels\">" +
        "<div class=\"min\">" + limits[0] + "</div>" +
        "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
      "</div>";

    div.innerHTML = legendInfo;

    limits.forEach(function(limit, index) {
      labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
    });

    div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    return div;
  };

  // Adding legend to the map
  legend.addTo(myMap);

});

