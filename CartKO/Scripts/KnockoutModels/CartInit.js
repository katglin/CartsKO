// Binding, init
$(document).ready(function () {
    //localStorage.clear();
    ko.applyBindings(cartViewModel);
    cartViewModel.customerVM.getProducts();
    cartViewModel.managerVM.getItems();
    cartViewModel.orderVM.getOrders();
});

// Save chosed data in local storage on page reload/redirect
window.onbeforeunload = function (event) {
    var products = cartViewModel.customerVM.Cart().map(x => { return x.Product().Name() });
    var amounts = cartViewModel.customerVM.Cart().map(x => { return x.Amount() });
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('amounts', JSON.stringify(amounts));
};
