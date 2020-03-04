/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
   let S = [];
    for (let a = 1; a < k; a++) {
        for (let b = a + 1; b <= n; b++) {
            if ((a < b) && ((a & b) < k)) {
                S.push(a & b);
            }
        }
    }
    return Math.max.apply(null, S);
}