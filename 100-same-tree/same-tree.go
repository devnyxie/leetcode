/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSameTree(p *TreeNode, q *TreeNode) bool {
    if p == nil && q == nil {
        return true;
    }
    if p == nil || q == nil {
        return false;
    }
    if p.Val != q.Val {
        return false;
    }
    // we need whole tree to be identical, and we we call the func
    // separately, we will get an early wrong return.
    // isSameTree(p.Left, q.Left);
    // isSameTree(p.Right, q.Left);
    return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right);
}