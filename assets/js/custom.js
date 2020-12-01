
$(document).ready(function(){

	$(".link1").on("click", function(){
		$("#1").slideDown();
		$("#2").slideUp();
		$("#3").slideUp();
	});
	$(".link2").on("click", function(){
		$("#2").slideDown();
		$("#3").slideUp();
		$("#1").slideUp();
	});

	$(".link3").on("click", function(){
		$("#3").slideDown();
		$("#2").slideUp();
		$("#1").slideUp();
	});

})