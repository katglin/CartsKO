var OrderItem = function (order) {
    var self = this;
    self.Username = ko.observable(order.Username);
    self.ProductList = ko.observable(order.ProductList);
    self.TotalPrice = ko.observable(order.TotalPrice);
    self.Status = ko.observable(order.Status);
    self.CreatedDate = ko.observable(DateHelper.IntToDateFormat(order.CreatedDate));
};