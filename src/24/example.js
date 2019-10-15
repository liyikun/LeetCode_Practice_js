/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let result = new ListNode(0)
    result.next = head
    let pre = result
    let cur = result.next

    while(cur !== null && cur.next !== null) {
        let first = cur
        let second = cur.next
        let next = second.next
        second.next = first
        first.next = next
        pre.next = second
        pre = first
        cur = next
    }

    return result.next
};