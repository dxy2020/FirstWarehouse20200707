function* myGenerator(){
	console.log('开始执行');
	yield 'hello';
	console.log('暂停后，再次执行');
	let result=yield 'result';
	console.log(result);//执行.next('aaaaaaaaaaaaaaa'),参数可以传进来，result接收参数
	console.log("通过.next('参数')可以进行传参");//此时不能用单引号:
	//报错:Uncaught SyntaxError: missing ) after argument list
	yield 'generator';
	console.log('遍历完毕。。。');
	return '返回的结果'
}
let MG=myGenerator();//返回的是指针对象
console.log(MG);//myGenerator {<suspended>}
console.log(MG.next());//开始执行;{value: "hello", done: false}
console.log(MG.next());//暂停后，再次执行;{value: "generator", done: false}
console.log(MG.next('aaaaaaaaaaaaaaaaaaaa'));//当传参时，let result=yield 'result';result会获取参数
//{value: "result", done: false};aaaaaaaaaaaaaaaaaaaa
console.log(MG.next());//遍历完毕。。。;{value: "返回的结果", done: true}

//symbol.iterator
console.log('symbol.iterator');
//对象的symbol.iterator属性，指向遍历器对象
let obj={username:'dxy',age:'20'};
obj[Symbol.iterator]=function* myTest(){
	yield 1;
	yield 2;
	yield 3
}
for(let i of obj){
	console.log(i);
}
