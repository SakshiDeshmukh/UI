var msg = 'hello';
console.log(msg);
function getdata(msg) {
    if (msg === void 0) { msg = 'helloo how are you'; }
    console.log(msg);
}
getdata();
function getmsg(msg) {
    console.log(msg);
}
getmsg('hello how are you...ready to go!!!!!');
var execute = function (action, x, y) {
    var result = 0;
    switch (action) {
        case 'ADD':
            result = _add(x, y);
    }
    return result;
};
var _add = function (x, y) {
    return x + y;
};
var _action = process.argv[2];
var _x = process.argv[3];
var _y = process.argv[4];
var result = execute(_action, _x, _y);
