$(document).ready(function(e) {
	$("div#topCont").slideUp(200).delay(200).slideDown();
    $("div#midCont").hide(200).delay(300).show(1000); 
	$("footer").slideUp(200).delay(400).slideDown();
	
	$("button").click(function() {
		$("div#topCont").hide();
		$("div#midCont").hide();
		
	}); 
});
