var OrderViewModel = function () {
    var self = this;
    self.Orders = ko.observableArray([]);

    self.getOrders = function () {
        var result = ApiService.GetOrders();
        $.each(result, function (key, value) {
            self.Orders.push(new OrderItem(value));
        });
    };
}