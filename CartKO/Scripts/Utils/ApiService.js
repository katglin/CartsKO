class ApiService {
    // products
    static GetProducts(filter) {
        var result = $.ajax({
            url: "/Product/Get",
            type: "get",
            async: false,
            data: filter,
        });
        return result.responseJSON;
    }

    static CreateProduct(product) {
        $.ajax({
            url: "/Product/Save",
            type: "post",
            data: {
                product: product
            }
        });
    }

    static DeleteProduct(productId) {
        var result = $.ajax({
            url: "/Product/Delete",
            type: "post",
            async: false,
            data: { id: productId},
        });
        return result.responseText;
    }

    // Orders
    static GetOrders() {
        var result = $.ajax({
            url: "/Order/GetOrders",
            type: "get",
            data: null,
            async: false
        });
        return result.responseJSON;
    }

    static CreateOrder(order) {
        $.ajax({
            url: "/Order/Buy",
            type: "post",
            data: order
        });
    }
}
