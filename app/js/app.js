import {Swiper, Mousewheel, Controller, Pagination, Scrollbar, Navigation} from "swiper"

Swiper.use([Mousewheel, Controller, Pagination, Scrollbar, Navigation ]);

document.addEventListener('DOMContentLoaded', () => {



	const reviewsSwiper = new Swiper('.reviews__slider', {
		loop: true,
		

		navigation: {
			nextEl: '.reviews__btn-next',
			prevEl: '.reviews__btn-prev',
		  },

		  pagination: {
			el: ".reviews__pagination",
			type: "fraction",
		  },
	
	  });




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


	  
	// $(".call__phone").mask("+7(999) 999-9999");
	// $(".form__phone").mask("+7(999) 999-9999");
	$("input[name='phone']").mask("+7(999) 999-9999");


	const burgerBtn = document.querySelector('.burger');
	const headerNav = document.querySelector('.navigation');
	const navMenu = document.querySelector('.navigation__menu');


	burgerBtn.addEventListener("click", () => {
		headerNav.classList.toggle('open__menu');
		navMenu.classList.toggle('active');
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
	
	if (tabcontent) {
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
	}





	const tabContainer = document.querySelectorAll(".tabcontainer");

	
	if (tabContainer) {
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
	}
	
	
	const bg = document.querySelector('.bg__black');
	const call = document.querySelector('.call');
	const dare = document.querySelector('.dare');
	const callBtn = document.querySelector('.call__button');
	const dareBtn = document.querySelector('.dare__button');
	const consBtn = document.querySelector('.cons__btn');
	
	
	const tabContentBtn = document.querySelectorAll('.tabcontent__btn');
	const tabContainerBtn = document.querySelectorAll('.tabcontainer__btn');
	



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

	function openDare() {
		bg.classList.add('active');
		dare.classList.add('active');
		document.body.classList.add('active');
	}
	function closeDare() {
		bg.classList.remove('active');
		dare.classList.remove('active');
		document.body.classList.remove('active');
	}

	consBtn.addEventListener('click', openCall);
	callBtn.addEventListener('click', closeCall);
	if (dareBtn) {
		dareBtn.addEventListener('click', closeDare);
	}
	bg.addEventListener('click', () => {
		closeCall();
		closeDare();
	});



	if (tabContentBtn) {
		tabContentBtn.forEach(item => {
			item.addEventListener('click', openDare);
		})
	}

	if (tabContainerBtn) {
		tabContainerBtn.forEach(item => {
			item.addEventListener('click', openDare);
		})
	}


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
			addResult(currentStep)
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
			$('.quiz-results-item').each((ind, item) => {
				console.log(ind);
				if ((ind + 1) === $('.quiz-results-item').length) {
					item.remove();
				}
			})
			$('.quiz__step-active').removeClass('quiz__step-active')
			$($('.quiz__step')[parseInt(currentStepIndex) + -1]).addClass('quiz__step-active')
			checkCurrentStep()
		}
	}


	function addResult(step) {
	
		// const title = step.find('.quiz__title').html()
		const checkedInputs = step.find('input[type="radio"]:checked, input[type="checkbox"]:checked')
		let answers = []
		if (checkedInputs.length) {
			checkedInputs.each(function (index, el) {
				answers.push(el.value);
			})
		}
		let vals = ''
		answers.forEach(function(el) {
			vals += `${el}`
		})
		const template =
			`<div class="quiz-results-item">${vals}</div>`
		$('.quiz-results').append(template)
		


		
		// $('.quiz-results-item-res__val').each((index, item) => {

		// 	if (index > 1) {

		// 		strs = `${strs} ${$(item).text()},`
		// 	}
		// 	$('.quizResult').text(strs);
		// })
	
	}
	


	function checkCurrentStep () {
		const currentStep = $('.quiz__step-active')
		const inputs = currentStep.find('input[type="radio"], input[type="checkbox"]').length
		const checkedInputs = currentStep.find('input[type="radio"]:checked, input[type="checkbox"]:checked').length
		const btn = $('.quiz__next');


		if (inputs) {
			if (checkedInputs) {
				btn.prop('disabled', false)
			} else {
				btn.prop('disabled', true)
			}
		} else {
			btn.prop('disabled', true)
		}
	}

	$(document).on('input', '.quiz input[type="radio"], .quiz input[type="checkbox"]', function() {
		checkCurrentStep()
	})
	


	//validation form call
	$('.call__name').keyup(chekCallForm);
	$('.call__phone').keyup(chekCallForm);
	$('.call__email').keyup(chekCallForm);

	$('.dare__name').keyup(chekDareForm);
	$('.dare__phone').keyup(chekDareForm);
	$('.dare__email').keyup(chekDareForm);
	let val


	function validateEmail(email) {
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
        return re.test(email);
    }

	function chekDareForm() {
		if ($('.dare__name').val() === '' || $('.dare__phone').val() === '' || $('.dare__email').val() === '') {
			$('.dare__btn').prop('disabled', true)
		} else {
			val = $('.dare__email').val();//Получаем данные из input
			if (validateEmail(val)) {
				$('.dare__btn').prop('disabled', false);
			} else {
				$('.dare__btn').prop('disabled', true)
			}
		}
	}

	function chekCallForm() {
		if ($('.call__name').val() === '' || $('.call__phone').val() === '' || $('.call__email').val() === '') {
			$('.call__btn').prop('disabled', true)
		} else {
			val = $('.call__email').val();//Получаем данные из input
			if (validateEmail(val)) {
				$('.call__btn').prop('disabled', false);
			} else {
				$('.call__btn').prop('disabled', true)
			}
		}
	}
	chekDareForm();
	chekCallForm();


	//validation form quiz

	$(".quiz__input[name='phone']").keyup(checkQuiz);
	$(".quiz__input[name='email']").keyup(checkQuiz);
	function checkQuiz() {
		if ($(".quiz__input[name='phone']").val().length == 16 || $(".quiz__input[name='email']") === '') {
			let param = $(".quiz__input[name='email']").val()
			if (validateEmail(param)) {
				$('.quiz__next').prop('disabled', false);
			} else {
				$('.quiz__next').prop('disabled', true)
			}
		}
	}



	
	// open success message 

	const luckBlock = document.querySelector('.luck');
		
	if (luckBlock) {
		luckBlock.addEventListener('click', (event) => {
		if (event.target.contains(luckBlock)) {
			luckBlock.classList.remove('active');
			document.body.classList.remove('active')
		}
	})

	}




	

	$('form').submit(function () {
		var formID = $(this).attr('id'); // Получение ID формы
		var formNm = $('#' + formID);
		console.log(formID);
		console.log($(`#${formID} input[name="name"]`).val())
		console.log($(`#${formID} input[name="phone"]`).val())
		console.log($(`#${formID} input[name="email"]`).val())
		data.name = $(`#${formID} input[name="name"]`).val()
		data.phone = $(`#${formID} input[name="phone"]`).val()
		data.email = $(`#${formID} input[name="email"]`).val()
		console.log(data)
		$.ajax({
			url: 'ajax/mail.php',
			type: 'POST',
			cache: false,
			data: { 'formID':formID },
			dataType: 'html',
			error: function(data) {
				// console.log('sdsdsds');
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
				// dataLayer.push({'event': `${formID}`})
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
				
				if (formID.includes('Call')) {
					if ($('.call__success')) {
						$('.call__success').addClass('active');
						$('.call__form').hide();
						$('.call__title').hide();
					}
					
				}

				if (formID.includes('Dare')) {
					if ($('.dare__success')) {
						$('.dare__success').addClass('active');
						$('.dare__form').hide();
						$('.dare__title').hide();
					}
					
				}

				if (formID.includes('Quest') || formID.includes('Spec')) {
					if (luckBlock) {
						luckBlock.classList.add('active');
						document.body.classList.add('active');
					}
					
				}

				if(formID.includes('Quiz')) {
					$('.quiz__step').hide();
					$('.quiz__prev').hide();
					$('.quiz__next').hide();
					$('.quiz__finish').addClass('active');
				}
			}
		})
		return false;
	});

	if (document.querySelectorAll('.select__header')) {
		select();
	}

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
	if (document.querySelector(".tablinks")) {
		document.querySelector(".tablinks").click();
	}






	
	//get clientID
	function get_cookie ( cookie_name ) {
		var results = document.cookie.match ( '(^|;) ?' + cookie_name + '=([^;]*)(;|$)' );
		if ( results )
			return ( unescape ( results[2] ) );
		else
			return null;
		}



	$.getJSON('https://ipapi.co/json/', function(data) {
		$('.header-ip').text((JSON.stringify(data.ip, null, 2).slice(1, -1)));
		});

	$('.header-ga').text(get_cookie('_ga'));
	$('.header-fbp').text(get_cookie('_fbp'));
	$('.header-uid').text(get_cookie('_ym_uid'));
	$('.header-lvid').text(get_cookie('tmr_lvid'));



	let data = {
		"event_name":"PageView",
		"event_time":Date.now(),
		"event_source_url": window.location.href,
		"event_id": eventPixelId,
		"action_source":"website",
		"client_user_agent": navigator.userAgent,
		"_fbp": get_cookie('_fbp'),
		"_ym_uid": get_cookie('_ym_uid'),
		"_ga": get_cookie('_ga'),
		"_tmr_lvid": get_cookie('tmr_lvid'),
		"tmr_lvidTS":get_cookie('tmr_lvidTS'),
		"roistat_first_visit":get_cookie('roistat_first_visit'),
		"name": null,
		"em": null,
		"ph": null,
		"question_1": null,
		"question_2": null,
		"question_3": null,
		"question_4": null,
	}



	// function Data(eventName) {
	// 	this.event_name = eventName,
	// 	this.event_time = Date.now(),
	// 	this.event_source_url = window.location.href,
	// 	this.event_id = eventPixelId,
	// 	this.action_source = "website",
	// 	this.client_user_agent = navigator.userAgent,
	// 	this._fbc = get_cookie('_fbc'),
	// 	this._fbp = get_cookie('_fbp'),
	// 	this._ym_uid = get_cookie('_ym_uid'),
	// 	this._ga = get_cookie('_ga'),
	// 	this.tmr_lvid = get_cookie('tmr_lvid'),
	// 	this.tmr_lvidTS = get_cookie('tmr_lvidTS'),
	// 	this.roistat_first_visit = get_cookie('roistat_first_visit'),
	// 	this.name = ''
	// 	this.email = '',
	// 	this.phone = '',
	// 	this.question_1 = '',
	// 	this.question_2 = '',
	// 	this.question_3 = '',
	// 	this.question_4 = ''
	// }

	// let dt = new Data('PageView')
	// console.log(dt.name)

	// console.log(dt)


	console.log(data)
	

	

	let btnData = document.querySelector('.header__btn ');

	btnData.addEventListener('click', () => {

		// var json = JSON.stringify({ payload: data});
		// var request = new XMLHttpRequest();
		// request.open("POST", "https://api.directual.com/good/api/v5/data/data_from_integromat/postDataFromIntegromat?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d");
		// request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

		// var json = JSON.stringify(data);
		// var request = new XMLHttpRequest();
		// request.open("POST", "https://api.directual.com/good/api/v5/data/data/postData?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d");
		// request.setRequestHeader('Content-type', 'application/json; charset=utf-8');



		// request.onreadystatechange = function () {
		// if (request.readyState == 4 && request.status == 200)
		// document.getElementById("output").innerHTML=request.responseText;
		// }


		// request.send(json);
		// fetch('https://api.directual.com/good/api/v5/data/data_from_integromat/postDataFromIntegromat?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d&sessionID=', {
		// 	method: 'POST',
		// 	body: JSON.stringify({payload: data}),
		// 	headers: {
		// 	  'Content-Type': 'application/json'
		// 	},
		//   }).then(res=>{
		// 	console.log(res.json())
		//   })


		fetch('https://api.directual.com/good/api/v5/data/data/postDataWeb?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d&sessionID=', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
			  'Content-Type': 'application/json'
			},
		  }).then(res=>{
			console.log(res.json())
		  })
	})



	// fetch('http://example.com/api/users')
	// .then((response) => {
	// 	response.text()
	// 	return response.json(); // Error!
	// })
	// .then((data) => {
	// 	console.log(data);
	// })
	// .catch((error) => {
	// 	console.log(error)
	// })



	

	// btnData.addEventListener('click', () => { 
	// })
})

// {
// 	"leads": {
// 	  "update": [
// 		{
// 		  "id": "9500779",
// 		  "name": "Тест против &quot;Ярославский проводник&quot;",
// 		  "status_id": "42893209",
// 		  "old_status_id": "42893206",
// 		  "price": "52000",
// 		  "responsible_user_id": "7371322",
// 		  "last_modified": "1634024342",
// 		  "modified_user_id": "1538977",
// 		  "created_user_id": "7371322",
// 		  "date_create": "1632489539",
// 		  "pipeline_id": "4680985",
// 		  "account_id": "29694886",
// 		  "custom_fields": [
// 			{
// 			  "id": "1368437",
// 			  "name": "Дело (номер/ссылка)",
// 			  "values": [
// 				{
// 				  "value": "А82-24167/2017"
// 				}
// 			  ],
// 			  "code": "UR24_CASE_TARGET"
// 			},
// 			{
// 			  "id": "1368439",
// 			  "name": "Дата дела",
// 			  "values": [
// 				{
// 				  "value": "07.12.2017"
// 				}
// 			  ],
// 			  "code": "UR24_CASE_DATE"
// 			},
// 			{
// 			  "id": "1368441",
// 			  "name": "Тип дела",
// 			  "values": [
// 				{
// 				  "value": "о несостоятельности (банкротстве) организаций и граждан"
// 				}
// 			  ],
// 			  "code": "UR24_CASE_TYPE"
// 			},
// 			{
// 			  "id": "1368443",
// 			  "name": "Текущий статус",
// 			  "values": [
// 				{
// 				  "value": "Рассматривается в первой инстанции"
// 				}
// 			  ],
// 			  "code": "UR24_CASE_STATUS"
// 			}
// 		  ],
// 		  "created_at": "1632489539",
// 		  "updated_at": "1634024342"
// 		}
// 	  ]
// 	},
// 	"account": {
// 	  "subdomain": "hllegal",
// 	  "id": "29694886",
// 	  "_links": {
// 		"self": "https://hllegal.amocrm.ru"
// 	  }
// 	}
//   }