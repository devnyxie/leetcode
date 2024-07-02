var intersect = function(nums1, nums2) {
    nums1.sort((a, b) => a - b); // Sort nums1, e.g [4,5,9]
    nums2.sort((a, b) => a - b); // Sort nums2, e.g [4,4,8,9,9]
    
    let i = 0, j = 0;
    const result = [];
    
    while (i < nums1.length && j < nums2.length) {
        // compare sorted arrays, 4 = 4, add index both to i & j and resumes the loop:
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else {
            //if one is bigger than another, then we have to check the next index:
            if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }
    }

    // This way we are able to loop through each char of each array, 
    
    return result;
};
