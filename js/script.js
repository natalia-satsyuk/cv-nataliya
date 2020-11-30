function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
$(document).ready(function(){
	$('.inspire-slider').slick({
		infinite: true,
		autoplay: true,
  		slidesToShow: 3,
		  slidesToScroll: 1,
		  
		  responsive: [
			{
			  breakpoint: 720,
			  settings: {
				arrows: false,
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				slidesToShow: 1
			  }
			}
		]
	});
});
function dropDown(){
	let jobList = document.querySelector('.dropdown');	
	let drop = document.querySelector('#dropdown-btn');	

	drop.onclick = function () { 
		jobList.classList.toggle('open');
	}	
}

dropDown()

// mobile-menu
let navButton = document.querySelector('.menu-icon');
let menu = document.querySelector('.navigation');	  

navButton.onclick = function () { 
	menu.classList.toggle('open');
}

const navlink = document.querySelectorAll(".menu__link");

navlink.forEach(elem => elem.addEventListener("click", smoothscroll));

function smoothscroll(event){
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: document.querySelector(targetId).offsetTop,
        behavior: "smooth"
    })
}
$(".education__show").click(function () {
    $(this).parent(".education__item").children(".education__sertificate").addClass("open");
    $("body").addClass("overlay");
});

  $(".close").click(function () {
    $(".education__sertificate").removeClass("open");
});

  $(".for-overlay").click(function () {
    $(".education__sertificate").removeClass("open");
});
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+1
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#mainNav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.menu__link').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}