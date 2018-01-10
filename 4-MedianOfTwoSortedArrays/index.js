/**
 * Created by zhangrz on 2018/1/10.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

/**
 * 寻找两个数组的中位数
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // 合并两个数组
    const nums = nums1.concat(nums2);
    // 重新排序
    nums.sort((n1, n2)=>n1 - n2);
    // 根据数组长度的奇偶判断中位数位置
    const length = nums.length;
    if (length === 1) { // 就一个数
        return nums[0];
    }
    if (length % 2 === 0) { // 偶数,中间位置两个数
        const target = length / 2;
        return (nums[target - 1] + nums[target]) / 2;
    } else { // 奇数,中间位置一个数
        return nums[(length - 1) / 2];
    }
};


function test(nums1, nums2, result) {
    const error = findMedianSortedArrays(nums1, nums2);
    if (error !== result) {
        console.info(nums1, nums2, result, error);
    }
}

test([1, 3], [2], 2);
test([1, 2], [3, 4], 2.5);
