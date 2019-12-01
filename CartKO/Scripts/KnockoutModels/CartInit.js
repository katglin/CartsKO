// Binding, init
var cartViewModel = { 
    customerVM : new CustomerViewModel(),
    managerVM : new ManagerViewModel()
}
$(document).ready(function () {
    //localStorage.clear();
    ko.applyBindings(cartViewModel);
    cartViewModel.customerVM.getProducts();
    cartViewModel.managerVM.getItems();
});

// Save chosed data in local storage on page reload/redirect
window.onbeforeunload = function (event) {
    var products = cartViewModel.customerVM.Cart().map(x => { return x.Product().Name() });
    var amounts = cartViewModel.customerVM.Cart().map(x => { return x.Amount() });
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('amounts', JSON.stringify(amounts));
};
