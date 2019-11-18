var CartItem = function (product, amount) {
    var self = this;
    self.Product = ko.observable(product);
    self.Amount = ko.observable(amount);
    self.Cost = ko.computed(function () {
        return self.Product().Price() * self.Amount();
    });
};