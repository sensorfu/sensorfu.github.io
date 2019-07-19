(function () {
    var forEach = function (array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    };

    window.addEventListener('load', function () {
        var PRODUCT_COLLAPSED_CLASS = "product--collapsed";
        var products = document.querySelectorAll(".product");

        forEach(products, function (_index, product) {
            product.classList.add(PRODUCT_COLLAPSED_CLASS);
            var toggle = product.querySelector(".product-details-toggle > .button");
            
            toggle.addEventListener('click', function (evt) {
                evt.preventDefault();
                product.classList.remove(PRODUCT_COLLAPSED_CLASS);
            });
        });
    });
})();