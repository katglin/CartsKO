var OrderItem = function (order) {
    var self = this;
    self.Username = ko.observable(order.Username);
    self.ProductList = ko.observable(order.ProductList);
    self.TotalPrice = ko.observable(order.TotalPrice);
    self.Status = ko.observable(order.Status);

    var dateFormated =  new Date(parseInt(order.CreatedDate.replace("/Date(", "").replace(")/")));
    self.CreatedDate = ko.observable(dateFormated.toLocaleString("en-US"));
};