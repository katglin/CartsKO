var ManagerViewModel = function () {
    var self = this;
    self.Items = ko.observableArray([]);
    self.Editable = ko.observable();
    self.Filedata = ko.observable();

    self.TotalItemsAmount = ko.computed(function () {
        return self.Items().length;
    });

    self.getItems = function () {
        self.Items.removeAll();
        var filter = null;
        var response = ApiService.GetProducts(filter);
        $.each(response, function (key, value) {
            self.Items.push(new Product(value.Id, value.Name, value.Price, value.Amount, value.ImagePath));
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
        var id = product.Id();
        var response = ApiService.DeleteProduct(id);
        if (response == "1") {
            alert("The product was successfully deleted");
            self.Items(self.Items().filter(item => item.Id() != product.Id()));
        }
        else {
            alert('You can\'t delete a product which was already bought by someone');
        }
    };

    self.saveItem = function (product, event) {
        var item = self.Items().find(item => item.Id() == product.Id());
        if (self.Filedata()) {
            item.ImagePath("/Images/" + self.Filedata().name);
            // Upload product image
            self.uploadImage(item);
        }
        ApiService.CreateProduct(item);
        item.EditMode(false);
    };

    // save selected image to file system and its path to database
    self.uploadImage = function (item) {
        var formdata = new FormData();
        formdata.append(self.Filedata().name, self.Filedata());
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/Product/UploadImage');
        xhr.send(formdata);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText);
                if (self.Filedata()) {
                    item.ImagePath("/Images/" + self.Filedata().name);
                    self.Filedata(null);
                }
            }
        }
    }

    // display selected image in UI
    self.loadImage = function (fileData) {
        self.Filedata(fileData);
        var reader = new FileReader();
        reader.onload = function (e) {
            var currentItem = self.Items().find(item => item.Id() == self.Editable());
            currentItem.ImagePath(e.target.result);
        }
        reader.readAsDataURL(fileData);
    };
}