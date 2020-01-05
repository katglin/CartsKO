describe("Customer has a cart", function () {
    beforeEach(function () {
        customerVM = new CustomerViewModel();
        customerVM.Products([]);
        customerVM.Cart([]);
    });

    it("with total cost & amount calculated for 1 product", function () {
        var product = new ProductFake(1, 'TestName', 4.5, 100, '');
        var amount = 2;
        var cart_item = new CartItem(product, amount);
        customerVM.Cart.push(cart_item);

        var expectedResult = 9;
        var actualResult = customerVM.TotalCost();
        expect(actualResult).toBe(expectedResult.toFixed(2));
        expect(customerVM.TotalAmount()).toBe(2);
    });

    it("with total cost & amount calculated for several products", function () {
        customerVM.Cart.push(
            new CartItem(new ProductFake(1, 'TestName1', 4.5, 100, ''), 2),
            new CartItem(new ProductFake(2, 'TestName2', 2.0, 100, ''), 5)
        )
        var expectedResult = 19;
        var actualResult = customerVM.TotalCost();
        expect(actualResult).toBe(expectedResult.toFixed(2));
        expect(customerVM.TotalAmount()).toBe(7);
    });
});

describe("Customer has a filter", function () {
    beforeEach(function () {
        customerVM = new CustomerViewModel();
        customerVM.Products.push(
            new ProductFake(1, 'TestName1', 4.5, 100, ''),
            new ProductFake(2, 'TestName2', 2.0, 100, '')
        );
    });

    it("which min value depends on available products", function () {
        var expectedResult = 2.0;
        var actualResult = customerVM.MinPrice();
        expect(actualResult).toBe(expectedResult);
    });

    it("which max value depends on available products", function () {
        var expectedResult = 4.5;
        var actualResult = customerVM.MaxPrice();
        expect(actualResult).toBe(expectedResult);
    });
});

describe("Customer adds products to cart", function () {
    beforeEach(function () {
        customerVM = new CustomerViewModel();
        customerVM.Products.push(
            new Product(1, 'TestName1', 4.5, 100, ''),
            new Product(2, 'TestName2', 2.0, 100, '')
        );
        customerVM.Cart.push(
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 2)
        );
    });

    it("if added - increases amount", function () {
        var productToAdd = new Product(2, 'TestName2', 2.0, 100, '');
        customerVM.addToCart(productToAdd);
        var expected = [
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 2),
            new CartItem(new Product(2, 'TestName2', 2.0, 100, ''), 1)]
        expect(ko.toJS(customerVM.Cart())).toEqual(ko.toJS(expected));
    });

    it("if not added yet - add", function () {
        var productToAdd = new Product(1, 'TestName1', 4.5, 100, '');
        customerVM.addToCart(productToAdd);
        var expected = [
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 3)]
        expect(ko.toJS(customerVM.Cart())).toEqual(ko.toJS(expected));
    });
});

describe("Customer removes products from cart", function () {
    beforeEach(function () {
        customerVM = new CustomerViewModel();
        customerVM.Products.push(
            new Product(1, 'TestName1', 4.5, 100, ''),
            new Product(2, 'TestName2', 2.0, 100, '')
        );
        customerVM.Cart.push(
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 2),
            new CartItem(new Product(2, 'TestName2', 2.0, 100, ''), 1)
        );
    });

    it("if last item - completely removes", function () {
        var productToRemove = new Product(2, 'TestName2', 2.0, 100, '');
        customerVM.removeFromCart(productToRemove);
        var expected = [
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 2)
        ]
        expect(ko.toJS(customerVM.Cart())).toEqual(ko.toJS(expected));
    });

    it("if not last one - descreases amount", function () {
        var productToRemove = new Product(1, 'TestName1', 4.5, 100, '');
        customerVM.removeFromCart(productToRemove);
        var expected = [
            new CartItem(new Product(1, 'TestName1', 4.5, 100, ''), 1),
            new CartItem(new Product(2, 'TestName2', 2.0, 100, ''), 1)
        ]
        expect(ko.toJS(customerVM.Cart())).toEqual(ko.toJS(expected));
    });
});