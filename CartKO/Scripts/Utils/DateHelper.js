class DateHelper {
    static IntToDateFormat(date) {
        if (date) {
            var dateFormated = new Date(parseInt(date.replace("/Date(", "").replace(")/")));
            if (dateFormated != 'Invalid Date') {
                return dateFormated.toLocaleString("en-US");
            }
        }
        return 'not specified';
    }
}