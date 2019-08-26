/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let pre = 0
    let n1 = l1, n2 = l2
    let result = new ListNode(0)
    let index = result

    while(n1 !== null || n2 !== null || pre > 0) {

        let val1 = n1 !== null ? n1.val : 0
        let val2 = n2 !== null ? n2.val : 0

        let val = pre + val1 + val2
        pre = Math.floor(val / 10)

        let node = new ListNode(val % 10)
        
        index.next = node
        index = node
        
        if(n1 !== null) n1 = n1.next
        if(n2 !== null) n2 = n2.next
    }
    
    return result.next
};