var ProductFake = function (id, name, price, amount, imagePath) {
    var self = this;
    this.Id = ko.observable(id);
    this.Name = ko.observable(name);
    this.Price = ko.observable(price.toFixed(2));
    //this.EditMode = ko.observable(false);
    this.ImagePath = ko.observable(imagePath);
    this.Amount = ko.observable(amount);
};