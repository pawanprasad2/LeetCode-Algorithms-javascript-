// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

//without built in func
var lengthOfLongestSubstring = function(s) {
    let chars = [];
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let currentChar = s[right];

  
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



// with built in 

var lengthOfLongestSubstring = function(s) {
    let current = "";
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (current.includes(ch)) {
            let index = current.indexOf(ch);
            current = current.slice(index + 1);
        }

        current += ch;

        if (current.length > maxLength) {
            maxLength = current.length;
        }
    }

    return maxLength;
};


















