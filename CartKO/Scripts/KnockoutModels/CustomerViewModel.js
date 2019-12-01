var CustomerViewModel = function () {
    var self = this;
    self.Products = ko.observableArray([]);
    self.Cart = ko.observableArray([]); // cart items
    self.Username = ko.observable("");

    self.TotalCost = ko.computed(function () {
        var subtotal = 0;
        $(self.Cart()).each(function (index, cart_item) {
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
        $.ajax({
          url: "/Product/Get",
          type: "get",
          data: {},
          success: function(response) {
            $.each(response, function (key, value) {
                self.Products.push(new Product(value.Id, value.Name, value.Price, value.Amount, value.ImagePath));
            });

            if (localStorage.getItem('products') !== 'null' && JSON.parse(localStorage.getItem('products')).length && self.Products().length) {
                var products = JSON.parse(localStorage.getItem('products'));
                var amounts = JSON.parse(localStorage.getItem('amounts'));
                $(products).each(function (index, product_name) {
                    for (i = 0; i < amounts[index]; i++) {
                        cartViewModel.customerVM.addToCart(cartViewModel.customerVM.Products().find(x => x.Name() == product_name), amounts[index]);
                    }
                });
            }
          }
        });
    };

    self.addToCart = function (product, event) {
        var cart_item = self.Cart().find(x => x.Product().Name() == product.Name());
        // Check if available - move to another method
        if (cart_item && cart_item.Amount() == product.Amount()) {
            alert("Sorry, you have already chosen all available " + product.Name() + ". Try to order more later");
            return;
        }
        else if (product.Amount() == 0) {
            alert("Sorry, no " + product.Name() + " left for now. Try to order it later");
            return;
        }

        // Add to cart
        if (!cart_item) {
            var cart_item = new CartItem(product, 1);
            self.Cart.push(cart_item);
        }
        else {
            cart_item.Amount(cart_item.Amount() + 1);
        }
    };

    self.removeFromCart = function (product, event) {
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

    self.resetCart = function (event) {
        self.Cart.removeAll();
    };

    self.startOrder = function (event) {
        $('#contacts').modal('show');
    };

    self.finishOrder = function (event) {
        var username = $(this).data('username)');
        $.ajax({
            url: "/Order/Buy",
            type: "post",
            data: { 
                cart: self.Cart,
                username: username
            },
            success: function(response) {
                alert("Thanks, you order will be processed within 10 minutes.");
                //self.resetCart();
            }
        });
    };
}