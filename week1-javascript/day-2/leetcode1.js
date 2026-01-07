//longest common prefix

var longestCommonPrefix = function(strs) {
    strs.sort()
    const first = strs[0]
    const last = strs[strs.length-1]
    const minLength = Math.min(first.length,last.length)
    let i=0
    while(i<minLength && first[i]===last[i]){
        i++
    }

    return first.substring(0,i)
};

// const strings = ['Rohit','Rohan','Ronit','Rmesh','Amit']
// console.log(longestCommonPrefix(strings))

//remove duplicate from sorted array
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};
const numbers = [1,1,2]
console.log(removeDuplicates(numbers))