/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    if (n <= 3) {
        return n;
    }
    
    let prevStep = 2;
    let currStep = 3;
    let nextStep = 5;
    
    for (let i = 4; i <= n; i++) {
        nextStep = prevStep + currStep;
        prevStep = currStep;
        currStep = nextStep;
    }
    
    return currStep;
};