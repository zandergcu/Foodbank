// Using Regex (from detectmobilebrowsers.com):

  window.mobilecheck = function() {         //Check if mobile or desktop
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);    
  return check;    
};


function showNav() {            //Drop down or pull up the mobile navigation when called

    var heightValue = $('#navigation').css('height');
        if (heightValue == '0px'){      //If nav up
            $( '#navigation' ).css({ "height": "290px", "-webkit-transition": "height 400ms ease-in", "transition": "height 400ms ease-in" });                //Drop down
        }
        else {          //If nav down
            $( '#navigation' ).css({ "height": "", "-webkit-transition": "height 400ms ease-out", "transition": "height 400ms ease-out" });    //Pull up
        }
};

$(document).ready(function() {
 //   var isMobile = window.mobilecheck();  //On page load check if mobile or desktop/ipad
 //   console.log(isMobile);
    
 //   if(isMobile === true){
 //       $("<link href='css/mobile.css' rel='stylesheet' type='text/css'/>").appendTo( 'head' );      
 //   } else {
 //       $("<link href='css/desktop.css' rel='stylesheet' type='text/css'/>").appendTo( 'head' )
 //   }               //Set stylesheet depending on result of check
    
    
    
    var widthh = $(window).width();
    
    console.log(widthh);
});


// JAVASCRIPT FOR IMAGE SLIDESHOW ///////////////////////////

var slideIndex = 1;
showDivs(slideIndex);   //starts on image(1)

function plusDivs(n) {
  showDivs(slideIndex += n);   //moves +1 or -1 on images... left or right
}

function currentDiv(n) {      //show image of circle selected e.g image(3)
  showDivs(slideIndex = n);
}


function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var circles = document.getElementsByClassName("circleNav");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
     
  for (i = 0; i < circles.length; i++) {
     circles[i].className = circles[i].className.replace(" bgWhite", "");
  }
    
  slides[slideIndex-1].style.display = "block";
    
  circles[slideIndex-1].className += " bgWhite";
}




  
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
            '<img align="Left" width="150px" src="img/office.png">'+
            '<p><b>Our office</b> can be found at Unit 9 Ladyloan place.' +
            ' Feel free to swing by with donations during our opening times. <b>This is under construction.</b></p>'+
            '<p>Website URL: <a href="#">'+
            'https://DrumFoodbank.com</a></p> '+
            '</div>'+
            '</div>';
    
    var phoenixInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Phoenix Hall Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<img align="Left" width="150px" src="img/phoenix.png">'+
            '<p>The <b>Phoenix Hall</b> can be found at Monymusk Place.' +
            ' Feel free to swing by with donations during their opening times. 0141 944 0110 <b>This is under construction.</b></p>'+
            '</div>'+
            '</div>';
    
    var bNmInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">B&M Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<img align="Left" width="150px" src="img/bnm.jpg">'+
            '<p><b>B&M</b> can be found at Drumchapel Shopping Centre.' +
            ' There are donation points near the checkouts where you can add donations to. Thanks. <b>This is under construction.</b> Open 0900-1800 Monday to Saturday and 1000-1700 Sundays. 0330 838 9286</p>'+
            '</div>'+
            '</div>';
    
    var sainsburysInfo = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Sainsburys Drumchapel</h1>'+
            '<div id="bodyContent">'+
            '<img align="Left" width="150px" src="img/sains.png">'+
            '<p><b>Sainsburys</b> can be found in the Great Western Retail Park. 10 Allerdyce Road.' +
            ' There are donation points near the checkouts where you can add donations to. Thanks. <b>This is under construction.</b> Open 0900-2200 Sunday to Friday and 0700-2200 Saturdays. 0141 944 2841</p>'+
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
             icon: "http://maps.google.com/mapfiles/markerA.png",
            animation: google.maps.Animation.DROP,
            title: 'Our Office',
          map: map
        });
    officeMarker.addListener('click', function() {
          officeInfoWindow.open(map, officeMarker);
        });
    
        var phoenixMarker = new google.maps.Marker({
          position: {lat: 55.9123925, lng: -4.3779575},
            icon: "http://maps.google.com/mapfiles/markerB.png",
        animation: google.maps.Animation.DROP,
        title: 'Sainsburys Drumchapel Retail Park',
          map: map
        });
    phoenixMarker.addListener('click', function() {
          phoenixInfoWindow.open(map, phoenixMarker);
        });
    
        var bNmMarker = new google.maps.Marker({
          position: {lat: 55.9098006, lng: -4.3730726},
            icon: "http://maps.google.com/mapfiles/markerC.png",
        animation: google.maps.Animation.DROP,
        title: 'B&M Drumchapel',
          map: map
        });
    bNmMarker.addListener('click', function() {
          bNmInfoWindow.open(map, bNmMarker);
        });

        var sainsburysMarker = new google.maps.Marker({
          position: {lat: 55.9043823, lng: -4.3748535},
            icon: "http://maps.google.com/mapfiles/markerD.png",
            animation: google.maps.Animation.DROP,
            title: 'Phoenix Hall',
          map: map
        });
    sainsburysMarker.addListener('click', function() {
          sainsburysInfoWindow.open(map, sainsburysMarker);
        });








    
    
    
    
    
    
    
      }






