let arr = [40, 50, 60, 4, 6, 2, 9];
function myFunc() {
  return Math.max.apply(null, arr);
}
console.log(arr);
// let arr = [40, 50, 60, 4, 6, 2, 9];
// function myFun(a,b) {
//   return b-a;
// }

// const numbs = [4, 23, 56, 12, 66, 97, 40];
// let val = numbs.filter((item) => {
//   return item < 40;
// });
// console.log(val);
