var Product = function (id, name, price, amount, imagePath) {
    var self = this;

    this.Id = ko.observable(id);
    this.Name = ko.observable(name);
    this.Price = ko.observable(price.toFixed(2));
    this.EditMode = ko.observable(false);


    this.ImagePath = ko.observable(imagePath);

    this.Amount = ko.observable(amount);

    this.AmountInCart = ko.computed(function () {
        if (cartViewModel.customerVM.Cart() && cartViewModel.customerVM.Cart().length) {
            var cart_item = cartViewModel.customerVM.Cart().find(x => x.Product().Name() == self.Name());
            return cart_item ? cart_item.Amount() : 0;
        }
        return 0;
    });
};