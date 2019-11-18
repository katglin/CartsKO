var CartViewModel = function () {
    var self = this;
    self.Products = ko.observableArray([]);
    self.Cart = ko.observableArray([]); // cart items
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
}