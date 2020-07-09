//var getPrice=function(){
//	return 2;
//}
//var getPrice= () =>5;
//console.log(getPrice());

//let user='dxy';
//console.log(`hi ${user}!`);
var tmp=new Date();
console.log("tmp="+tmp);
function f(){
	console.log(tmp);
	if(false){//这个一定执行吗？
		var tmp='hello world';
		console.log('nin');
	}
}
f();

let x;
({x}={x:1});
document.writeln("x="+x);
document.writeln("<br/>")
document.writeln("\u{6F}");
document.write("<hr/>");
//字符串的遍历器接口
const ps=eval("'\u2029'");
console.log(ps);
//模板字符串
let appjs='abscsdecascsddcb';
function tianjia(){
$('#result').append(`
	There are <b>${appjs.length}</b> items in your basket,<em>${appjs.length}</em>
	are on sale!</br>`
)
};
console.log(`\`Yo\` World!`)
//codePointAt()方法
let a='既';
console.log(a.codePointAt());
//String.raw()
console.log();
//预定义模式
function codePointLength(text){
	var result=text.match(/[\s\S]/gu);
	return result?result.length:0;
}
var s='𠮷𠮷';
console.log(s.length);
console.log(codePointLength(s));
//函数参数的默认值
function fetch(url,{body='',method='get',headers={}}={}){
	console.log(method);
}
fetch('www.baidu.com');
//rest参数
function test1(...add){
	let sum=0;
	for(var val of add){
		sum+=val;
	}
	console.log(sum);
}
test1(1,2,3,4,5,6,7,8,9);
//函数name属性
function foo(){};
console.log(foo.bind({}).name);
console.log((function(){}).bind({}).name);
//嵌套的箭头函数
//function test2(val){
//	return {into:function(array){
//		return{after:function(aftervalue){
//			array.splice(array.indexOf(aftervalue)+1,0,val);
//			return array;
//		}}
//	}}
//}
//console.log(test2(2).into([1,3]).after(1));
let test3=(val)=>({into:(array)=>({after:(aftervalue)=>{
		array.splice(array.indexOf(aftervalue)+1,0,val);
		return array;
	}})});
console.log(test3(2).into([1,3]).after(1));
//JSON
var obj={username:'babel'};
obj=JSON.stringify(obj);
console.log(typeof obj);
obj=JSON.parse(obj);
console.log(typeof obj);

//Object.create
var obj={username:'a',age:20};
var obj1={};
obj1=Object.create(obj,{
	sex:{
		value:'男',
		writable:true,
		configurable:true,
		enumerable:true
	}
});
console.log(obj1.sex);
obj1.sex='女';
console.log(obj1.sex);
//delete obj1.sex;
console.log(obj1);
for(var i in obj1){
	console.log(i);
}
//Object.defineProperties
var obj2={firstName:'a',lastName:'b'};
Object.defineProperties(obj2,{
	fullName:{
		get:function(){//获取扩展属性的值,获取扩展属性值得get方法自动调用
			return this.firstName+' '+this.lastName;
		},
		set:function(data){
			/*监听扩展属性，当扩展属性发生变化的时候会自动调用，
			 *自动调用后会将变化的值作为实参注入到set函数。
			 */		
			console.log('set()',data);
		}
	}
})
console.log(obj2.fullName);
obj2.fullName='c d';
console.log(obj2.fullName);
//get set 
var obj4={
	firstName:'a',
	lastName:'b',
	get fullName(){
		return this.firstName+' '+this.lastName;
	},
	set fullName(data){
		this.firstName=data;
		console.log('set()');		
	}
};
console.log(obj4);
obj4.fullName='c';
console.log(obj4.fullName);

//数组

var arr=[1,2,3,4,5,6,7,8,9];
var arr1=arr.map(function(item,index){
	//新的数组要求每个元素都比原来大10
	return item+10;
});
var arr2=arr.filter(function(item,index){
	//返回每个元素大于5数组
	return item >5;
});
console.log(arr1);
console.log(arr2);
//function
function f10(){
	console.log(this);
}
f10();
var f11=new f10();
//bind
var obj5={userName:'dxy'};
function foo(data){
	console.log(this,data);
};
//传入参数的形式
//foo.call(obj5,10);//直接场第二个参数开始，依次传入
//foo.apply(obj5,[10]);//第二参数必须是数组，传入放在数组里
//foo.bind(obj5,10)();//bind的特点：绑定完this不会立即调用当前的函数，而是将函数返回
////bind传参的方式同call一样
//setTimeout(function(){
//	console.log(this);//this指Window
//},1000);
//setTimeout(function(){
//	console.log(this)//此时this指obj5
//}.bind(obj5),1000);

//简化对象写法
let username='dxy';
let age=20;
let obj6={
	username,//同名的属性可以省略不写
	age,
	getName:function(){//以前的函数写法
		return this.username;
	},
	getAge(){//可以省略函数的function
		return this.age;
	}
};
console.log(obj6);
console.log(obj6.getName());
console.log(obj6.getAge());;
//箭头函数
//形参的情况
//1.没有形参的时候
let fun11=()=>console.log('我是箭头函数');
//2.只有一个形参的时候()可以省略
let fun12=(a)=>console.log(a);
let fun13= a =>console.log(a);
fun12(3);
//3.两个及两个以上的形参的时候，()不能省略
let fun14=(x,y)=>console.log(x,y);
fun14(20,32);
//函数体的情况
//1.函数体只有一条语句或者是表达式的时候{}可以省略
//--->会自动返回语句执行的结果或者是表达式的结果
let fun15=(x,y)=>{x+y};//不能自动返回
console.log('是否打印了',fun15(12,22));//结果:是否打印了 undefined
let fun16=(x,y)=>{return x+y};//手动返回
console.log(fun16(12,22));
let fun17=(x,y)=>x+y;//自动返回
console.log(fun17(12,22));
//对象嵌套
let obj11={
	name:1,
	obj12:{
		name:2
	},
	fun12(data){
		this.obj12.name=data;
	}
};
console.log(obj11.name);
obj11.fun12(12);
console.log(obj11.obj12.name);
//三点运算符
console.log('三点运算符');
function fun21(...values){
	console.log(arguments);
//	arguments.forEach(function(item,index){//TypeError: arguments.forEach is not a function
//		console.log(item,index);
//	});
	console.log(values);
	values.forEach(function(item,index){
		console.log(item,index);
	})
}
fun21(1,2,3);

let arr21=[1,3,5];
console.log(arr21);//[1, 3, 5]
let arr22=[2,...arr21,6];
console.log(arr22);//[2, 1, 3, 5, 6]
arr22.push(...arr21);
console.log(arr22);//[2, 1, 3, 5, 6, 1, 3, 5]
console.log(...arr22);//2 1 3 5 6 1 3 5
//形参默认值
console.log('形参默认值');
function foo31(x=1,y=2){
	this.x=x;
	this.y=y;
	console.log(x,y);
}
foo31();//1 2
//promise
console.log('promise');
//let promise=new Promise((resolve,reject)=>{
//	//初始化promise状态,pending:初始化
//	console.log('111');
//	//执行异步操作,通常发送ajax请求,开启定时器
//	setTimeout(()=>{
//		console.log('222');
//		//根据异步任务的返回结果去修改promise的状态
//		//异步任务执行成功
//		resolve('成功了，作为data实参');//修改promise的状态为fullfilled:成功的状态
//		//异步任务执行失败
//		reject();//修改promise的状态为rejected:失败的状态		
//	},2000)
//	
//})
//console.log('333');
//promise.then((data)=>{//成功的回调
//	console.log('成功了。。。');
//	console.log('成功了获得resolve传进来的参数',data);
//},(error)=>{//失败的回调
//	console.log('失败了。。。');
//});
//调用promise的then()
//promise.then(function(
//	result=>console.log(result);
//	errorMsg=>alert(errorMsg);
//))
//let request=new XMLHttpRequest();
//request.onreadystatechange=function(){
//
//};
//request.responseType='json';
//request.open("GET",url);
//request.send();


