describe("Cart - item cost test", function () {
    it("Cart item cost = price * amount", function () {
        var product = new ProductFake(1, 'TestName', 4.55, 100, '');
        var amount = 10;
        var cart_item = new CartItem(product, amount);
        var expectedResult = 45.5;
        var actualResult = cart_item.Cost();
        expect(actualResult).toBe(expectedResult);
    });
});