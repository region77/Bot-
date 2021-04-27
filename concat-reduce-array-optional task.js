let arr = [[24,33,45],[123,321,654],[7,3,9,2,5,5,2]];
let arr2 = [].concat(...arr);
console.log(arr2);
console.log(arr2.reduce(function(acc, num ) {
   return acc+num;
}, 0));
