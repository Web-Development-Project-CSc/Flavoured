var fadeElements = document.getElementsByClassName('scrollfade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/4;
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/2);

		if (rect.top <= fadeInPoint) {
			element.classList.add('--visible');
			element.classList.add('--animate');
			element.classList.remove('--hidden');
		} else {
			element.classList.remove('--visible');
			element.classList.add('--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('--visible');
			element.classList.add('--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});