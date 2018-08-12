var myCenter=new google.maps.LatLng(36.361193, 127.353404);


function initialize() {
    var mapProp = {
      center:myCenter,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: myCenter,
        title:'Click to zoom'
    });
    
    marker.setMap(map);

    google.maps.event.addListener(marker,'click',function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
        });

  }
  google.maps.event.addDomListener(window, 'load', initialize);
