(function() {
	"use strict";

	const select = (el, all = false) => {
		el = el.trim()
		if (all) {
			return [...document.querySelectorAll(el)]
		} else {
			return document.querySelector(el)
		}
	}

	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all)
		if (selectEl) {
			if (all) {
				selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
				selectEl.addEventListener(type, listener)
			}
		}
	}


	const onscroll = (el, listener) => {
		el.addEventListener('scroll', listener)
	}


	let backtotop = select('.back-to-top')
	if (backtotop) {
		const toggleBacktotop = () => {
			if (window.scrollY > 100) {
				backtotop.classList.add('active')
			} else {
				backtotop.classList.remove('active')
			}
		}
		window.addEventListener('load', toggleBacktotop)
		onscroll(document, toggleBacktotop)
	}

	/**
	 * Mobile nav toggle
	 */
	on('click', '.mobile-nav-toggle', function(e) {
		select('#navbar').classList.toggle('navbar-mobile')
		this.classList.toggle('fa-bars')
		this.classList.toggle('fa-times')
	})

	/**
	 * Mobile nav dropdowns activate
	 */
	on('click', '.navbar .dropdown > a', function(e) {
		if (select('#navbar').classList.contains('navbar-mobile')) {
			e.preventDefault()
			this.nextElementSibling.classList.toggle('dropdown-active')
		}
	}, true)

	/**
	 * Hero carousel indicators
	 */
	let heroCarouselIndicators = select("#hero-carousel-indicators")
	let heroCarouselItems = select('#heroCarousel .carousel-item', true)

	heroCarouselItems.forEach((item, index) => {
		(index === 0) ?
		heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "' class='active'></li>":
			heroCarouselIndicators.innerHTML += "<li data-bs-target='#heroCarousel' data-bs-slide-to='" + index + "'></li>"
	});


	window.addEventListener('load', () => {
		AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		})
	});

	window.onload=function(){function a(a,b){var c=/^(?:file):/,d=new XMLHttpRequest,e=0;d.onreadystatechange=function(){4==d.readyState&&(e=d.status),c.test(location.href)&&d.responseText&&(e=200),4==d.readyState&&200==e&&(a.outerHTML=d.responseText)};try{d.open("GET",b,!0),d.send()}catch(f){}}var b,c=document.getElementsByTagName("*");for(b in c)c[b].hasAttribute&&c[b].hasAttribute("data-include")&&a(c[b],c[b].getAttribute("data-include"))};

})()