"use strict";

// JQUERY

$(document).ready(function(){

    $(window).scroll(function() {
        var o = $(window).scrollTop();
  o >= 150 ? $(".brand-logo__img").addClass("brand-logo__img--hide") : $(".brand-logo__img").removeClass("brand-logo__img--hide")
  o >= 150 ? $(".brand-name__title").addClass("brand-name__title--scroll-up") : $(".brand-name__title").removeClass(".brand-name__title--scroll-down")
    })
});

