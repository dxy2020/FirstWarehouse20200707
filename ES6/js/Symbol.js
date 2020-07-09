//创建symbol属性值
let symbol=Symbol();
console.log(symbol);//Symbol()
let obj={username:'dxy',age:20};
obj[symbol]='hello';
let sex='性别';
obj[sex]='男';
console.log(obj);//Symbol(): "hello"
for(let i in obj){
    console.log(i);//不会遍历symbol
}
let symbol1=Symbol('one');
let symbol2=Symbol('two');
console.log(symbol1==symbol2);//false
console.log(symbol1,symbol2);//Symbol(one) Symbol(two)
//可以去定义常量
const Person_key=Symbol('person_key');
console.log(Person_key);//Symbol(person_key)
//Iterator接口
console.log('模拟Interator');
//模拟指针对象(遍历器对象)
function myIterator(arr){//iterator接口
	let IteratorIndex=0;//记录指针的位置
	return {//遍历器对象
		next:function(){
			return IteratorIndex<arr.length?{value:arr[IteratorIndex++],done:false}:{value:arr[IteratorIndex],done:true};
		}
	}
};
arr=[1,2,3,4,'abc'];//准备一个数据
//let oneIterator=myIterator(arr);
//console.log(oneIterator.next());//{value: 1, done: false}
//console.log(oneIterator.next());//{value: 2, done: false}
//console.log(oneIterator.next());//{value: 3, done: false}
//console.log(oneIterator.next());//{value: 4, done: false}
//console.log(oneIterator.next());//{value: "abc", done: false}
//console.log(oneIterator.next());//{value: undefined, done: true}
////将iterator接口部署到指定的数据类型上，可以使用for of去循环遍历
////数组，字符串，arguments，set容器，map容器
//console.log('数组');
//for(let i of arr){
//	console.log(i);
//}
//console.log('字符串');
//let str='12345abc';
//for(let i of str){
//	console.log(i);
//}
////arguments
//console.log('arguments');
//function foo(){
//	for(let i of arguments){
//		console.log(i);
//	}
//}
//foo('一','二','三','四','五','中文');

//等同于在指定的数据内结构上部署了iterator接口，
//当使用for of去遍历某一个数据结构的时候，首先去找Symbol.iterator，找到了就去遍历，没有找到的话不能遍历xxx is not iterable
let targetData={
	[Symbol.iterator]:function(){
		let IteratorIndex=0;//记录指针的位置
	return {//遍历器对象
		next:function(){
			return IteratorIndex<this.length?{value:this[IteratorIndex++],done:false}:{value:this[IteratorIndex],done:true};
			}
		}
	}
}
