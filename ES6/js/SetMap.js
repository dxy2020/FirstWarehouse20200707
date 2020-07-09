//let set=new Set([1,2,4,5,6,34,43,2342,4654,5]);
//console.log(set);

let map=new Map([[1,2],[2,4],[23,43]]);//二维数组
console.log(map);//Map(3) {1 => 2, 2 => 4, 23 => 43}
map.delete(2);//删除[2,4]
console.log(map);//Map(2) {1 => 2, 23 => 43}

//去重
let arr=[1,2,3,4,33,32,2,5,6,76];
let arr1=arr;
arr=[];
let set=new Set(arr1);
for(let i of set){
	arr.push(i);
}
console.log(arr);

//
console.log(3**3);//输出:27,3的3次方
let arr3=[1,2,34,'abd'];
console.log(arr3.includes(2));//true
