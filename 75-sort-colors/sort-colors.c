void sortColors(int* nums, int numsSize) {
    int	i;
    // -1 = false
    // >0 = true
	int	swap;

	while (numsSize >= 0)
	{
		i = 0;
		swap = -1;
		while (i < (numsSize - 1))
		{
			if (nums[i] > nums[i + 1])
			{
                swap = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = swap;
			}
			i++;
		}
		if (swap == -1)
		{
			break;
		}
		numsSize--;
	}
}