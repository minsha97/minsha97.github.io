var slideIndex = 1;
showSlides(slideIndex);

function setIndexFromSideButton(n){
  slideIndex = slideIndex + n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (slideIndex > slides.length) {slideIndex = 1}    
  if (slideIndex < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var space1 = document.getElementById("arrowContainer1");
    
var space2 = document.getElementById("space2");
space2.style.height = window.innerHeight + "px";

  function pageScrollDown() {
    window.scrollBy(0,window.innerHeight);
  }
		function pageScrollDown2() {
		    window.scrollBy(0,window.innerHeight*2);
		}

		function pageScrollUp() {
		    document.documentElement.scrollTop = 0;
		}

		document.addEventListener('scroll', function (e) {
			var pumpSvgContainer = document.getElementById("svg_container2");
			var scrolledTop  = window.pageYOffset + window.innerHeight;
			var pumpSvgContainerOffset = window.innerHeight + pumpSvgContainer.offsetTop;
			var isPumpVisible = scrolledTop > pumpSvgContainerOffset;
			if (isPumpVisible) {
				document.getElementById('pump').classList.add('svg_drawing_animation');
			}
		});