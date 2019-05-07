
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width= "0%";
}

// ===== Scroll to Top ====

// When the user scrolls down 20px from the top of the document, show the button
window.onScroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 100) {
        document.getElementById("returnToTop").style.display = "block";
    } else {
        document.getElementById("returnToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



//    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
//        $('#return-to-top').fadeIn(200);    // Fade in the arrow
//    } else {
//        $('#return-to-top').fadeOut(200);   // Else fade out the arrow

//    }
//});
//$('#return-to-top').click(function() {      // When arrow is clicked
//    $('body,html').animate({
//        scrollTop : 0                       // Scroll to top of body
//    }, 500);
//});

