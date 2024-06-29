func longestCommonPrefix(strs []string) string {
    var str string
    // Iterate through all characters of the first string.
    for aIndex, aValue := range strs[0] {
        // Check each character of the first string against other strings.
        for zIndex, zValue := range strs {
            // Stop if index is out of bounds or characters don't match.
            if aIndex >= len(zValue) || aValue != rune(zValue[aIndex]) {
                // Return the current longest common prefix.
                // * :aIndex vs aIndex
                // ":" means "up to" certain index
                return strs[0][:aIndex]
            }
            // Append character to common prefix if it's the last string.
            if zIndex == len(strs)-1 {
                str = str + string(aValue)
            }
        }
    }
    return str
}
