// Binding, init
var cartViewModel = new CartViewModel();
$(document).ready(function () {
    //localStorage.clear();
    ko.applyBindings(cartViewModel);
    cartViewModel.getProducts();
});

// Save chosed data in local storage on page reload/redirect
window.onbeforeunload = function (event) {
    var products = cartViewModel.Cart().map(x => { return x.Product().Name() });
    var amounts = cartViewModel.Cart().map(x => { return x.Amount() });
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('amounts', JSON.stringify(amounts));
};
