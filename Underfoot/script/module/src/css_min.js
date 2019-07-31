function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return Math.floor((v * h) / 100);
}

function vw(v) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  return Math.floor((v * w) / 100);
}

function vmin(v) {
  return Math.min(vh(v), vw(v));
}

function vmax(v) {
  return Math.max(vh(v), vw(v));
}



document.querySelector(".caption").style.setProperty('width',`${vmin(60)}px`);
document.querySelector(".caption").style.setProperty('margin-top',`${vh(50) - vmin(60)/2}px`);
document.querySelector(".caption").style.setProperty('margin-left',`${vw(50) - vmin(60/2)}px`);
document.querySelector("#finding-text").style.setProperty('font-size',`${vmin(6.5)}px`);

window.onresize = function(){
	document.querySelector(".caption").style.setProperty('width',`${vmin(60)}px`);
	document.querySelector(".caption").style.setProperty('margin-top',`${vh(50) - vmin(60)/2}px`);
	document.querySelector(".caption").style.setProperty('margin-left',`${vw(50) - vmin(60/2)}px`);
	document.querySelector("#finding-text").style.setProperty('font-size',`${vmin(6.5)}px`);
}

