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
		  document.body.classList.toggle('active');
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
	
	if (document.querySelector('.option')) {
		const optionInfo = document.querySelectorAll(".option__info");
		const optionLinks = document.querySelectorAll(".option__tabs");
		const optionSelect = document.querySelectorAll(".option__select");
		
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
		
		optionSelect.forEach ((item, index) => {
			// console.log(index);
			item.addEventListener('click', () => {
				optionSelect.forEach(elem => {
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
	}
	






	const tabcontent = document.querySelectorAll(".tabcontent");
	const tabLinks = document.querySelectorAll(".tablinks");
	const selectPrice = document.querySelectorAll(".select__price");
	const selectCost = document.querySelectorAll(".select__cost");
	
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

	selectPrice.forEach ((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			selectPrice.forEach(elem => {
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

	selectCost.forEach ((item, index) => {
		// console.log(index);
		item.addEventListener('click', () => {
			selectCost.forEach(elem => {
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
	
	
	const bg = document.querySelector('.bg__black');
	const call = document.querySelector('.call');
	const callBtn = document.querySelector('.call__button');
	const consBtn = document.querySelector('.cons__btn');



	function openCall() {
		bg.classList.add('active');
		call.classList.add('active');
		document.body.classList.add('active');
	}
	function closeCall() {
		bg.classList.remove('active');
		call.classList.remove('active');
		document.body.classList.remove('active');
	}

	consBtn.addEventListener('click', openCall);
	callBtn.addEventListener('click', closeCall);
	bg.addEventListener('click', closeCall);



	//custom select

	let select = function () {
		let selectHeader = document.querySelectorAll('.select__header');
		let selectItem = document.querySelectorAll('.select__item');
	
		selectHeader.forEach(item => {
			item.addEventListener('click', selectToggle)
		});
	
		selectItem.forEach(item => {
			item.addEventListener('click', selectChoose)
		});
	
		function selectToggle() {
			this.parentElement.classList.toggle('is-active');
		}
	
		function selectChoose() {
			let text = this.innerText,
				select = this.closest('.select'),
				currentText = select.querySelector('.select__current');
			currentText.innerText = text;
			select.classList.remove('is-active');
	
		}
	
	};

	$(document).on('click', '.quiz__next', function () {
		nextStep()
	})
	$(document).on('click', '.quiz__prev', function () {
		prevStep()
	})

	function nextStep() {
		const currentStepIndex = $('.quiz__step-active').attr('data-step')
		const currentStep = $('.quiz__step-active')

		if ($('.quiz__step').length === parseInt(currentStepIndex) + 1) {
		} else {
			$('.quiz__prev').prop('disabled', false)
			$('.quiz__step-active').removeClass('quiz__step-active')
			$($('.quiz__step')[parseInt(currentStepIndex) + 1]).addClass('quiz__step-active')
			// if (parseInt(currentStepIndex) + 2 == $('.quiz__step').length) {
			// 	$('.quiz__next').remove();
			// 	$('.quiz__prev').remove();
			// }
			checkCurrentStep()
		}
	}

	function prevStep() {
		const currentStepIndex = $('.quiz__step-active').attr('data-step')
		const currentStep = $('.quiz__step-active')

		if ((parseInt(currentStepIndex) + 1) == 1) {
		} else {
			$('.quiz__step-active').removeClass('quiz__step-active')
			$($('.quiz__step')[parseInt(currentStepIndex) + -1]).addClass('quiz__step-active')
			checkCurrentStep()
		}
	}
	


	function checkCurrentStep () {
		const currentStep = $('.quiz__step-active')
		const inputs = currentStep.find('input[type="radio"], input[type="checkbox"]').length
		const checkedInputs = currentStep.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length
		const btn = $('.quiz__next')


		if (inputs) {
			if (checkedInputs) {
				btn.prop('disabled', false)
			} else {
				btn.prop('disabled', true)
			}
		} else {
			btn.prop('disabled', false)
		}
	}

	$(document).on('input', '.quiz input[type="radio"], .quiz input[type="checkbox"]', function() {
		checkCurrentStep()
	})
	
	

	$('form').submit(function () {
		var formID = $(this).attr('id'); // Получение ID формы
		var formNm = $('#' + formID);
		console.log(formID);

		$.ajax({
			url: 'ajax/mail.php',
			type: 'POST',
			cache: false,
			data: { 'formID':formID },
			dataType: 'html',
			error: function(data) {
				console.log(data);
				console.log('sdsdsds');
				// $("#errorMess").html(data);
				// $("#errorMess").css('color', 'red');
			}, 
			/* если произойдет ошибка в элементе с id erconts выведится сообщение*/  
			beforeSend: function() {
				// $('#sendMail').prop('disabled', true);
				// $("#errorMess").html("Подождите, идет отправка заявки!");
				// $("#errorMess").css('color', 'orange');
				
			},
			success: function(data) {
				dataLayer.push({'event': `${formID}`})
				console.log(data);
				if ($("input[name='name']")) {
					$("input[name='name']").val('');
				}
				if ($("input[name='phone']")) {
					$("input[name='phone']").val('');
				}
				if ($("input[name='email']")) {
					$("input[name='email']").val('');
				}
				
				if (formID.includes('quiz')) {
					quizResults.classList.add('active')
					quizMain.classList.add('active')
					quizNext.classList.add('active')
					quizLuck.classList.add('active')
					quizNextClose.classList.add('active')
					$('.quiz-sticky').css('display','none')
					$('.quiz-bottom').css('margin-top','0px')
					$('.quiz-content').css('padding-top','3.2em')
				}


				if (formID.includes('call')) {
					callForm.classList.add('active')
					callLuck.classList.add('active')
					callAgree.classList.add('active')
				}

				if (formID.includes('application')) {
					applicationForm.classList.add('active')
					applicationLuck.classList.add('active')
					applicationAgree.classList.add('active')
				}

				if (formID.includes('calc')) {
					calculatorInfo.classList.add('active')
					calculatorGroup.classList.add('active')
					calcAgree.classList.add('active')
					calculatorLuck.classList.add('active')
				}

				if (formID.includes('flot-') || formID.includes('bur-') || formID.includes('auto-') || formID.includes('train-') || formID.includes('index-') || formID.includes('contacts-')) {
					if (successBlock) {
						// callBlock.classList.remove('active');
						// callBg.classList.remove('active');
						// application.classList.remove('active')
						// $('.quiz_active').removeClass('quiz_active')
						// $('body').attr('style', '');
						//  $('body').removeClass('BodyOverflow');
						successBlock.classList.add('active');
						document.body.classList.add('active');
					}
					
				}

				// connect.classList.toggle('open');
				// $('#sendMail').prop('disabled', false);
				// $("#errorMess").css('color', 'green');
				// dataLayer.push({'event': 'sendMail_1'})
			}
		})
		return false;
	});

	select();
	if (document.querySelector(".option")) {
		document.querySelector(".option__select").click();
		document.querySelector(".option__tabs").click();
	}
	if (document.querySelector('.price')) {
		document.querySelector(".select__price").click();
	}
	if (document.querySelector('.cost')) {
		document.querySelector(".select__cost").click();
	}

	document.querySelector(".tablinks").click();
})

