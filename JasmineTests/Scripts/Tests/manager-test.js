describe("ManagerVM requests products", function () {
    var managerVM;
    var products;

    beforeEach(function () {
        managerVM = new ManagerViewModel();
        managerVM.Items([]);
        products = [];
        spyOn(ApiService, 'GetProducts').and.returnValue(products);
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

describe("ManagerVM gets products", function () {
    var managerVM;
    var products;

    beforeEach(function () {
        var products = [{Id: 1, Name: "TestName", Price: 4.55, Amount: 100, ImagePath: ""}];
        managerVM = new ManagerViewModel();
        managerVM.Items([]);
        spyOn(ApiService, 'GetProducts').and.returnValue(products);
    });


      it("and saves them as Items", function () {
        var expectedResult = [new Product(1, "TestName", 4.55, 100, "")];
        managerVM.getItems();
        expect(managerVM.Items().length).toBe(expectedResult.length);
        expect(ko.toJS(managerVM.Items())).toEqual(ko.toJS(expectedResult));
    });
});

describe("ManagerVM adds a product", function () {
    var managerVM;
    var products;

    beforeEach(function () {
        var initItem = new Product(1, "TestName", 4.55, 100, "");
        managerVM = new ManagerViewModel();
        managerVM.Items().push(initItem);
    });
    
    it("with default params", function () {
        var expectedResult = [
            new Product(1, "TestName", 4.55, 100, ""),
            new Product(-1, "", 0.01, 0, "")];
        expectedResult[1].EditMode = true;
        managerVM.addItem();
        expect(managerVM.Items().length).toBe(expectedResult.length);
        expect(ko.toJS(managerVM.Items())).toEqual(ko.toJS(expectedResult));
    });
});