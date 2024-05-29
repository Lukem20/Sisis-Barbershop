let slideIndex = 1;

const showSlides = (n) => {
	let allCarouselItems = document.getElementsByClassName("carousel-item");

	// From last slide, go to first slide
	if (n > allCarouselItems.length) {
		slideIndex = 1
	}    

	// From first slide, go to last slide
	if (n < 1) {
		slideIndex = allCarouselItems.length
	}

	// Hide all other slides
	for (let i = 0; i < allCarouselItems.length; i++) {
		allCarouselItems[i].style.display = "none";  
	}
	
	// Display slide at current index
	allCarouselItems[slideIndex-1].style.display = "block";  
}
showSlides(slideIndex);

const changeSlideIndex = (n) => {
	showSlides(slideIndex += n);
}

// Appointment button hover functionality
const hover = (button) => {
	button.setAttribute('src', 'assets/appointments-button_white-03.svg');
}

const unhover = (button) => {
	button.setAttribute('src', 'assets/appointments-button_green-01.svg');
}