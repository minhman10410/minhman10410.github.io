(function() {
	"use-strict";
	jQuery(document).ready(function($){

		window.onscroll = function() {
			reachTop();
		};
		var header = document.getElementById("second-header");
		var meanbar = $("#content").height();
		var sticky = 0;
		if(header) {
			sticky = meanbar;
		}
		function reachTop() {
			if(window.pageYOffset > sticky) {
				$("header").addClass('fixedHeader');
				$("#welcome-slide").addClass("slide-sticky");
				$("#welcome-slide").addClass("slide-sticky2");
		        if($("header").hasClass("fixedHeader")) {
		        	$(".mean-container .mean-bar").css({"position": "fixed", "z-index": "99999999", "top": "8px"});
		            $(".body-header-3 .standard-logo").css("display", "none");
		            $(".body-header-3 .sticky-logo").css("display", "block");
		        }
				// header.classList.add("sticky");
			} else {
				// header.classList.remove("sticky");
				$("#welcome-slide").removeClass("slide-sticky");
				$("#welcome-slide").removeClass("slide-sticky2");
				$("header").removeClass('fixedHeader');
		        $(".mean-container .mean-bar").css({"position": "absolute", "z-index": "400", "top": "160px"});
		        $(".body-header-3 .standard-logo").css("display", "block");
		        $(".body-header-3 .sticky-logo").css("display", "none");     
			}
		}
		
		
		// ---------------------------------------------------------------------------------------- //
		// ---------------------------------------------------------------------------------------- //
		// Default information
		var lang = localStorage.getItem("letter");

		var product = {}, menu = {}, general = {}, category = {}, statistic = {}, slide = {}, service = {}, project = {}, member = {}, 
		feedback = {}, contact = {}, meta = {}, language = {};

		var generalLang = {}, serviceLang = {}, contactLang = {}, memberLang = {}, feedbackLang = {},
		projectLang = {}, slideLang = {}, statisticLang = {}, categoryLang = {}, menuLang = {}, product = {}, about ='', serviceTitle = '',
		productTitle = '', readmore = '', clientFeed = '', latestNews = '', mainOffice = '', contactUs = '', aboutUs = '', importantLink = '',
		latestPost = '', contactHome = '', contactContact = '', contactPlaceholderName = '', contactPlaceholderEmail = '', languageSwitch = '',
		contactPlaceholderEmailMessage = '', contactSendMassage = '', aboutUsTitle = '', ourTeam = '';

		// Init functions
		// Get data
		getData();

		// Show Data
		setDefaultData(lang);
		mobileMenuView();
		setTimeout(function() {
			switchLanguageEvent(lang);
		}, 1000);


		// ---------------------------------------------------------------------------------------- //
		// ---------------------------------------------------------------------------------------- //
		// FUNCTIONS SECTION
		//
		// Set default data
		function setDefaultData(lang) {
			// console.log("default data");
			if(lang != null) {
				//
				generalLang 		= general[lang];
				serviceLang		 	= service[lang];
				contactLang 		= contact[lang];
				memberLang 			= member[lang];
				projectLang 		= project[lang];
				feedbackLang 		= feedback[lang];
				slideLang 			= slide[lang];
				statisticLang 		= statistic[lang];
				categoryLang 		= category[lang];
				menuLang 			= menu[lang];
				productLang 		= product[lang];

				generalLang.service.list = serviceLang;
				generalLang.contact = contactLang;
				generalLang.member = memberLang;
				_.find(menuLang, {'id':'service'}).sub = serviceLang;
				
				setSwitchTitle(lang);
			}
			else {
				//
				generalLang 		= general.vi;
				serviceLang			= service.vi;
				contactLang 		= contact.vi;
				memberLang 			= member.vi;
				projectLang 		= project.vi;
				feedbackLang 		= feedback.vi;
				slideLang 			= slide.vi;
				statisticLang 		= statistic.vi;
				categoryLang 		= category.vi;
				menuLang 			= menu.vi;
				productLang 		= product.vi;

				generalLang.service.list = serviceLang;
				generalLang.contact = contactLang;
				generalLang.member = memberLang;
				_.find(menuLang, {'id':'service'}).sub = serviceLang;
				
				setDefaultTitle();
			}
			headerSection();
			footerSection();
			homeWelcomeSlide();
			aboutUsSection();
			serviceSection();
			clientFeebbackSection();
			homeProductList();
			homeLatesNews();
			contactPageInfor();
			aboutUsPageInfor();
			memberPageList();
			servicePageInfor();
			menuSection();
			changeLanguage();
		}

		// Set switch title
		function setSwitchTitle(lang) {
			// console.log("switch title");
			if(lang == 'en') {
				about = 'About us';
				serviceTitle = "Our Services";
				productTitle = "Our Works";
				readmore = "Read more";
				clientFeed = "Client Feedback";
				latestNews = "Latest News";
				mainOffice = 'Main Office';
				contactUs = 'Contact Us';
				aboutUs = 'About Us';
				importantLink = 'Imporant Links';
				latestPost = 'Latest Posts';
				contactHome = "Home";
				contactContact = "Contact";
				contactPlaceholderName = 'Name';
				contactPlaceholderEmail = 'Email';
				contactPlaceholderEmailMessage = 'Your message...';
				contactSendMassage = "Send Message";
				languageSwitch = 'Language: ';
			}
			else {
				setDefaultTitle();
			}
		}

		// Set default title
		function setDefaultTitle() {
			// console.log("default title");
			about = "Giới thiệu";
			serviceTitle = "Dịch Vụ";
			productTitle = "Các Dự Án";
			readmore = "Xem thêm";
			clientFeed = "Phản Hồi Của Khách Hàng";
			latestNews = "Tin Tức Mới Nhất";
			mainOffice = 'Văn Phòng Chính';
			contactUs = 'Liên Hệ';
			aboutUs = 'Giới Thiệu';
			importantLink = 'Trang Quan Trọng';
			latestPost = 'Bài Viết Mới nhất';
			contactHome = "Trang Chủ";
			contactContact = "Liên Hệ";
			contactPlaceholderName = 'Họ tên';
			contactPlaceholderEmail = 'Email';
			contactPlaceholderEmailMessage = 'Nội dung lời nhắn...';
			contactSendMassage = "Gửi lời nhắn";
			languageSwitch = 'Ngôn ngữ: ';
		}

		// Header
		function headerSection() {
			// console.log("header section");
			$("#mcm-telephone").html('<span id="mcmTelephone"><i class="fa fa-phone"></i>'+generalLang.phone.phone2+'</span>');
			$("#mcm-email").html('<span><i class="fa fa-envelope"></i>'+generalLang.email.email1+'</span>');
			$("#span-language").text(languageSwitch);
		}
	
		// Footer section
		function footerSection() {
			// console.log("footer section");
			$("#h5-main-office").text(mainOffice);
			$("#a-contact-us").text(contactUs);
			$("#h4-about-us").text(aboutUs);
			$("#h4-contact-us").text(contactUs);
			$("#h4-important-link").text(importantLink);
			$("#h4-latest-post").text(latestPost);
			$("#mcm-main-office-address").text(generalLang.office.address1);
			$("#mcm-main-office-phone").text('Phone: '+generalLang.office.phone1);

			// About us
			$("#mcm-about-us").text(generalLang.about.shortDescription1);

			// Contact Us
			$("#mcm-contact-mail-address").html('<i class="icofont-envelope"></i>'+generalLang.email.email2);
			$("#mcm-contact-address").html("<i class='icofont-google-map'></i>"+generalLang.office.address1);
			$("#mcm-contact-phone-number").html('<i class="icofont-phone"></i>'+generalLang.phone.phone2);

			// Important link
			var footerContext = '';
			if(menuLang.length > 0) {
				for(var i = 0; i < menuLang.length; i++) {
					footerContext += '<li><a href="'+menuLang[i].url+'"><i class="icofont-double-right"></i>'+_.upperFirst(_.toLower(menuLang[i].name))+'</a></li>\n';
				}
			}
			$("#ul-important-link").html(footerContext);
		}

		// Welcome Slider
		function homeWelcomeSlide() {
			// console.log("welcome slide");
			if ($('#welcome-slide').length) {
				var sliderContext = '';
				_.forEach(slideLang, function(item, key) {
					var fl = _.random(1,3);
					var str = '';
					switch(fl) {
						case 1:
							str = "float-left";
							break;
						case 2:
							str = "float-right";
							break;
						case 3:
							str = "text-center";
							break;
						default:
							str = "text-center";
							break;
					}
					sliderContext += '<div class="single-slide overlay-bg" style="background-image: url('+item.url+');">';
					sliderContext += '<div class="slide-content"><div class="container"><div class="row">';
					sliderContext += '<div class="col-md-12"><div class="slide-content-area '+str+'"><div class="single-slide-content">';
					sliderContext += '<h2 id="h2-welcome-slide-'+key+'">'+item.title_first+'</h2>';
					sliderContext += '<h1 id="h1-welcome-slide-'+key+'">'+item.title_second+'</h1>';
					sliderContext += '<p id="p-welcome-slide-'+key+'">'+item.content+'</p>';
					sliderContext += '<a href="'+item.readmore+'" class="btn btn-digitalizer eff-1" id="btn-welcome-slide-'+key+'">'+readmore+'</a>';
					sliderContext += '</div></div></div></div></div></div></div>';
				});
				$("#welcome-slide").html(sliderContext);
				$('#welcome-slide').owlCarousel({
					autoplay:false,
					items:1,
					loop:true,
					autoplayHoverPause: false,
					smartSpeed: 500,
					margin:0,
					nav:true,
					navText:['<i class="icofont icofont-arrow-left"></i>','<i class="icofont icofont-arrow-right"></i>'],
					dots:true,
				});
			}
		}

		// About us section
		function aboutUsSection() {
			// console.log("about us section");
			$("#h3-about-us").text(about);
			$("#p-short-description").text(generalLang.about.shortDescription1);
			$("#p-long-description").text(generalLang.about.longDescription1);
			var aboutServiceContextLeft = '';
			var aboutServiceContextRight = '';
			_.forEach(serviceLang, function(item, key) {
				var keyFloor = (key/2) - _.floor(key/2);
				if(keyFloor == 0) {
					aboutServiceContextLeft += '<a href="'+item.url+'" class="about-link"><i class="icofont-double-right"></i>'+item.name+'</a>';
				}
				else {
					aboutServiceContextRight += '<a href="'+item.url+'" class="about-link"><i class="icofont-double-right"></i>'+item.name+'</a>';
				}
			});
			$("#about-service-list-left").html(aboutServiceContextLeft);
			$("#about-service-list-right").html(aboutServiceContextRight);
		}

		// Service
		function serviceSection() {
			// console.log("service section");
			$("#h3-our-service").text(serviceTitle);
			$("#p-service-short-description").text(generalLang.service.shortDescription);

			var ourServiceContext = '';
			_.forEach(serviceLang, function(item, key) {
				ourServiceContext += '<div class="col-lg-4 col-md-6"><div class="digitalizer-service-box service-box-style-1"><div class="overlay"></div><div class="service-box-inner"><div class="service-box-content"><span class="service-icon"><i class="'+item.iconName+'"></i></span><a href="'+item.url+'"><h3> <span class="service-box-title-text">'+item.name+'</span></h3></a><p>'+item.shortDescription1+'</p></div></div></div></div>';
			});
			$("#our-service-list").html(ourServiceContext);
		}

		// Product
		function homeProductList() {
			// console.log("product section");
			$("#h3-our-work").text(productTitle);
			$("#p-our-work").text(generalLang.description.project);
			if ($('.project-wrap').length) {
				var projectContext = '';
				// // console.log("projectLang: ", projectLang);
				_.forEach(projectLang, function(item, key) {
					projectContext += '<div class="single-project" style="background-image: url('+item.image.url+');">';
					projectContext += '<div class="project-content">';
					projectContext += '<h4><a href="'+item.url+'" id="a-project-name-'+key+'">'+item.name+'</a></h4>';
					projectContext += '<p id="p-project-category-'+key+'">'+item.category+'</p>';
					projectContext += '</div></div>';
				});
				$("#slide-project-list").html(projectContext);
				$('.project-wrap').owlCarousel({
					autoplay:false,
					items:4,
					loop:true,
					autoplayHoverPause: false,
					smartSpeed: 500,
					margin:10,
					nav:false,
					dots:true,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:2,
						},
						768:{
							items:3,
						},
						1000:{
							items:4,
						}
					}
				});
			}
		}

		// Client feedback
		function clientFeebbackSection() {
			// console.log("client feedback section");
			$("#h3-client-feedback-title").text(clientFeed);
			$("#p-client-feedback-short").text(generalLang.description.clientFeedBack);
			if ($('.testimonial-wrap').length) {
				var feedbackContext = '';
				_.forEach(feedbackLang, function(item, key) {
					feedbackContext += '<div class="single-testimonial"><div class="testimonial-content">';
					feedbackContext += '<p id="client-feedback-content-'+key+'">'+item.content+'</p>';
					feedbackContext += '</div>';
					feedbackContext += '<div class="testimonial-desc">';
					feedbackContext += '<div class="client-img" id="client-feedback-image-'+key+'"><img src="'+item.avartar.url+'" alt="'+item.avartar.name+'">';
					feedbackContext += '</div>';
					feedbackContext += '<div class="client-desc">';
					feedbackContext += '<h5 id="client-feedback-name-'+key+'">'+item.clientName+'</h5>';
					feedbackContext += '<span id="client-feedback-job-'+key+'">'+item.job+'</span>';
					feedbackContext += '</div></div></div>';
				});
				$("#slide-client-feedback").html(feedbackContext);
				$('.testimonial-wrap').owlCarousel({
					autoplay:false,
					items:2,
					loop:true,
					autoplayHoverPause: false,
					smartSpeed: 500,
					margin:30,
					nav:false,
					dots:true,
					responsiveClass:true,
					responsive:{
						0:{
							items:1,
						},
						600:{
							items:2,
						},
						768:{
							items:2,
						},
						1000:{
							items:2,
						}
					}
				});
			}			
		}

		// Latest news
		function homeLatesNews() {
			// console.log("home lates news");
			$("#h3-latest-news-title").text(latestNews);
			$("#p-latest-news-short").text(generalLang.description.latestNews);			
		}

		// Contact Us Page
		function contactPageInfor() {
			// console.log("contact page infor");
			$("#h3-contact-contact").text(contactContact);
			$("#p-contact-short").text(generalLang.description.contact);
			$("#a-contact-home").text(contactHome);
			$("#li-contact-contact").text(contactContact);
			$("#p-contact-phone-1").text(generalLang.phone.phone1);
			$("#p-contact-phone-2").text(generalLang.phone.phone2);
			$("#p-contact-email-1").text(generalLang.email.email1);
			$("#p-contact-email-2").text(generalLang.email.email2);
			$("#p-contact-address").text(generalLang.office.address1);
			$("#input-contact-user").attr("placeholder", contactPlaceholderName);
			$("#input-contact-email").attr("placeholder", contactPlaceholderEmail);
			$("#input-contact-comment").attr("placeholder", contactPlaceholderEmailMessage);
			$("#button-contact-send-masage").text(contactSendMassage);			
		}

		// About Us Page
		function aboutUsPageInfor() {
			// console.log("about us infor");
			$("#h2-about-us-title").text(generalLang.title.aboutUs);
			$("#p-about-us-short").text(generalLang.description.aboutUs);
			$("#li-about-us-about-us").text(generalLang.title.aboutUs);
			$("#h3-about-us-member-title").text(generalLang.title.member);
			$("#p-about-us-member-short").text(generalLang.description.member);
		}

		// Member List
		function memberPageList() {
			// console.log("member page list");
			var memberContext = '';
			_.forEach(memberLang, function(item, key) {
				memberContext += '<div class="col-lg-3 col-md-6"><div class="team-wrap"><div class="singel-team">';
				memberContext += '<img src="'+item.imageURL+'" alt="'+item.name+'">';
				memberContext += '<ul class="quick-view style-2">';
				memberContext += '<li><a href="#"><i class="icofont-facebook"></i></a></li>';
				memberContext += '<li><a href="#"><i class="icofont-twitter"></i></a></li>';
				memberContext += '<li><a href="#"><i class="icofont-pinterest"></i></a></li>';
				memberContext += '<li><a href="#"><i class="icofont-instagram"></i></a></li>';
				memberContext += '</ul></div><div class="team-inf text-center">';
				memberContext += '<h5><a href="'+item.url+'">'+item.name+'</a></h5>';
				memberContext += '<h6>'+item.job+'</h6></div></div></div>';
			});
			$("#about-member-list").html(memberContext);			
		} 

		// Service Page
		function servicePageInfor() {
			// console.log("service page infor");
			$("#h2-service-title").text(generalLang.title.service);
			$("#p-service-short").text(generalLang.service.shortDescription);
			$("#li-service-service").text(generalLang.title.service);
		}

		// Default menu
		function menuSection() {
			// console.log("menu section");
			var defaultMenuContext = '';
			if(menuLang.length > 0) {
				for(var i = 0; i < menuLang.length; i++) {
					if(typeof menuLang[i].sub !== 'undefined' && menuLang[i].sub.length > 0) {
						defaultMenuContext += '<li><a href="#">'+menuLang[i].name+'<i class="fa fa-angle-down"></i></a><ul>\n';
						for(var j = 0; j < menuLang[i].sub.length; j++) {
							defaultMenuContext += '<li><a href="'+menuLang[i].sub[j].url+'">'+_.toUpper(menuLang[i].sub[j].name)+'</a></li>\n';
						}
						defaultMenuContext += '</ul>\n</li>\n';
					}
					else {
						defaultMenuContext += '<li><a href="'+menuLang[i].url+'">'+menuLang[i].name+'</a></li>\n';
					}
				}
			}
			$("#navigation").html(defaultMenuContext);
		}

		// Mobile menu
		function mobileMenuView() {
			// console.log("mobile view");
			if($('nav.header-nav').length > 0) { 
			    var logoText = $("#main-header .logo").html();
			    $('nav.header-nav').meanmenu({
			        siteLogo: logoText
			    });
			}
		}

		// To change default language to English
		function changeLanguage() {
			// console.log("change language");
			var languageContext = '';
			_.forEach(language, function(item, key) {
				if(localStorage.getItem("letter") != null) {
					if(item.letter == localStorage.getItem("letter")) {
						languageContext += '<option value="'+item.letter+'" selected="selected">'+item.name+'</option>\n';
					}
					else {
						languageContext +='<option value="'+item.letter+'">'+item.name+'</option>\n';
					}
				}
				else {
					if(item.letter == 'vi') {
						languageContext += '<option value="'+item.letter+'" selected="selected">'+item.name+'</option>\n';
					}
					else {
						languageContext +='<option value="'+item.letter+'">'+item.name+'</option>\n';
					}
				}
			});
			$("#z-lang-list").html(languageContext);
		}
		
		// Switch Language content only use in switch language event
		function switchLanguageSlide() {
			// console.log("switch language slide");
			_.forEach(slideLang, function(item, key) {
				// Main
				$(".owl-item #h2-welcome-slide-"+key).each(function() {
					$(this).text(item.title_first);
				});
				$(".owl-item #h1-welcome-slide-"+key).each(function() {
					$(this).text(item.title_second);
				});
				$(".owl-item #p-welcome-slide-"+key).each(function() {
					$(this).text(item.content);
				});
				$(".owl-item #btn-welcome-slide-"+key).each(function() {
					$(this).text(readmore);
				});

				// Cloned
				$(".owl-item.cloned #h2-welcome-slide-"+key).each(function() {
					$(this).text(item.title_first);
				});
				$(".owl-item.cloned #h1-welcome-slide-"+key).each(function() {
					$(this).text(item.title_second);
				});
				$(".owl-item.cloned #p-welcome-slide-"+key).each(function() {
					$(this).text(item.content);
				});
				$(".owl-item.cloned #btn-welcome-slide-"+key).each(function() {
					$(this).text(readmore);
				});
			});
		}

		// Switch Language Product only use in switch language event
		function switchLanguageProduct() {
			// console.log("switch language product");
			$("#h3-our-work").text(productTitle);
			$("#p-our-work").text(generalLang.description.project);
			_.forEach(projectLang, function(item, key) {
				// Main
				$(".owl-item #a-project-name-"+key).each(function() {
					$(this).text(item.name);
				});
				$(".owl-item #p-project-category-"+key).each(function() {
					$(this).text(item.category);
				});

				// Cloned
				$(".owl-item.cloned #a-project-name-"+key).each(function() {
					$(this).text(item.name);
				});
				$(".owl-item.cloned #p-project-category-"+key).each(function() {
					$(this).text(item.category);
				});
			});
		}
		
		// Switch language client feedback only use in switch language event
		function switchLanguageClientFeedback() {
			// console.log("switch language client feedback");
			$("#h3-client-feedback-title").text(clientFeed);
			$("#p-client-feedback-short").text(generalLang.description.clientFeedBack);
			_.forEach(feedbackLang, function(item, key) {
				// Main
				$(".owl-item #client-feedback-content-"+key).each(function() {
					$(this).text(item.content);
				});
				$(".owl-item #client-feedback-name-"+key).each(function() {
					$(this).text(item.clientName);
				});
				$(".owl-item #client-feedback-job-"+key).each(function() {
					$(this).text(item.job);
				});

				// Cloned
				$(".owl-item.cloned #client-feedback-content-"+key).each(function() {
					$(this).text(item.content);
				});
				$(".owl-item.cloned #client-feedback-name-"+key).each(function() {
					$(this).text(item.clientName);
				});
				$(".owl-item.cloned #client-feedback-job-"+key).each(function() {
					$(this).text(item.job);
				});
			});
		}

		// Switch language
		function switchLanguageEvent(lang) {
			if($("#z-lang-list").length > 0) {
				$("#z-lang-list").ddslick({
					onSelected: function (data) {
						// Store language into localStorage
						localStorage.setItem("letter", data.selectedData.value);
						lang = localStorage.getItem("letter");
						generalLang 	= general[lang];
						serviceLang 	= service[lang];
						contactLang 	= contact[lang];
						memberLang 		= member[lang];
						projectLang 	= project[lang];
						feedbackLang 	= feedback[lang];
						slideLang 		= slide[lang];
						statisticLang 	= statistic[lang];
						categoryLang 	= category[lang];
						menuLang 		= menu[lang];
						productLang 	= product[lang];

						generalLang.service.list = serviceLang;
						generalLang.contact = contactLang;
						generalLang.member = memberLang;
						// _.find(menuLang, {'id':'project'}).sub = projectLang;
						// _.find(menuLang, {'id':'member'}).sub = memberLang;
						_.find(menuLang, {'id':'service'}).sub = serviceLang;
						
						// Switch title
						setSwitchTitle(lang);
						
						// Header Section
						headerSection();

						// Footer Section
						footerSection();

						// Slider
						switchLanguageSlide();

						// About us
						aboutUsSection();

						// Service
						serviceSection();

						// Product
						switchLanguageProduct();

						// Client feedback
						switchLanguageClientFeedback();

						// Default menu
						menuSection();

						// Service Page
						servicePageInfor();

						// Home Lates News
						homeLatesNews();

						// Contact Page infor
						contactPageInfor();

						// About us page infor
						aboutUsPageInfor();

						// Member page list
						memberPageList();
					}
				});
			}
		}

		// End Switch Language
		
		// Get data
		function getData() {
			// Get data
			//Get information from JSON files
			
			// ---------------------------------------------------------------------------------------- //
			// Get Language
			language = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/language.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();

			// ---------------------------------------------------------------------------------------- //
			// Get <head> meta data
			meta = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/meta.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Contact List
			contact = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/contact.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();
			
			// ---------------------------------------------------------------------------------------- //
			// Feedback list
			feedback = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/feedback.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Member list
			member = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/member.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Project list
			project = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/project.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Service list
			service = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/service.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Slide
			slide = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/slide.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Statistic
			statistic = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/statistic.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Category list
			category = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/category.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// General
			general = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/general.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();

			// ---------------------------------------------------------------------------------------- //
			// Default menu
			menu = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/menu.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();


			// ---------------------------------------------------------------------------------------- //
			// Product
			product = (function() {
				var result;
				$.ajax({
					type: 'GET',
					url: 'info/product.json',
					dataType: 'json',
					async: false,
					success: function(data) {
						result = data;
					}
				});
				return result;
			})();
		
		}
		// End get data
		
    });

})();