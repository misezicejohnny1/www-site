console.log("HEI buna heeeeei!")

function showPopup() {
	var popup = document.getElementById('popup')
	popup.classlist.add('show')
}

function hidePopup() {
	var popup = document.getElementById('popup')
	popup.classlist.remove('show')
}