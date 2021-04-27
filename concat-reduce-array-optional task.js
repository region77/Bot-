let arr = [1,4,5,6,[2,3,6],6,7,8,[88]];
let arr2 = [].concat(...arr);
console.log(arr2);
console.log(arr2.reduce(function(acc, num ) {
   return acc+num;
}, 0));
