"use strict";$(document).ready(function(){$(window).scroll(function(){var l=$(window).scrollTop();l>=150?$(".brand-logo__img").addClass("brand-logo__img--hide"):$(".brand-logo__img").removeClass("brand-logo__img--hide"),l<=100?$(".brand-logo__img").addClass("scroll"):$(".brand-logo__img").removeClass("scroll"),l>=150?$(".brand-name__title").addClass("brand-name__title--scroll-up"):$(".brand-name__title").removeClass(".brand-name__title--scroll-down")})});