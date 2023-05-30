// vars
var myDraggable = [];
var d, ctx;

var o = {};
var oNames = {
	id: 'adArea icon dragArea canvas',
}

function init() {
	setAd();
	initAnim();

	initDrag()
	dragLoop();
	mouseEvents();
	// activateTap(true);
}

function setAd() {
	d = {
		powerEased: 0,
		power: 0,
		powerInc: 0.05,
		drag: {
			loop: true,
			active: false,
			x: 0,
			x_del: 0,
			x0: 0,
			ft: false,
		},
		seenSlide: [],
		changed: false,
		mouseOver: false,
		touch: false,
		frameSeen: 1,
	}

	//generate ratio
	DEF.slide.list.forEach(el => {
		DEF.slide.w = el.width;
		DEF.slide.h = el.height;

		//set seen slide
		d.seenSlide.push({
			"slide" : false,
		});
	});

	DEF.ratioScale = Math.min((DEF.w / DEF.slide.w), (DEF.h / DEF.slide.h));

	o.adArea.style.width = DEF.w + 'px';
	o.adArea.style.height = DEF.h + 'px';
	o.dragArea.style.width = DEF.w + 'px';
	o.dragArea.style.height = DEF.h + 'px';

	o.canvas.style.width = DEF.slide.w + 'px';
	o.canvas.style.height = DEF.slide.h + 'px';
	o.canvas.width = DEF.slide.w;
	o.canvas.height = DEF.slide.h;
	ctx = o.canvas.getContext("2d");

	// gsap.set(o.canvas, {scale: 0.5, transformOrigin: "0% 0%"})
	//DEF.slide.scale = DEF.slide.w / DEF.w;

	gsap.set(o.canvas, {scale: DEF.ratioScale, transformOrigin: "0% 0%"})
	DEF.slide.scale = DEF.slide.w / DEF.w;

}

function initAnim() {

	gsap.set(o.icon, {
		scale: 0.35,
		left: 35,
		top: 95,
		transformOrigin: "50% 50%"
	})

	var dur = 1.0;
	var dist = 25;

	d.icon_opac = gsap.from(o.icon, dur, {
		opacity: 0
	})

	d.icon_tl = gsap.timeline({
		repeat: -1
	});
	d.icon_tl.to(o.icon, dur / 2, {
		x: dist,
		ease: Power1.easeOut
	})
	d.icon_tl.to(o.icon, dur, {
		x: -dist,
		ease: Power1.easeInOut
	})
	d.icon_tl.to(o.icon, dur / 2, {
		x: 0,
		ease: Power1.easeIn
	})

	// console.log( DEF )

	// ctx.drawImage(DEF.list[0], 0, 0, DEF.w, DEF.h)

}


function draw() {

	ctx.clearRect(0, 0, DEF.slide.w, DEF.slide.h)

	// d.dragged
	// d.dragged_proc
	// d.dragged_side

	for (var i = 0; i < DEF.rects.amm; i++) {
		var rlength = (DEF.rects.mode == "ver") ? DEF.slide.w / DEF.rects.amm : DEF.slide.h / DEF.rects.amm;

		var sx = (DEF.rects.mode == "ver") ? rlength * i : 0;
		var sy = (DEF.rects.mode == "ver") ? 0 : rlength * i;

		var w = (DEF.rects.mode == "ver") ? rlength : DEF.slide.w;
		var h = (DEF.rects.mode == "ver") ? DEF.slide.h : rlength;
		// console.log( rlength )

		// d.rects.s;
		// var s = d.rects.infl;
		var dist = Math.abs(d.drag.x_del - (sx + w / 2));
		var distProc = dist / DEF.slide.w;
		var proc = distProc / DEF.rects.infl / d.powerEased;
		if (proc > 1) proc = 1;
		// console.log( proc );

		var alpha = Power2.easeOut(proc);
		ctx.globalAlpha = 1;

		var sAdd = Power1.easeInOut(1 - proc)
		var sProc = 1 - (1 - DEF.rects.s) * sAdd;
		// console.log(sProc)
		// var s = Power2.easeIn( sProc );
		var s = sProc;
		var ww = w * s;
		var hh = h * s;
		var dx = sx + (1 - s) * w / 2;
		var dy = sy + (1 - s) * h / 2;

		// console.log(s)

		ctx.drawImage(DEF.slide.list[DEF.slide.cur], sx, sy, w, h, dx, dy, w * 1.05, hh)

		var swipe_dir = false;
		if (!swipe_dir) {
			// var a = d.drag.x0
			// var b = d.drag.x_del
			// var c = d.dragged

			var dist = d.drag.x_del - (sx + w / 2);
			if (d.dragged_side * dist < 0) {
				swipe_dir = true;
			}

			// console.log( dist )
		}

		// draw next image
		if (d.drag.active && !swipe_dir) {

			ctx.globalAlpha = d.dragged_proc;
			var nextId = DEF.slide.cur + d.dragged_side;
			if (nextId < 0) nextId = DEF.slide.amm - 1;
			if (nextId >= DEF.slide.amm) nextId = 0;
			ctx.drawImage(DEF.slide.list[nextId], sx, sy, w, h, dx, dy, w * 1.05, hh)

		}

		if (!d.drag.active && swipe_dir && d.changed) {
			// console.log( DEF.slide.cur, d.dragged_side );
			ctx.globalAlpha = d.powerEased;
			var nextId = DEF.slide.cur - d.dragged_side;
			if (nextId < 0) nextId = DEF.slide.amm - 1;
			if (nextId >= DEF.slide.amm) nextId = 0;
			ctx.drawImage(DEF.slide.list[nextId], sx, sy, w, h, dx, dy, w * 1.05, hh)

		}


		ctx.globalAlpha = 1;
		ctx.fillStyle = 'rgba(' + DEF.slide.bg_color + ', ' + (1 - alpha) + ')';
		ctx.fillRect(dx - w * 0.025, dy - hh * 0.05, w * 1.1, hh * 1.1);

	}


	// tmp
	// ctx.beginPath();
	// ctx.arc(d.drag.x_del, 50, 10+50*d.powerEased, 0, 2 * Math.PI);
	// ctx.stroke();

}


function dragLoop() {
	if (d.drag.loop) requestAnimFrame(dragLoop);

	var dx = d.drag.x - d.drag.x_del;
	d.drag.x_del += dx / DEF.rects.x_del;


	if (d.drag.active) {
		d.power += d.powerInc;
		if (d.power > 1) d.power = 1;
	} else if (d.power > 0) {
		d.power -= d.powerInc * 2;
		if (d.power < 0) {
			d.power = 0;
		}
	}

	d.powerEased = Power1.easeOut(d.power)

	d.dragged = d.drag.x_del - d.drag.x0;
	d.dragged_proc = Math.abs(d.dragged / DEF.slide.w / DEF.slide.swipe_need);
	if (d.dragged_proc > 1) d.dragged_proc = 1;
	d.dragged_side = Math.sign(d.dragged);

	draw();

}

function whenReleased(el) {
	// console.log( d.dragged_proc )
	// if (d.dragged_proc >= 1) {
	// 	d.changed = true;
	// 	DEF.slide.cur += d.dragged_side;
	// 	if (DEF.slide.cur < 0) DEF.slide.cur = DEF.slide.amm - 1;
	// 	if (DEF.slide.cur >= DEF.slide.amm) DEF.slide.cur = 0;
	// }

	if (d.dragged_proc >= 1) {
		d.changed = true;
		DEF.slide.cur += d.dragged_side;

		if (DEF.slide.cur < 0){
			DEF.slide.cur = DEF.slide.amm - 1;
		}
		if (DEF.slide.cur >= DEF.slide.amm){
			DEF.slide.cur = 0;
		}
	}

	//when slide changed
	if(d.changed){
		if(DEF.slide.dir === "right") {
			startEvent("Swipe_Right");
		}
	
		if(DEF.slide.dir === "left") {
			startEvent("Swipe_Left");
		}
	
		d.frameSeen = DEF.slide.cur + 1;
	
		startEvent("Seen_Frame_"+d.frameSeen);
	}

	if (el.x == 0) {
		ctaFunction()
		startEvent("Click_Frame_"+d.frameSeen);
	}

	//for fiinish
	d.seenSlide[0].slide = true; //set no 1 slide seen true
	d.seenSlide[DEF.slide.cur].slide = true; //set slide seen true
	let count = 0;
	d.seenSlide.forEach(el => {
		if(el.slide === true) {
			count++;
		}

		if(count === DEF.slide.amm) {
			finishedFunction();
		}
	});


}

function endDrag() {

	//startEvent("finished");

}


















/////////////////// D R A G ////////////////////////

var startX, startY;
var dragFt = false;

function initDrag(index) {
	myDraggable.push(addDraggable(o.dragArea));
}

function addDraggable(dragObj, name) {

	var drag = Draggable.create(dragObj, { //edgeResistance: 0.95, bounds: bounds, type:"x", 
		onPress: function (e) {
			onPress(this, e);
		},
		onDrag: function (e) {
			onDrag(this, e);
		},
		onRelease: function (e) {
			onRelease(this);
		}
	})

	// drag[0].name = name;
	// drag[0].alt = alt;

	return drag;
}


function onPress(el, e) {
	if (!d.drag.ft) {
		d.drag.ft = true;
		startedFunction();
		d.icon_opac.kill();
		d.icon_tl.kill();
		gsap.to(o.icon, 0.33, {
			opacity: 0
		})
	}

	d.power = 0;
	d.drag.x0 = e.offsetX * DEF.slide.scale;
	d.drag.x = e.offsetX * DEF.slide.scale;
	d.drag.x_del = e.offsetX * DEF.slide.scale;
	d.drag.active = true;
	d.changed = false;

}

function onDrag(el, e) {
	d.drag.x = d.drag.x0 + el.x * DEF.slide.scale;
}

function onRelease(el, endPos) {

	//if (el.x == 0) ctaFunction();

	// d.drag.sum_x += d.drag.x;
	// d.drag.x = 0;
	d.drag.active = false;

	DEF.slide.dir = el.getDirection();
	whenReleased(el);

	gsap.set(el.target, {
		x: 0,
		y: 0
	})
}


function mouseEvents() {
	//mouse over
	o.adArea.addEventListener("mouseover", function(){
		if(!d.mouseOver) {
			d.mouseOver = true;
			startEvent("Mouse_Over");
		}
	});

	//touch
	o.adArea.addEventListener('touchstart', function(){
		if(!d.touch) {
			d.touch = true;
			startEvent("Touch");
		}
	});
}














///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
///////////////////////////
////////////////// F U N C T I O N S //////////////////////
///////////////////////////

// SHAKE //



function activateTap(mode) {
	// if(mode){
	o.adArea.addEventListener("click", onHit);
	// } else {
	// o.select_btn.removeEventListener("click", tapFunction);
	// }
}

function removeTap(mode) {
	// if(mode){
	// o.adArea.addEventListener("click", tapFunction);
	// } else {
	o.adArea.removeEventListener("click", onHit);
	// }
}

function activateButtons() {
	o.adArea.addEventListener("click", ctaFunction);
}

function removeButtons() {
	o.adArea.removeEventListener("click", ctaFunction);
}

/////////////////////////////


function getCssProperty(elmId, property) {
	var elem = document.getElementById(elmId);
	return parseInt(window.getComputedStyle(elem, null).getPropertyValue(property));
}

function getTransformValue(element, property) {
	var values = element.style.transform.split(")");
	for (var key in values) {
		var val = values[key];
		var prop = val.split("(");
		if (prop[0].trim() == property)
			return prop[1];
	}
	return false;
}

function pitagor(a, b) {
	return Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5)
}

function easeInCubic(t) {
	return t * t * t
}

window.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( /* function */ callback, /* DOMElement */ element) {
			window.setTimeout(callback, 1000 / 60);
		};
})();


var assetsCur = 0;
var assetsTotal = 0;
var loading = {};

//

function initLoad() {
	prepareElements();
	loadAsset();
}

function prepareElements() {
	// id
	var names = oNames.id.split(' ');
	for (var i = 0; i < names.length; i++) {
		var name = names[i];
		o[name] = document.getElementById(name);
	};

	for (var i = 0; i < loading.total; i++) {
		DEF.slide.list.push(null)
	}
}

function loadAsset() {
	loading.total = DEF.slide.amm;
	loading.loaded = 0;

	for (var i = 0; i < loading.total; i++) {

		var img = new Image();
		img.myCustomData = {
			total: loading.total,
			numb: i
		};

		img.onload = function () {

			DEF.slide.list[this.myCustomData.numb] = this;

			countAsset();

		};

		// img.src = DEF.slide.assets_url + DEF.slide.name + (i + 1) + "." + DEF.slide.format;
		img.src = sliderImages[i];
	}
}

function countAsset() {

	loading.loaded++;
	if (loading.loaded == (loading.total)) {
		allLoaded();
	}

}

function allLoaded() {
	init();
	TweenMax.to(adArea, 0.3, {
		delay: 0.05,
		opacity: 1
	});
}

//

Object.size = function (obj) { // get objects ammount in var
	var size = 0,
		key;
	for (key in obj) {
		if (obj.hasOwnProperty(key)) size++;
	}
	return size;
};


if (window.addEventListener) {
	window.addEventListener('load', initLoad(), false);
} else if (window.attachEvent) {
	window.attachEvent('onload', initLoad());
}