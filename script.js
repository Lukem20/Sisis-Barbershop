// Carousel functionality
	let slideIndex = 1;
	showSlides(slideIndex);
	
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}
	
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}
	
	function showSlides(n) {
	  let slides = document.getElementsByClassName("mySlides");
	  if (n > slides.length) {slideIndex = 1}    
	  if (n < 1) {slideIndex = slides.length}
		
	  for (let i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";  
	  }
		
		
	  slides[slideIndex-1].style.display = "block";  
	}

// Appointment button hover functionality
function hover(element) {
  element.setAttribute('src', 'assets/appointments-button_white-03.svg');
}

function unhover(element) {
  element.setAttribute('src', 'assets/appointments-button_green-01.svg');
}