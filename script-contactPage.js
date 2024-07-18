function map() {
    var mapProp = {
        center: new google.maps.LatLng(9.367961, 99.439242),
        zoom: 11,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}