function getNowDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = "-";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour = date.getHours()
    var min = date.getMinutes()
    var sec = date.getSeconds()
    if (month >= 0 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (min >= 0 && min <= 9) {
        min = "0" + min;
    }
    if (sec >= 0 && sec <= 9) {
        sec = "0" + sec;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + "-" + hour + seperator2 + min
            + seperator2 + sec;
    return currentdate;
}