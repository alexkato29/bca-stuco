window.onload = function() { 

const PRESELECTOR = 6;

corres = {
    1: 0,
    2: 85,
    3: 176.3,
    4: 267.7,
    5: 358.3
};

corres2 = {
	0: 0,
	1: 91,
	2: 182.3,
	3: 273.3,
	4: 364.3
}

$(window).scroll(function(event){

	var st = $(this).scrollTop();
	console.log(st);
	console.log(pxTOvh(st));
	if (pxTOvh(st) >= corres[1] && pxTOvh(st) < corres[2]) {
		$("li").removeClass('selected');
	} else if (pxTOvh(st) >= corres[2] && pxTOvh(st) < corres[3]) {
		$("li").removeClass('selected');
		$("#1").addClass('selected');
	} else if (pxTOvh(st) >= corres[3] && pxTOvh(st) < corres[4]) {
		$("li").removeClass('selected');
		$("#2").addClass('selected');
	} else if (pxTOvh(st) >= corres[4] && pxTOvh(st) < corres[5]) {
		$("li").removeClass('selected');
		$("#3").addClass('selected');
	} else if (pxTOvh(st) >= corres[5]) {
		$("li").removeClass('selected');
		$("#4").addClass('selected');
	} 

});




$("li").click(function(event) {

	var px = vhTOpx(corres2[parseInt($(this).attr('id'))]);
	$('html, body').animate({ scrollTop: px }, 1000);

});




$("#torch").click(function(event) {

	$("li").removeClass('selected');
	$('html, body').animate({ scrollTop: 0 }, 1000);

});




$('.arrow-down').click(function(event) {

	$("li").removeClass('selected');
	$('html, body').animate({ scrollTop: vhTOpx(corres[2] + PRESELECTOR) }, 1000);

});




function vhTOpx(value) {

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (y*value)/100;
  return result;

}




function pxTOvh(value) {

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth,
    y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var result = (100*value)/y;
  return result;

}
}