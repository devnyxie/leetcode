/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

import (
    "fmt"
)

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
      // Create a dummy node to serve as the head of the merged list
    dummy := &ListNode{}
    current := dummy

    // Iterate through both lists and append the smaller node to the merged list
    for list1 != nil && list2 != nil {
        if list1.Val < list2.Val {
            current.Next = list1
            list1 = list1.Next
        } else {
            current.Next = list2
            list2 = list2.Next
        }
        current = current.Next
    }

    // Append the remaining nodes from the non-empty list
    if list1 != nil {
        current.Next = list1
    }
    if list2 != nil {
        current.Next = list2
    }

    // Return the merged list (excluding the dummy head)
    return dummy.Next
}