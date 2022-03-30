import {Swiper, Mousewheel, Controller, Pagination, Scrollbar, Navigation, EffectFade} from "swiper"

Swiper.use([Mousewheel, Controller, Pagination, Scrollbar, Navigation, EffectFade ]);



document.addEventListener('DOMContentLoaded', () => {


	if (document.querySelector('.entry__swiper')) {
		const entrySlide = new Swiper('.entry__swiper', {
			// Optional parameters
			// direction: 'vertical',
			loop: true,
			effect: "fade",

			navigation: {
				nextEl: '.entry_btn-next',
				prevEl: '.entry_btn-prev',
			  }
		  });
		const entrySld = new Swiper('.entry__swpr', {
			// Optional parameters
			// direction: 'vertical',
			loop: true,
			effect: "fade",

		  });


		  entrySlide.controller.control = entrySld 
		  entrySld.controller.control = entrySlide 
	}


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

	if (burgerBtn) {
		burgerBtn.addEventListener("click", () => {
			headerNav.classList.toggle('open__menu');
			navMenu.classList.toggle('active');
			burgerBtn.classList.toggle('burger__active');
			document.body.classList.toggle('active');
		})

	}



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
	


	if (document.querySelector('.cooperation')) {
		document.querySelectorAll('.cooperation__btn').forEach(item => {
			item.addEventListener('click', openCall)
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
	const callBtn = document.querySelector('.call__button');
	const consBtn = document.querySelector('.cons__btn');
	const debtBtn = document.querySelector('.debt__btn');
	
	
	const tabContentBtn = document.querySelectorAll('.tabcontent__btn');
	const tabContainerBtn = document.querySelectorAll('.tabcontainer__btn');
	

	function getScrollBarWidth () {
		var inner = document.createElement('p');
		inner.style.width = "100%";
		inner.style.height = "200px";
	  
		var outer = document.createElement('div');
		outer.style.position = "absolute";
		outer.style.top = "0px";
		outer.style.left = "0px";
		outer.style.visibility = "hidden";
		outer.style.width = "200px";
		outer.style.height = "150px";
		outer.style.overflow = "hidden";
		outer.appendChild (inner);
	  
		document.body.appendChild (outer);
		var w1 = inner.offsetWidth;
		outer.style.overflow = 'scroll';
		var w2 = inner.offsetWidth;
		if (w1 == w2) w2 = outer.clientWidth;
	  
		document.body.removeChild (outer);
	  
		return (w1 - w2);
	  };
	
	function compensateBody(){
		$('body').addClass('BodyOverflow');
		$('body').css('padding-right', getScrollBarWidth());
	}
	function unCompensateBody(){
		$('body').attr('style', '');
		$('body').removeClass('BodyOverflow');
	}



	function openCall() {
		compensateBody()
		bg.classList.add('active');
		call.classList.add('active');
		document.body.classList.add('active');
	}
	function closeCall() {
		unCompensateBody()
		bg.classList.remove('active');
		call.classList.remove('active');
		document.body.classList.remove('active');
	}

	if (debtBtn) {
		debtBtn.addEventListener('click', openCall);
		// callBtn.addEventListener('click', closeCall);
		// bg.addEventListener('click', () => {
		// 	closeCall();
		// });
	}

	if (callBtn) {
		consBtn.addEventListener('click', openCall);
		callBtn.addEventListener('click', closeCall);
		bg.addEventListener('click', () => {
			closeCall();
		});
	}

	if (document.querySelector('.bankruptcy__btn')) {
		document.querySelector('.bankruptcy__btn').addEventListener('click', (e) => {
			data.event_name = 'Initiate'
			sendDataAnalytics();
			openCall()
		})
	}

	if (tabContentBtn) {
		tabContentBtn.forEach(item => {
			item.addEventListener('click', openCall);
		})
	}

	if (tabContainerBtn) {
		tabContainerBtn.forEach(item => {
			item.addEventListener('click', openCall);
		})
	}

	 // smooth animate
	 document.querySelectorAll('a[href^="#"]').forEach(link => {

		link.addEventListener('click', function(e) {
			e.preventDefault();

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);

			// let topOffset;
				const topOffset = 0; // если не нужен отступ сверху

				// if (document.querySelector('.header')) {
				// 	topOffset = document.querySelector('.header').offsetHeight;
                //     if (window.innerWidth <= 540) {
                //         topOffset = 0;
                //     }
				// } else {
				// 	topOffset = 0; // если не нужен отступ сверху
				// }

			const elementPosition = scrollTarget.getBoundingClientRect().top;
			const offsetPosition = elementPosition - topOffset;

			window.scrollBy({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});


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

			checkCurrentStep()
		}
	}

	function prevStep() {
		const currentStepIndex = $('.quiz__step-active').attr('data-step')
		const currentStep = $('.quiz__step-active')

		if ((parseInt(currentStepIndex) + 1) == 1) {
		} else {
			$('.quiz-results-item').each((ind, item) => {
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
		
	}
	


	if (document.querySelector('.reference')) {

		const multiLinksTitle = ['Банкротство ООО с долгами','Административное правонарушение','Руструктуризация долга при банкротстве',
		'Процедура банкротства физ.лиц','Процедура банкротства юр.лиц','Банкротсво через МФЦ','Вероятность банкротства предприятия',
		'Уклонение от уплаты налогов','Выездная налоговая проверка','Допрос в налоговой'];
		const multiLinksData = ['23.05.2021','30.01.2021','10.07.2021','02.02.2021','03.05.2021','20.06.2021','17.07.2021','21.09.2021','08.08.2021','01.05.2021'];
		const multiLinksLabel = ['#Банкротство','#Арбитраж','#Банкротство','#Банкротство','#Банкротство','#Банкротство','#Банкротство','#Налоги','#Налоги','#Налоги'];
		const multiLinksImg = ['paper-11','paper-1','paper-10','paper-12','paper-2','paper-3','paper-4','paper-5','paper-6','paper-8'];
		const multiLinksLink = ['info1','info','info2','info3','info4','info5','info6','info7','info8','info9'];

		let i = 1
		while (i <= 3) {
			let randNum = Math.floor(Math.random() * 10);
			if (($('.notes__block-title').text()).includes(multiLinksTitle[randNum])) {
				continue;
			} else {

					let multiLinksPattern = `
					<a href="paper/${multiLinksLink[randNum]}.html" class="notes__block-${i} notes__block">
						<div class="notes__block__box">
							<span class="notes__block-data notes__block-black">${multiLinksData[randNum]}</span>
							<span class="notes__block-label notes__block-black">${multiLinksLabel[randNum]}</span>
						</div>
						<div class="notes__block-img">
							<img src="images/dist/paper/${multiLinksImg[randNum]}.png" alt="img">
						</div>
						<div class="notes__block-info">
							<h3 class="notes__block-title">${multiLinksTitle[randNum]}</h3>
						</div>
					</a>
					`
				
					$('.reference').append(multiLinksPattern)	
					i++;
				}
		}
	}




	//Плавная анимация
	if (screen.width > 1024) {
		function onEntry(entry) {
			entry.forEach(change => {
			  if (change.isIntersecting) {
				change.target.classList.add('scrolled');
			  }
			});
		  }
		  let options = { threshold: [0.2] };
		  let observer = new IntersectionObserver(onEntry, options);
		  let elements = document.querySelectorAll('.js-scroll');
		  for (let elm of elements) {
			observer.observe(elm);
		  }

	} else {
		let elements = document.querySelectorAll('.js-scroll');
		for (let elm of elements) {
		  elm.classList.add('scrolled')
		}
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


	let val


	function validateEmail(email) {
        var re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
        return re.test(email);
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

		data.name = $(`#${formID} input[name="name"]`).val()
		data.em = $(`#${formID} input[name="email"]`).val()
		console.log($(`#${formID} input[name="phone"]`).val())
		if ($(`#${formID} input[name="phone"]`).val()) {
			data.ph = $(`#${formID} input[name="phone"]`).val().replace(/[^\d]/g, '')
		}
		data.form_id = formID
		data.event_name = 'SubmitForm'
		if (formID == 'Quiz') {
			data.question_1 = $($('.quiz-results-item')[0]).text()
			data.question_2 = $($('.quiz-results-item')[1]).text()
			data.question_3 = $($('.quiz-results-item')[2]).text()
		}
		// console.log(data)
		// $.ajax({
		// 	url: 'ajax/mail.php',
		// 	type: 'POST',
		// 	cache: false,
		// 	data: { 'formID':formID },
		// 	dataType: 'html',
		// 	error: function(data) {
				
		// 	}, 
		// 	/* если произойдет ошибка в элементе с id erconts выведится сообщение*/  
		// 	beforeSend: function() {
				
		// 	},
		// 	success: function(datas) {
		// 		sendDataAnalytics()
		// 		if ($("input[name='name']")) {
		// 			$("input[name='name']").val('');
		// 		}
		// 		if ($("input[name='phone']")) {
		// 			$("input[name='phone']").val('');
		// 		}
		// 		if ($("input[name='email']")) {
		// 			$("input[name='email']").val('');
		// 		}
				
		// 		if (formID.includes('Call')) {
		// 			if ($('.call__success')) {
		// 				$('.call__success').addClass('active');
		// 				$('.call__form').hide();
		// 				$('.call__title').hide();
		// 			}
					
		// 		}


		// 		if (formID.includes('Quest') || formID.includes('Spec') || formID.includes('Special')) {
		// 			if (luckBlock) {
		// 				luckBlock.classList.add('active');
		// 				document.body.classList.add('active');
		// 			}
					
		// 		}

		// 		if(formID.includes('Quiz')) {
		// 			$('.quiz__step').hide();
		// 			$('.quiz__prev').hide();
		// 			$('.quiz__next').hide();
		// 			$('.quiz__finish').addClass('active');
		// 		}
		// 	}
		// })
		sendFormAnalytics(formID)
		return false;









		function sendFormAnalytics(formID) {
			fetch('https://api.directual.com/good/api/v5/data/data/postWebData?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
				'Content-Type': 'application/json'
				},
			}).then(res=>{
				console.log(data)
				console.log(res.json())
				console.log(res.status)
				if (res.status == 200) {
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
	
	
					if (formID.includes('Quest') || formID.includes('Spec') || formID.includes('Special') || formID.includes('demand') || formID.includes('spam') || formID.includes('articleCallForm')) {
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
				} else {
					alert(`Упс, произошла ошибка ${res.status}. Попробуйте позже или позвоните нам по телефону`)
				}
	
			})
		}




















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


	let ips;
	$.getJSON('https://ipapi.co/json/', function(data) {
		ips = (JSON.stringify(data.ip, null, 2).slice(1, -1));
		});

	window.eventPixelId = Math.floor((Math.random() * 100000000))
	// fbq('track', 'PageView', {eventID: eventPixelId});

	var data = {
		"event_name":"PageView",
		"event_time":String(Date.now()).slice(0, 10),
		"event_time_ga":String(Date.now()) + '000',
		"event_source_url": window.location.href,
		"event_id": eventPixelId,
		"action_source":"website",
		"form_id": null,
		"lead_id":get_cookie('roistat_first_visit') + 1,
		"client_user_agent": navigator.userAgent,
		"_fbp": get_cookie('_fbp'),
		"_ym_uid": get_cookie('_ym_uid'),
		"_ga": String(get_cookie('_ga')).substr(6, (String(get_cookie('_ga'))).length),
		"_gcl_au": get_cookie('_gcl_au'),
		// "_ga": get_cookie('_ga'),
		"_tmr_lvid": get_cookie('tmr_lvid'),
		"tmr_lvidTS": get_cookie('tmr_lvidTS'),
		"roistat_first_visit": get_cookie('roistat_first_visit'),
		"name": null,
		"em": null,
		"ph": null,
		"ip": ips,
		"question_1": null,
		"question_2": null,
		"question_3": null,
	}




	let promiseSendData = new Promise(function(resolve, reject) {
		setTimeout(() => {
			resolve(
				data.event_name = "PageView",
				data.lead_id = get_cookie('roistat_first_visit') + 1,
				data._fbp = get_cookie('_fbp'),
				data._ym_uid = get_cookie('_ym_uid'),
				data._ga = String(get_cookie('_ga')).substr(6, (String(get_cookie('_ga'))).length),
				data._gcl_au = get_cookie('_gcl_au'),
				// data._ga = get_cookie('_ga'),
				data._tmr_lvid = get_cookie('tmr_lvid'),
				data.tmr_lvidTS = get_cookie('tmr_lvidTS'),
				data.roistat_first_visit = get_cookie('roistat_first_visit'),
				data.ip = ips 
			)
		}, 3000)
	})

	
	promiseSendData.then(sendDataAnalytics);

	
	
	function sendDataAnalytics() {
	fetch('https://api.directual.com/good/api/v5/data/data/postWebData?appID=0cdcfe4c-3f7e-4eff-b1c9-d8f418a0db2d', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
		'Content-Type': 'application/json'
		},
	}).then(res=>{
		console.log(data)
		console.log(res.json())
		console.log(res.status)
	})
	}

	if (document.querySelector('.cons__btn')) {
	document.querySelector('.cons__btn').addEventListener('click', () => {
		data.event_name = 'Initiate'
		sendDataAnalytics();
	})
	}

	if (document.querySelector('.social')) {
	document.querySelectorAll('.social__list').forEach(item => {
		item.addEventListener('click', () => {
			data.event_name = 'Initiate'
			sendDataAnalytics();
		})
	})
	}	

	if (document.querySelector('.quiz')) {
	document.querySelectorAll(".quiz__item input[name='firstAsk']").forEach(item => {
		item.addEventListener('click', () => {
			data.event_name = 'Initiate'
			sendDataAnalytics();
		})
	})
	}


	if (tabContentBtn) {
	tabContentBtn.forEach(item => {
		item.addEventListener('click', () => {
			data.event_name = 'Initiate'
			sendDataAnalytics();
		});
	})
	}

	if (tabContainerBtn) {
		tabContainerBtn.forEach(item => {
			item.addEventListener('click', () => {
				data.event_name = 'Initiate'
				sendDataAnalytics();
			});
		})
	}


	if (document.querySelector('.cooperation')) {
		document.querySelectorAll('.cooperation__btn').forEach(item => {
			item.addEventListener('click', () => {
				data.event_name = 'Initiate'
				sendDataAnalytics();
			});
		})
	}
})

