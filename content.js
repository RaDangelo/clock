(function startTime() {
    var today = new Date();
    let h = today.getHours().toString();
    let m = today.getMinutes().toString();
    let s = today.getSeconds().toString();
    document.getElementById('clock').innerHTML = checkTime(today.getDate().toString()) + '/' + checkTime(today.getMonth().toString()) +
        '/' + today.getFullYear() + ' - ' + checkTime(h) + ':' + checkTime(m) + ':' + checkTime(s);
    var t = setTimeout(startTime.bind(this), 500);
})();

function checkTime(i) {
    if (parseFloat(i) < 10) {
        i = '0' + i;
    };
    return i;
}