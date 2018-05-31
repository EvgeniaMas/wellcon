$(document).ready(function(){

	//Hide (Collapse) the toggle containers on load
	$(".togglebox").hide(); 

	//Slide up and down on hover
	$("h2").click(function(){
		$(this).next(".togglebox").slideToggle("slow");
	});

});