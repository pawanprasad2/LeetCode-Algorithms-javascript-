// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.


var lengthOfLongestSubstring = function(s) {
    let chars = [];
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

        // Check if character is already in `chars` between left and right
        for (let i = left; i < right; i++) {
            if (s[i] === currentChar) {
                left = i + 1;
                break;
            }
        }

        let currentLength = right - left + 1;
        if (currentLength > maxLength) {
            maxLength = currentLength;
        }
    }

    return maxLength;
};
