function get_date_str() {
    function fill_length(str, length) {
        str += '';
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    date = new Date();
    date_FullYear = fill_length(date.getFullYear(), 4);
    date_Month = fill_length((1 + date.getMonth()), 2);
    date_Date = fill_length(date.getDate(), 2);
    date_Hours = fill_length(date.getHours(), 2);
    date_Minutes = fill_length(date.getMinutes(), 2);
    date_Seconds = fill_length(date.getSeconds(), 2);
    date_Milliseconds = fill_length(date.getMilliseconds(), 3);
    date = date_FullYear + '-' + date_Month + '-' + date_Date + '_' + date_Hours + '-' + date_Minutes + '-' + date_Seconds + '.' + date_Milliseconds;
    return date;
}

// better for read with decimal
function get_date_str() {
    function fill_length(str, length) {
        str += '';
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    date = new Date();
    date_FullYear = fill_length(date.getFullYear(), 4);
    date_Month = fill_length((1 + date.getMonth()), 2);
    date_Date = fill_length(date.getDate(), 2);
    date_Hours = fill_length(date.getHours(), 2);
    date_Minutes = fill_length(date.getMinutes(), 2);
    date_Seconds = fill_length(date.getSeconds(), 2);
    date_Milliseconds = fill_length(date.getMilliseconds(), 3);
    date = date_FullYear + '-' + date_Month + '-' + date_Date + ' ' + date_Hours + ':' + date_Minutes + ':' + date_Seconds + '.' + date_Milliseconds;
    return date;
}



// better for read without decimal
function get_date_str() {
    function fill_length(str, length) {
        str += '';
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }
    date = new Date();
    date_FullYear = fill_length(date.getFullYear(), 4);
    date_Month = fill_length((1 + date.getMonth()), 2);
    date_Date = fill_length(date.getDate(), 2);
    date_Hours = fill_length(date.getHours(), 2);
    date_Minutes = fill_length(date.getMinutes(), 2);
    date_Seconds = fill_length(date.getSeconds(), 2);
    date = date_FullYear + '-' + date_Month + '-' + date_Date + ' ' + date_Hours + ':' + date_Minutes + ':' + date_Seconds;
    return date;
}