/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(head === null || head.next === null) return head

    let first = head
    let second = head.next

    let next = second.next

    second.next = first

    first.next = swapPairs(next)

    return second
};

