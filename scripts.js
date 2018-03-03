function cylinderVol(){
	var radius, height, volume;
	radius=$("#txtRadius").val();
	height=$("#txtHeight").val();
	if (radius<0 || isNaN(radius) || radius==="" || height<0 || isNaN(height) || height===""){
		$("#output").removeClass("highlightedGood");
		$("#output").html("One or more of the values you submitted is invalid. Please try again.").addClass("highlightedBad");
	}

	else{
		radius=parseFloat(radius);
		height=parseFloat(height);
		volume=Math.PI*Math.pow(radius,2)*height;
		volume = volume.toFixed(4);
		$("#output").removeClass("highlightedBad");
		$("#output").html("The volume of the cylinder is " + volume + " inches.").addClass("highlightedGood");
	}
}

$(document).ready(function(e) {
	$("#btnCalcVol").click(function(){
		cylinderVol();
	});

	// $("#txtRadius,#txtHeight").focus(function(){
	// 	$(this).addClass("focus");

	// });

	// $("#txtRadius,#txtHeight").blur(function(){
	// 	$(this).removeClass("focus");

	// });

	$("#btnReset").click(function(){
		$("#output").empty();
		$("#txtRadius,#txtHeight").val('');
	});
});