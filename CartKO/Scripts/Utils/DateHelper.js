class DateHelper {
    static IntToDateFormat(date) {
        var dateFormated = new Date(parseInt(date.replace("/Date(", "").replace(")/")));
        return dateFormated.toLocaleString("en-US");
    }
}