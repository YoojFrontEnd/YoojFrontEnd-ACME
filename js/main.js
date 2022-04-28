let open = document.getElementById('open')
let close = document.getElementById('close')
let modal = document.getElementById('modal')

close.addEventListener('click', function (event) {
	event.preventDefault()
	modal.style.display = 'none'
})

open.addEventListener('click', function (event) {
	event.preventDefault()
	modal.style.display = 'flex'
	modal.style.flexDirection = 'column'
})
