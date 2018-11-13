function geoFindMe() {
    var output = document.getElementById("out");

    if (!navigator.geolocation) {
        output.innerHTML = "<p>Geolocation failed</p>";
        return;
    }

    function success(position) {
        var latitude = position.coords.latitude;
        var longtitude = position.coords.longitude;

        output.innerHTML = "<p>Latitude is " + latitude + " <br>Longtitude is " + longtitude + "</p>";

        console.log("<p>Latitude is " + latitude + " <br>Longtitude is " + longtitude + "</p>");

        var img = new Image();
        img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longtitude + "&zoom=13&size=300x300&sensor=false&key=";

        output.appendChild(img);
    }

    function error() {
        output.innerHTML = "Unable to retrieve your location";

        console.log("Unable to retrieve your location");
    }

    output.innerHTML = "<p>Locating...</p>";

    navigator.geolocation.getCurrentPosition(success, error);
}

console.log(geoFindMe());