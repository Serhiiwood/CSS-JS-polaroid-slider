window.onload = function() {

	// GALLERY 1

	const images = document.querySelectorAll('.galleryFirst .gallery__photos img');

	const slider = new Slider(images);

	document.querySelector('.galleryFirst .gallery__button .prev').onclick = () => {
		slider.prev()
	}

	document.querySelector('.galleryFirst .gallery__button .next').onclick = () => {
		slider.next()
	}

	setInterval(() => {
		slider.next();
	}, 6000);

	// GALLERY 2

	const imagesTwo = document.querySelectorAll('.gallerySecond .gallery__photos img');

	const sliderTwo = new Slider(imagesTwo);

	document.querySelector('.gallerySecond .gallery__button .prev').onclick = () => {
		sliderTwo.prev()
	}

	document.querySelector('.gallerySecond .gallery__button .next').onclick = () => {
		sliderTwo.next()
	}

	setInterval(() => {
		sliderTwo.next();
	}, 4000);
}


function Slider(images) {
	this.images = images;
	let i = 0;

	this.prev = () => {
		this.images[i].classList.remove('showed');
		i--;

		if(i < 0) {
			i = this.images.length -1;
		}

		this.images[i].classList.add('showed');
	}

	this.next = () => {
		this.images[i].classList.remove('showed');
		i++;

		if(i == this.images.length) {
			i = 0;
		}

		this.images[i].classList.add('showed');
	}
}