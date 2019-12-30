describe("Utils - date helper", function () {
    it("converts /Date(int)/ to local date en-US format", function () {
        var intDate = '/Date(1575956105343)/';
        expect(DateHelper.IntToDateFormat(intDate)).toBe('12/10/2019, 7:35:05 AM');
    });
});