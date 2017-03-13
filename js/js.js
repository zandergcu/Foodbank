$(document).ready(function() {
});


function showNav() {            //Drop down or pull up the mobile navigation when called

    var heightValue = $('#navigation').css('height');
        if (heightValue == '0px'){      //If nav up
            $( '#navigation' ).css({ "height": "290px", "-webkit-transition": "height 400ms ease-in", "transition": "height 400ms ease-in" });                //Drop down
            $( '#pageHeader' ).css({ "max-height": "530px" });
        }
        else {          //If nav down
            $( '#navigation' ).css({ "height": "", "-webkit-transition": "height 400ms ease-out", "transition": "height 400ms ease-out" });    //Pull up
        }
};