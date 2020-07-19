/*
*Practicing DOM events by Chidiebere Ekennia , Backend Developer at Genesys
*/
//VARIABLE and DOM DECLARATIONS:
$(document).ready(function() {
	console.log($('.t-block')[0])
	$('.t-block')[0].addEventListener('drag', handleTouch, false);
	function handleTouch () {
		alert('testing drag')
	}
});