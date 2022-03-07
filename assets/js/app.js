$(document).ready(function () {
	// Navbar start
	// Navbar navbar-button to open navbar menu  in tablet and mobile screen
	$(".navbar-toggler").on("click", function () {
		$(".navbar-collapse").animate(
			{
				left: "0",
			},
			400,
		);
	});
	// Navbar overlay layer on click function handler to close navbar menu  in tablet and mobile screen
	$(".overlay").on("click", function () {
		$(".navbar-collapse").removeClass("show");
		$(".navbar-collapse").animate(
			{
				left: "-100%",
			},
			300,
		);
	});
	// Navbar Close-menu  on click function handler to close navbar menu   in tablet and mobile screen
	$(".close-menu").on("click", function () {
		$(".navbar-collapse").removeClass("show");
		$(".navbar-collapse").animate(
			{
				left: "-100%",
			},
			300,
		);
	});
	// Navbar item on click function handler to open drop menu inside nav item and close other open drop down menu in  other nav item  in tablet and mobile screen
	$(".nav-item.dropdown .open-menu").on("click", function () {
		const dropdown = $(this).parent().parent().find(".dropdown-menu"); //return array of dropdown menu in the nav item
		$(dropdown[0]) //then used dropdown menu only without sub menu in drop menu
			.slideToggle(200) //open/close drop menu with animation SlideToggle
			.parent() //return parent node from tree
			.siblings() //return siblings nodes from tree
			.find(".dropdown-menu") //then find all drop menu in siblings and return array of them
			.slideUp(); //close all  other opened drop menu with animation
	});
	// Navbar sub-menu-item on click function handler to open drop menu inside drop down item i and close other open sub-menu-item in  other nav item  in tablet and mobile screen
	$(".open-sub-menu").on("click", function () {
		$(this)
			.parent()
			.parent()
			.find(".dropdown-menu.sub-menu")
			.slideToggle(200)
			.parent()
			.siblings()
			.find(".dropdown-menu.sub-menu")
			.slideUp();
	});

	//  Navbar function to add class scrolled to make navbar fixed  in big screen only
	const screenWidth = $(window).width(); //get screen size
	if (screenWidth >= 1024) {
		$(window).scroll(function () {
			$(".navbar").toggleClass("scrolled", $(this).scrollTop() > 50);
			$(".btn-scroll-to-top").toggleClass("active", $(this).scrollTop() > 20);
		});
	}
	$(".btn-scroll-to-top").on("click", function () {
		$("html").animate({ scrollTop: 0 }, 500);
	});
	//  owl-carouse function
	try {
		$("#Homepage .top-instructor .owl-carousel").owlCarousel({
			loop: true,
			margin: 20,
			responsiveClass: true,
			nav: true,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplaySpeed: 1000,
			smartSpeed: 1000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
					dotsEach: true,
				},
			},
		});
	} catch (e) {
		console.log(e.message);
	}
	try {
		$("#About .students-reviews .owl-carousel").owlCarousel({
			rewind: true,
			autoplayHoverPause: true,
			margin: 10,
			responsiveClass: true,
			nav: true,
			autoplay: true,
			autoplaySpeed: 500,
			smartSpeed: 500,
			dots: false,
			dotsEach: false,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 3,
				},
			},
		});
	} catch (e) {
		console.log(e.message);
	}
	
	$("#Courses-grid-style-page .view-style .list-view").click(function () {
		$(this).parent().children().removeClass("active");
		$(this).addClass("active");
		if (screenWidth > 576) {
			$(".courses")
				.addClass("list")
				.find(".course-items ")
				.addClass("col-md-12")
				.removeClass("col-md-6");
		}
	});
	$("#Courses-grid-style-page .view-style .grid-view").click(function () {
		$(this).parent().children().removeClass("active");
		$(this).addClass("active");
		if (screenWidth > 576) {
			$(".courses")
				.removeClass("list")
				.find(".course-items ")
				.addClass("col-md-6")
				.removeClass("col-md-12 ");
		}
	});
	new WOW().init();
});
