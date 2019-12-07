var OrderViewModel = function () {
    var self = this;
    self.Orders = ko.observableArray([]);

    self.getOrders = function () {
        $.ajax({
          url: "/Order/GetOrders",
          type: "get",
          data: null,
          success: function(response) {
            $.each(response, function (key, value) {
                self.Orders.push(new OrderItem(value));
            });
          }
        });
    };
}