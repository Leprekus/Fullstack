const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

// Usage: 
//addCSS("body:hover { transform: scale(1.1); }")

/*
 * The portion inside the magnifying circle is split up in three div's - top, mid, and bottom. 
 * The overflow for each div should be hidden. Each div is relatively positioned inside the zoom circle. 
 * On mouse move, change the absolute position of the zoom circle to the mouse coordinates. 
 * Their example also uses CSS3 for the scaling and adding some animation delays.
 */

const follow = (event) => {
	console.log('following');
	const { clientX, clientY } = event;
	const el = document.getElementById('horizontal_magnifier');
	el.animate({
		top: `${clientY}px`
	},{
		duration: 300,
		fill: 'forwards'
	});	
};
const init = () => {

	console.log('load em bitches');

	const horizontal_magnifier = document.createElement('div');
	horizontal_magnifier.setAttribute('id', 'horizontal_magnifier');
	horizontal_magnifier.style.cssText = `
		position:absolute;  z-index: 999; 
		width:100vw; height:33vh; 
		border-style: solid; border-radius: 7px; background: blue; 
	`;
	document.body.appendChild(horizontal_magnifier);
	document.body.addEventListener('mousemove', follow);
}
(function entry_point() {
	if(document.body) return init();
})();
