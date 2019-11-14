var productViewModel = new ProductList();

function ProductList() {
    var self = this;
    self.products = ko.observableArray([]);
    self.getProducts = function () {
        self.products.removeAll();

        $.getJSON('/api/product', function (data) {
            $.each(data, function (key, value) {
                self.products.push(new Product(value.Id, value.Name, value.Price));
            });
        });
    };
}

// on document ready
$(document).ready(function () {
    ko.applyBindings(productViewModel);
    productViewModel.getProducts();
});

class Product {
    constructor(Id, Name, Price) {
        this.Id = Id;
        this.Name = Name;
        this.Price = Price;
    }
}