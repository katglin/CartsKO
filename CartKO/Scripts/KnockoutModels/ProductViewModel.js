﻿// Models
var Product = function(id, name, price) {
  var self= this;
  this.Id = ko.observable(id);
  this.Name = ko.observable(name);
  this.Price = ko.observable(price);
  this.AmountInCart = ko.computed(function(){
    if (cartViewModel.Cart() && cartViewModel.Cart().length) {
        var cart_item = cartViewModel.Cart().find(x => x.Product().Name() == self.Name());
        return cart_item ? cart_item.Amount() : 0;
    }
    return 0;
  });
};

var CartItem = function(product, amount) {
  var self= this;
    self.Product = ko.observable(product);
    self.Amount = ko.observable(amount);
    self.Cost = ko.computed(function(){
        return self.Product().Price() * self.Amount();
  });
};

// ViewModel
var CartViewModel = function() {
    var self = this;
    self.Products = ko.observableArray([]);
    self.Cart = ko.observableArray([]); // cart items
    self.TotalCost = ko.computed(function(){
        var subtotal = 0;
        $(self.Cart()).each(function(index, cart_item){
            subtotal += cart_item.Cost();
        });
        return subtotal.toFixed(2);
    });
    self.TotalAmount = ko.computed(function () {
        var subamount = 0;
        $(self.Cart()).each(function (index, cart_item) {
            subamount += cart_item.Amount();
        });
        return subamount;
    });

    self.getProducts = function () {
        self.Products.removeAll();

        $.getJSON('/api/product', function (data) {
            $.each(data, function (key, value) {
                self.Products.push(new Product(value.Id, value.Name, value.Price));
            });

            if (localStorage.getItem('products') !== 'null' && JSON.parse(localStorage.getItem('products')).length && self.Products().length) {
                var products = JSON.parse(localStorage.getItem('products'));
                var amounts = JSON.parse(localStorage.getItem('amounts'));
                $(products).each(function (index, product_name) {
                    for (i = 0; i < amounts[index]; i++) {
                        cartViewModel.addToCart(cartViewModel.Products().find(x => x.Name() == product_name), amounts[index]);
                    }
                });
            }
        });
    };

    self.addToCart = function (product, event) {
        var cart_item = self.Cart().find(x => x.Product().Name() == product.Name());
        if (!cart_item) {
            var cart_item = new CartItem(product, 1);
            self.Cart.push(cart_item);
        }
        else {
            cart_item.Amount(cart_item.Amount() + 1);
        }
    };
 
    self.removeFromCart = function(product, event) {
        var cart_item = self.Cart().find(x => x.Product().Name() == product.Name());
        if (!cart_item) {
            return;
        }
        else if (cart_item.Amount() == 1) {
            self.Cart.remove(cart_item);
        }
        else {
            cart_item.Amount(cart_item.Amount() - 1);
        }
    };
}

// Binding, init
var cartViewModel = new CartViewModel();
$(document).ready(function () {
    //localStorage.clear();
    ko.applyBindings(cartViewModel);
    cartViewModel.getProducts();
});

window.onbeforeunload = function (event) {
    var products = cartViewModel.Cart().map(x => { return x.Product().Name() });
    var amounts = cartViewModel.Cart().map(x => { return x.Amount() });
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('amounts', JSON.stringify(amounts));
};
