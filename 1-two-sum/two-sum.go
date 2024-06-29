func twoSum(nums []int, target int) []int {
    var targetNums []int

    for i := 0; i < len(nums); i++ {
        for j := i + 1; j < len(nums); j++ {
            if nums[i]+nums[j] == target {
                targetNums = []int{i, j}
                return targetNums
            }
        }
    }

    return targetNums
}