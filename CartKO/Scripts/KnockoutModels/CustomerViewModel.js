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

    /* Filters */

    self.SearchText = ko.observable("");
    self.SelectedMinPrice = ko.observable();
    self.SelectedMaxPrice = ko.observable();
    
    self.MinPrice = ko.computed(function () {
        var min = Math.min(...self.Products().map(p => p.Price()));
        if (!min || min == Infinity) min = 0;
        return min;
    });
    self.MaxPrice = ko.computed(function () {
        var max = Math.max(...self.Products().map(p => p.Price()));
        if (!max || max == -Infinity) max = 100000;
        return max;
    });

    /* Methods */

    self.getProducts = function () {
        self.Products.removeAll();
        if (!self.SelectedMinPrice()) {
            self.SelectedMinPrice(0);
        }
        if (!self.SelectedMaxPrice()) {
            self.SelectedMaxPrice(100000);
        }
        var filter = { searchText: self.SearchText(), minPrice: self.SelectedMinPrice(), maxPrice: self.SelectedMaxPrice() };
        var response = ApiService.GetProducts(filter);
        $.each(response, function (key, value) {
            self.Products.push(new Product(value.Id, value.Name, value.Price, value.Amount, value.ImagePath));
        });
        self.SelectedMinPrice(self.MinPrice());
        self.SelectedMaxPrice(self.MaxPrice());
        if (localStorage.getItem('products') !== 'null' && JSON.parse(localStorage.getItem('products')).length && self.Products().length && self.Cart().length == 0) {
            var products = JSON.parse(localStorage.getItem('products'));
            var amounts = JSON.parse(localStorage.getItem('amounts'));
            $(products).each(function (index, product_name) {
                for (i = 0; i < amounts[index]; i++) {
                    var product = cartViewModel.customerVM.Products().find(x => x.Name() == product_name);
                    if (product) {
                        cartViewModel.customerVM.addToCart(product, amounts[index]);
                    }
                    else {
                        localStorage.removeItem(product_name)
                    }
                }
            });
        }
    };

    self.productInCart = function(product) {
        return self.Cart().find(x => x.Product().Name() == product.Name());
    }

    self.addToCart = function (product, event) {
        var cart_item = self.productInCart(product);
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
        var username = self.Username();
        var order = {
            cart: self.Cart().map(item => {
                var cart_item = {};
                cart_item.ProductId = item.Product().Id;
                cart_item.Amount = item.Amount;
                return cart_item;
            }),
            username: username
        }
        ApiService.CreateOrder(order);
        alert(`Thanks, ${username}, you order will be processed within 10 minutes.`);
        self.resetCart();
        $('#contacts').modal('hide');
    };
}