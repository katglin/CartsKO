describe("ManagerVM gets products", function () {
    var managerVM;
    var products;

    beforeEach(function () {
        managerVM = new ManagerViewModel();
        managerVM.Items([]);
        products = [];
        spyOn(ApiService, 'GetProducts').and.returnValue(products);
    });

    afterEach(function () {
    });

    it("by calling Product API without filter", function () {
        managerVM.getItems();
        expect(ApiService.GetProducts).toHaveBeenCalled();
        expect(ApiService.GetProducts).toHaveBeenCalledWith(null);
    });

    it("if no products - Items is null", function () {
        var expectedResult = [];
        managerVM.getItems();
        expect(managerVM.Items().length).toBe(0);
        expect(managerVM.Items()).toEqual(expectedResult);
    });
});