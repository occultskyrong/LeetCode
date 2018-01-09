/**
 * Created by zhangrz on 2018/1/9.
 * Copyright© 2015-2020 occultskyrong (https://github.com/occultskyrong)
 * @version 0.0.1 created
 */

'use strict';

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function ListNode2(val, next = null) {
    const listNode = new ListNode(val);
    listNode.next = next;
    return listNode;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    /**
     * 按位加
     * @param listNode1
     * @param listNode2
     * @param ss 是否进位
     * @return {*}
     */
    function addTwo(listNode1, listNode2, ss = 0) {
        const val1 = listNode1 ? listNode1.val : 0;
        const val2 = listNode2 ? listNode2.val : 0;
        const val = val1 + val2 + ss;
        ss = parseInt(val / 10);
        const listNode = new ListNode(val % 10);
        if (listNode1 && listNode1.next !== null || listNode2 && listNode2.next !== null) {
            listNode.next = addTwo(listNode1.next || 0, listNode2.next || 0, ss);
        } else if (ss !== 0) {
            listNode.next = new ListNode(ss);
        }
        return listNode;
    }

    return addTwo(l1, l2);
};

const test1 = new ListNode2(2, new ListNode2(4, new ListNode2(3)));
const test2 = new ListNode2(5, new ListNode2(6, new ListNode2(4)));
const test3 = new ListNode2(5);
const test4 = new ListNode2(1, new ListNode2(8));
const test5 = new ListNode2(0);
const test6 = new ListNode2(9, new ListNode2(1, new ListNode2(6)));

console.info(addTwoNumbers(test1, test2));
console.info(addTwoNumbers(test3, test3));
console.info(addTwoNumbers(test5, test4));
console.info(addTwoNumbers(test6, test5));