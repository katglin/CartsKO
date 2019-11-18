var Product = function (id, name, price) {
    var self = this;
    this.Id = ko.observable(id);
    this.Name = ko.observable(name);
    this.Price = ko.observable(price);
    this.AmountInCart = ko.computed(function () {
        if (cartViewModel.Cart() && cartViewModel.Cart().length) {
            var cart_item = cartViewModel.Cart().find(x => x.Product().Name() == self.Name());
            return cart_item ? cart_item.Amount() : 0;
        }
        return 0;
    });
};