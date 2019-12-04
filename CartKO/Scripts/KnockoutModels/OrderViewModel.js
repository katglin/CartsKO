var OrderViewModel = function () {
    var self = this;
    self.Orders = ko.observableArray([]);

    self.getOrders = function () {
        $.ajax({
          url: "/Order/GetOrders",
          type: "get",
          data: null,
          success: function(response) {
            //$.each(response, function (key, value) {
            //    self.Items.push(new Product(value.Id, value.Name, value.Price, value.Amount, value.ImagePath));
            //});
          }
        });
    };
}