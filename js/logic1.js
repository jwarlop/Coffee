var sliderControl = null;

var myMap = L.map('map').setView([32.8242404,-117.3891702], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Fetch some data from a GeoJSON file
$.getJSON("data/SD.js", function(json) {
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