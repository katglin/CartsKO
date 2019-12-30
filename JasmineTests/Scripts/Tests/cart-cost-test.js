describe("Cart item cost test", function () {
    it("Cart item cost = price * amount", function () {
        var product = new ProductFake(1, 'TestName', 4.55, 100, '');
        var amount = 10;
        var cart_item = new CartItem(product, amount);
        expect(cart_item.Cost()).toBe(45.5);
    });

});