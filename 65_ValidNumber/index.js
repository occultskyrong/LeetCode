/**
 * Created by zhangrz on 2018/1/9.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (!s) { // 判断null
        return false;
    }
    s = s.trim();// 先trim,去掉首尾空字符
    if (s.length === 0) {// 判断是否为空
        return false;
    }
    if (parseInt(s).toString().length === s.length) {// 判断整型
        return true;
    }
    // 判断浮点型
    // 判断科学计数法
    return false;
};

function test(num, str, boo) {
    const result = isNumber(str) !== boo;
    if (result) {
        console.error('---- 测试失败', num, str);
    } else {
        // console.info('---- 测试成功', num, str);
    }
}

test(1, "123", true);
test(2, " 123 ", true);
test(3, "0", true);
test(4, "0123", true);  //Cannot agree
test(5, "00", true);  //Cannot agree
test(6, "-10", true);
test(7, "-0", true);
test(8, "123.5", true);
test(9, "123.000000", true);
test(10, "-500.777", true);
test(11, "0.0000001", true);
test(12, "0.00000", true);
test(13, "0.", true);  //Cannot be more disagree!!!
test(14, "00.5", true);  //Strongly cannot agree
test(15, "123e1", true);
test(16, "1.23e10", true);
test(17, "0.5e-10", true);
test(18, "1.0e4.5", false);
test(19, "0.5e04", true);
test(20, "12 3", false);
test(21, "1a3", false);
test(22, "", false);
test(23, "     ", false);
test(24, null, false);
test(25, ".1", true); //Ok, if you say so
test(26, ".", false);
test(27, "2e0", true);  //Really?!
test(28, "+.8", true);
test(29, " 005047e+6", true);
