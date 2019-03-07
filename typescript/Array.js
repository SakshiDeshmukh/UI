/*
let arr:number[]

arr = []

arr[0] = 10
arr[1] = 2

console.log(`Length of Array : ${arr.length}`)
console.log(arr[0])
console.log(arr[1])

let numbers:number[] = [1,10,2,8]
let vals =[
    {
        id:1
    },{
        id:2
    }
]
console.log(numbers[1])

let index:number
for(index=0;index<numbers.length;index++){
    console.log('Number is ',numbers[index])
}
let array:number[] = [3,5,10,18]
let largest:number
let i:number
largest = array[0];
 
for (  i = 1; i < 4; i++)
{
  if( largest < array[i])
   {
    largest = array[i]
    
   }
}
console.log(largest)*/
var a = [1, 5, 10, 8, 4, 9];
var j;
var k;
for (j = 0; j < 5; j++) {
    for (k = j; k < 5; k++) {
        if (a[j] > a[k]) {
            a[j] = a[j] + a[k];
            a[k] = a[j] - a[k];
            a[j] = a[j] - a[k];
        }
    }
    console.log(a[j]);
}
var perfectSqArr = [2, 9, 4, 1, 5, 8, 3];
var maxSqrRoot;
var c = 0;
var sqrootArr = [];
for (var i = 0; i < perfectSqArr.length; i++) {
    for (var j_1 = 0; j_1 < perfectSqArr[i]; j_1++) {
        if (j_1 * j_1 == perfectSqArr[i]) {
            sqrootArr[c] = j_1;
            c++;
        }
    }
}
console.log("Square root array : " + sqrootArr);
var maxroot = sqrootArr[0];
for (var index = 1; index < sqrootArr.length; index++) {
    if (sqrootArr[index] > maxroot) {
        maxroot = sqrootArr[index];
    }
}
console.log("Maximum root  is " + maxroot);
