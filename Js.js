console.log(8)
document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')

const iconMenu = document.querySelector('.menu_icon')
if (iconMenu) {
	const menuBody = document.querySelector('.menu_body')
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active')
		menuBody.classList.toggle('_active')
	})
}