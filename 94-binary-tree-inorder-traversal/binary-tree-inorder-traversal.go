/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func traverse(node *TreeNode, result *[]int){
    // stop if we have reached the end
    if node == nil {
        return;
    }
    //visit left subtree
    traverse(node.Left, result);
    //add current value
    *result = append(*result, node.Val);
    //visit right subtree
    traverse(node.Right, result);
}
func inorderTraversal(root *TreeNode) []int {
    var result []int;
    traverse(root, &result);
    return result;
}