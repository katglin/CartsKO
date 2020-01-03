describe("Utils - date helper", function () {
    it("converts /Date(int)/ to local date en-US format", function () {
        var intDate = '/Date(1575956105343)/';
        var actualResult = DateHelper.IntToDateFormat(intDate);
        var expectedResult = '12/10/2019, 7:35:05 AM';
        expect(actualResult).toBe(expectedResult);
    });

    it("converts raw int to local date en-US format", function () {
        var intDate = '1575956105343';
        var actualResult = DateHelper.IntToDateFormat(intDate);
        var expectedResult = '12/10/2019, 7:35:05 AM';
        expect(actualResult).toBe(expectedResult);
    });

    // check for incorrect input data
    it("converts empty date to string message", function () {
        var intDate = null;
        var actualResult = DateHelper.IntToDateFormat(intDate);
        var expectedResult = 'not specified';
        expect(actualResult).toEqual(expectedResult);
    });

    it("converts wrong date to string message", function () {
        var intDate = 'fwewf';
        var actualResult = DateHelper.IntToDateFormat(intDate);
        var expectedResult = 'not specified';
        expect(actualResult).toEqual(expectedResult);
    });

    // compares dates in general, not related to specific string format
    it("returns right date", function () {
        var intDate = '1575956105343';
        var resultString = DateHelper.IntToDateFormat(intDate);
        var resultDate = new Date(resultString);
        var expectedDate = new Date('12/10/2019, 7:35:05 AM');
        expect(resultDate).toEqual(expectedDate);
    });
});