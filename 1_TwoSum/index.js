/**
 * Created by zhangrz on 2018/1/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

require('../utils/Array.Equals');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/**
 * 测试case
 * @param {Array} nums
 * @param {number} target
 * @param {Array} result
 */
function test(nums, target, result) {
    const error = twoSum(nums, target);
    if (!error.equals(result)) {
        console.error(nums, target, result, error);
    }
}

test([2, 7, 11, 15], 9, [0, 1]);
test([3, 2, 4], 6, [1, 2]);
test([0, 4, 3, 0], 0, [0, 3]);
test([-1, -2, -3, -4, -5], -8, [2, 4]);
