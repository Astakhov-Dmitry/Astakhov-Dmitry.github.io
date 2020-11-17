$(function () {
    const wrapper = $('#wrapper');
    const content__leftinnerOffset = $('#content__left-inner').offset().top;
    const asideFixedTopClassname = 'aside-fixed--top';

$(window).scroll(function () {
    const scrolled = $(this).scrollTop();  

    if (scrolled > content__leftinnerOffset) {

        wrapper.addClass(asideFixedTopClassname);

    } else if (scrolled < content__leftinnerOffset) {
        wrapper.removeClass(asideFixedTopClassname);
    }

});
});