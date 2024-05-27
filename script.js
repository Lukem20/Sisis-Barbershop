// Carousel functionality
let slideIndex = 1;
showSlides(slideIndex);

const changeSlideIndex = (n) => {
	showSlides(slideIndex += n);
}

function showSlides(n) {
	// Get all elements with class carousel-item
	let slides = document.getElementsByClassName("carousel-item");
	// If index out of max range, go to first slide
	if (n > slides.length) {
		slideIndex = 1
	}    
	// If index less than 1, go to last slide
	if (n < 1) {
		slideIndex = slides.length
	}
	// Hide all other slides
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	// Show only the current slide
	slides[slideIndex-1].style.display = "block";  
}

// Appointment button hover functionality
const hover = (button) => {
	button.setAttribute('src', 'assets/appointments-button_white-03.svg');
}

const unhover = (button) => {
	button.setAttribute('src', 'assets/appointments-button_green-01.svg');
}