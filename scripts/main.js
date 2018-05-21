(function() {
    // $(".sliding-menu").slick({
    //     infinite: false,
    //     focusOnChange: true,
    //     speed: 600,
    //     arrows: false,        
    // })
    
    function initialize() {
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