/* ================================================================ 
This copyright notice must be untouched at all times.
Copyright (c) 2009 Stu Nicholls - stunicholls.com - all rights reserved.
=================================================================== */
$(document).ready(function(){
current = 1;
button = 1;
images = 5;
width = 911;

$('#p1').animate({"left": "0px"}, 520, "swing");
$('#b1').css("backgroundPosition", "left bottom")
$('#b1 b').css("color","#fff");

$("#next").click(function() {
		button = current;
		current++
	if (current == (images+1) ) {current = 1}
animateLeft(current,button)
});

$("#previous").click(function() {
		button = current;
		current--
	if (current == 0 ) {current = images}
animateRight(current,button)
});

$("#buttons div").click(function() {
	button=current;
	clickButton = $(this).attr('id');
	current = parseInt(clickButton.slice(1));
	if (current > button) {animateLeft(current,button)}
	if (current < button) {animateRight(current,button)}
});

function animateLeft(current,button) {
	$('#p'+current).css("left",width +"px");
	$('#p'+current).animate({"left": "0px"}, 520, "swing");
	$('#p'+button).animate({"left": -width+"px"}, 520, "swing");
	setbutton()
}

function animateRight(current,button) {
	$('#p'+current).css("left",-width+"px");
	$('#p'+current).animate({"left": "0px"}, 520, "swing");
	$('#p'+button).animate({"left": width+"px"}, 520, "swing");
	setbutton()
}

function setbutton () {
	$('#b'+button).css("backgroundPosition", "left top")
	$('#b'+button+' b').css("color","#ffffff");
	$('#b'+current).css("backgroundPosition", "left bottom")
	$('#b'+current+' b').css("color","#ffffff");
}

});