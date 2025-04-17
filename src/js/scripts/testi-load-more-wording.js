// change the working in the load more button

document.addEventListener('DOMContentLoaded', function () {
	const rpiElement = document.querySelector('.rpi .rpi-url');
	if (rpiElement) {
		rpiElement.innerHTML = 'Load more reviews';
	}
});