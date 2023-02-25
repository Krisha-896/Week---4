var a = [12, 25, 63, 96, 32, 14];

// var x = a.push(100);//add at last index
// var y = a.unshift(200);//add at first index
// // console.log(x);
// // console.log(y);

// // console.log(a);

// var x1 = a.pop(); //last index remove
// var y1 = a.shift();//remove from first index

// console.log(x1);
// console.log(y1);
// console.log(a);

// a.splice(1, 0, 100); //strat with first index and remove nothing and add 100 to first index
// a.splice(1, 3); //starts with 1st index and remove 3 element
// var p1 = a.splice(1, 3, 78, 96);//starts with 1st index and remove 3 element and add 78 and 96
// console.log(p1);
// console.log(a);

// for(let i=0;i<a.length;i++){//array iteration no callback and if we ue forEach callbacks works
//     console.log(a[i])
// }

//value = a[i]
// a.forEach(function (value) {//callbacks works in forEach and not works in for loop
//   console.log(value);//print purpose
// });

// a.forEach((value)=>{//arrow function of forEach which use callbacks
//     console.log(value)
// })

a = a.map((x) => {
  //map use for returning new array with some operations performed and of same length of original array
  return x * 2; //return something
});
//console.log(newarray\\)
console.log(a);
