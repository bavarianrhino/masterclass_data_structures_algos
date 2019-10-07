
// Time complexity between two functions that add lots of numbers
function addUpTo (n) {
    let total = 0;
    for(let i = 1; i <= n; i ++) {
        total += i
    }
    return total
}


function addUpTo2(n) {
	return n * (n + 1) / 2;
}


var t1 = performance.now();
console.log("Added up to - ", addUpTo(10000000000));
var t2 = performance.now();
console.log(`With a run time of - ${(t2 - t1) / 1000} seconds.`);
// Added up to -  50000000000067860000
// With a run time of - 24.901205000000118 seconds.

var t1 = performance.now();
console.log('Added up to - ', addUpTo2(10000000000));
var t2 = performance.now();
console.log(`With a run time of - ${(t2 - t1) / 1000} seconds.`);
// Added up to -  50000000005000000000
// With a run time of - 0.0010249999995721737 seconds.