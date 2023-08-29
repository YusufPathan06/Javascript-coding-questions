// https://leetcode.com/problems/reverse-string/

// Method 1
// const reverseString = (s) => s.split('').reverse().join('')

// Method 2
const reverseString = ([...s]) => {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        let temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    return s.join('')
}
 
console.log(reverseString('Hello, My name is Yusuf'))