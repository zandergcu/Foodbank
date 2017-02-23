function initMap() {
        var Drum = {lat: 55.9111339, lng: -4.3707818};
        var map = new google.maps.Map(document.getElementById('googleMaps'), {
          zoom: 13,
          center: Drum
        });
    
    
    
    var officeInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Drumchapel Foodbank Office</h1>'+
            '<div id="bodyContent">'+
            '<img align="Left" width="150px" src="img/office.PNG">'+
            '<p><br /><b>Our office</b> can be found at Unit 9 Ladyloan place. <br />' +
            '<br />Feel free to swing by with donations during our opening times.<br />(Typically Mon-Fri 0900-1500). <br /></p>'+
            '<p><br /><b>Telephone: </b>'+
            '0141 944 3335</p> '+
            '</div>'+
            '</div>';

    
        var phoenixInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Phoenix Hall Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<br /><img align="Left" width="150px" src="img/phoenix.PNG">'+
            '<p>The <b>Phoenix Hall</b> can be found at Monymusk Place.<br />' +
            '<br />Feel free to swing by with donations during their opening times.<br />(Typically Mon-Fri 0900-1500). <br /></p>'+
            '<p><br /><b>Telephone: </b>'+
            '0141 944 0110</p> '+
            '</div>'+
            '</div>';
    
    var bNmInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">B&M Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<br /><img class="mapImg" align="Left" width="150px" src="img/bnm.jpg">'+
            '<p><b>B&M</b> can be found at Drumchapel Shopping Centre.</p>' +
            '<br />' +
            '<p>There are donation points for the foodbank near the checkouts. Thanks!</p>' +
            '<br />' +
            '<p"><b>Opening Times:</b><br />' +
            'Mon-Sat 0900-1800<br />' +
            'Sunday 1000-1700</p>' +
            '</div>'+
            '</div>';
    
        var sainsburysInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sainsburys Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<br /><img align="Left" width="150px" src="img/sains.PNG">'+
            '<div class="info-box"><p><b>Sainsburys</b> can be found in the Great Western Retail Park. 10 Allerdyce Road.<br />' +
            '<br />There are donation points for the foodbank near the main doors that you can catch on your way out of the store.<br />' + '<br />' +
            '<p"><b>Opening Times:</b><br />' +
            'Sun-Friday 0900-2200<br />' +
            'Saturday 0700-2200</p>' +
            '</div>'+
            '</div>';

    
    var officeInfoWindow = new google.maps.InfoWindow({
          content: officeInfo,
          maxWidth: 500
        });
    
    var phoenixInfoWindow = new google.maps.InfoWindow({
          content: phoenixInfo,
          maxWidth: 500
        });
    
    var bNmInfoWindow = new google.maps.InfoWindow({
          content: bNmInfo,
          maxWidth: 500
        });
    
    var sainsburysInfoWindow = new google.maps.InfoWindow({
          content: sainsburysInfo,
          maxWidth: 500
        });
    
    
    
    
    
    
    
    
        var officeMarker = new google.maps.Marker({
          position: {lat: 55.9172417, lng: -4.3794941},
             icon: "https://maps.google.com/mapfiles/markerA.png",
            animation: google.maps.Animation.DROP,
            title: 'Our Office',
          map: map
        });
    officeMarker.addListener('click', function() {
          officeInfoWindow.open(map, officeMarker);
        });
    
        var phoenixMarker = new google.maps.Marker({
          position: {lat: 55.9123925, lng: -4.3779575},
            icon: "https://maps.google.com/mapfiles/markerB.png",
        animation: google.maps.Animation.DROP,
        title: 'Sainsburys Drumchapel Retail Park',
          map: map
        });
    phoenixMarker.addListener('click', function() {
          phoenixInfoWindow.open(map, phoenixMarker);
        });
    
        var bNmMarker = new google.maps.Marker({
          position: {lat: 55.9098006, lng: -4.3730726},
            icon: "https://maps.google.com/mapfiles/markerC.png",
        animation: google.maps.Animation.DROP,
        title: 'B&M Drumchapel',
          map: map
        });
    bNmMarker.addListener('click', function() {
          bNmInfoWindow.open(map, bNmMarker);
        });

        var sainsburysMarker = new google.maps.Marker({
          position: {lat: 55.9043823, lng: -4.3748535},
            icon: "https://maps.google.com/mapfiles/markerD.png",
            animation: google.maps.Animation.DROP,
            title: 'Phoenix Hall',
          map: map
        });
    sainsburysMarker.addListener('click', function() {
          sainsburysInfoWindow.open(map, sainsburysMarker);
        });
}