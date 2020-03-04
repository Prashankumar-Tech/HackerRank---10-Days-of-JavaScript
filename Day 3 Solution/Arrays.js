/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var arrSortedNumbers= nums.sort(function (a,b) {return a - b;});
    var arrFilteredNumbers= sorted_array.filter(function(e, index, self) {
        return index === self.indexOf(e);
    });
    return arrFilteredNumbers[arrFilteredNumbers.length - 2];
}