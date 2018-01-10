/**
 * Created by zhangrz on 2018/1/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

/**
 * 计算最长串
 * 1、拆成char的数组
 * 2、遍历数组A,放入数组B,B中没有则写入B;有则中断,下一位开始判断
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const length = s.length;
    let max = ''; // 最长的串
    let target = '';
    if (length === 1) {
        return length;
    }
    for (let i = 0; i < length; i++) {
        const iChar = s.substr(i, 1);
        if (target.length > max.length) {
            max = target;
        }
        target = iChar;
        for (let j = i + 1; j < length; j++) {
            const jChar = s.substr(j, 1);
            // console.info(iChar, '=', jChar, '? target : ', target, ' target.indexOf(jChar) = ', target.indexOf(jChar));
            if (iChar !== jChar && target.indexOf(jChar) === -1) {
                target += jChar;
            } else {
                break;
            }
            // console.info('target:', target);
        }
    }
    return max.length;
};

function test(s, target) {
    const error = lengthOfLongestSubstring(s);
    if (error !== target.length) {
        console.error(s, target, error);
    }
}

test('abcabcbb', 'abc');
test('bbbbb', 'b');
test('pwwkew', 'wke');
test('c', 1);
