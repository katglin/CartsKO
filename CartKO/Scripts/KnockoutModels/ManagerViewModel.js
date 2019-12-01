var ManagerViewModel = function () {
    var self = this;
    self.Items = ko.observableArray([]);
    self.Editable = ko.observable();

    self.TotalItemsAmount = ko.computed(function () {
        return self.Items().length;
    });

    self.getItems = function () {
        self.Items.removeAll();
        $.ajax({
          url: "/Product/Get",
          type: "get",
          data: null,
          success: function(response) {
            $.each(response, function (key, value) {
                self.Items.push(new Product(value.Id, value.Name, value.Price, value.Amount, value.ImagePath));
            });
          }
        });
    };

    self.addItem = function (event) {
        if(!self.Items().find(item => item.Id() == -1)) {
        var newItem = new Product(-1, "", 0.01, 0, "");
        self.Items.push(newItem);
        self.editItem(newItem);
        }

        var scrollingElement = (document.scrollingElement || document.body);
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    };

    self.editItem = function (product, event) {
        if(self.Editable()) {
            self.Items().find(item => item.Id() == self.Editable()).EditMode(false);
        }
        self.Editable(product.Id());
        self.Items().find(item => item.Id() == product.Id()).EditMode(true);
    };

    self.removeItem = function (product, event) {
        $.ajax({
          url: "/Product/Delete",
          type: "post",
          data: { 
            id: product.Id(),
          },
          success: function(response) {
              if(response == 'True') {
                  alert("The product was not bought before. It was successfully deleted");
                  self.Items(self.Items().filter(item => item.Id() != product.Id()));
              }
              else {
                  alert('You can\'t delete a product which was already bought by someone');
              }
          },
          error: function(xhr) {
              alert('You can\'t delete a product which was already bought by someone');
          }
        });
    };

    self.saveItem = function (product, event) {
        var item = self.Items().find(item => item.Id() == product.Id());
        item.EditMode(false);
        $.ajax({
          url: "/Product/Save",
          type: "post",
          data: { 
            product: item,
          }
        });
    };
}
