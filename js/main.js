
let open = document.getElementById('open');
let close = document.getElementById('close');
let modal = document.getElementById('modal');

open.addEventListener('click', function (event) {
	event.preventDefault();
	modal.style.display = 'block';
});

close.addEventListener('click', function (event) {
	event.preventDefault();
	modal.style.display = 'none';
});
