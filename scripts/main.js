(function() {

    $('.nav-carousel').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    function animateLogo() {
        TweenMax.to(document.querySelector(".logo"), 4, { "background-color": "#8B6969" });
    };
    
    function initialize() {
        animateLogo();
        var items = document.querySelectorAll(".menu-item");
        for ( var i = 0; i < items.length; i++ ) {
            var item = items[i];
            item.addEventListener("click", showContent.bind(null, item.getAttribute("data-item")));
        }
    };

    function showContent(item) {
        console.log(item);
    }

    document.addEventListener("DOMContentLoaded", initialize);
})();