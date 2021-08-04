import {Swiper, Mousewheel, Controller, Pagination, Scrollbar, Navigation} from "swiper"

Swiper.use([Mousewheel, Controller, Pagination, Scrollbar, Navigation ]);

document.addEventListener('DOMContentLoaded', () => {

	const peopleSwiper = new Swiper('.people__slider', {
		loop: true,
	  
		navigation: {
		  nextEl: '.people__btn-next',
		  prevEl: '.people__btn-prev',
		},
	  

	  });


	  const trustSwiper = new Swiper('.trust__slider', {
		loop: true,
	  
		navigation: {
		  nextEl: '.trust__btn-next',
		  prevEl: '.trust__btn-prev',
		},
	  

	  });


	  const burgerBtn = document.querySelector('.burger');
	  const headerNav = document.querySelector('.navigation');


	  burgerBtn.addEventListener("click", () => {
		headerNav.classList.toggle('open__menu');
		burgerBtn.classList.toggle('burger__active');
	  })

	
	
	//Плавная анимация

	const scrollElements = document.querySelectorAll(".js-scroll");
	const scrollElementsAnimation = document.querySelectorAll(".js-scroll-animation");

	const elementInView = (el, dividend = 1) => {

		const elementTop = el.getBoundingClientRect().top;
		return ( elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend );

	};

	// const elementOutofView = (el) => {

	// 	const elementTop = el.getBoundingClientRect().top;
	// 	return ( elementTop > (window.innerHeight || document.documentElement.clientHeight) );

	// };

	const displayScrollElement = (element) => {
		element.classList.add("scrolled");
	};

	const hideScrollElement = (element) => {
		element.classList.remove("scrolled");
	};

	const handleScrollAnimation = () => {
		scrollElementsAnimation.forEach((el) => {
			if (elementInView(el, 1)) {
			displayScrollElement(el);
			}  // else if (elementOutofView(el)) {
			// hideScrollElement(el)
			// }
		})
		scrollElements.forEach((el) => {
			if (elementInView(el, 1.25)) {
			displayScrollElement(el);
			}  // else if (elementOutofView(el)) {
			// hideScrollElement(el)
			// }
		})
	}

	window.addEventListener("scroll", () => { 
		handleScrollAnimation();
	});
	handleScrollAnimation();


	// анимация переключения кнопок
	
	const optionInfo = document.querySelectorAll(".option__info");
	const optionLinks = document.querySelectorAll(".option__tabs");
	
	optionLinks.forEach ((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			optionLinks.forEach(elem => {
				elem.classList.remove('active');
			})
			optionInfo.forEach((item, counter) => {
				item.style.opacity = 0;
				if (index === counter) {
					item.style.opacity = 1;
				}
			})
			item.classList.toggle('active');
		})
		
	})
	
	






	const tabcontent = document.querySelectorAll(".tabcontent");
	const tabLinks = document.querySelectorAll(".tablinks");
	
	tabLinks.forEach ((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			tabLinks.forEach(elem => {
				elem.classList.remove('active');
			})
			tabcontent.forEach((item, counter) => {
				item.style.opacity = 0;
				if (index === counter) {
					item.style.opacity = 1;
				}
			})
			item.classList.toggle('active');
		})
		
	})





	const tabContainer = document.querySelectorAll(".tabcontainer");

	
	tabLinks.forEach ((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			tabLinks.forEach(elem => {
				elem.classList.remove('active');
			})
			tabContainer.forEach((item, counter) => {
				item.style.opacity = 0;
				if (index === counter) {
					item.style.opacity = 1;
				}
			})
			item.classList.toggle('active');
		})
		
	})
	




	document.getElementById("defaultOpens").click();
	document.getElementById("defaultOpen").click();
})

