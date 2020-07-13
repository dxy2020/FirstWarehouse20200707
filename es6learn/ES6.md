# ES6

## 1.严格模式

1. ES5：正常运行模式（混杂模式）、严格模式（strict mode）。
2. 严格模式:全局或函数的第一条语句定义为：'use strict'。

<font color=red>注意</font>:如果浏览器不支持，只解析为一条简单的语句，没有任何副作用。

* 必须用var声明变量；
* 禁止自定义的函数中的this指向window；
* 创建eval作用域；
* 对象不能有重名的属性。

-----

## 2.JSON对象

1. JSON.stringify(obj/arr)

* js对象(数组)转换为json<font color=red>对象(数组)</font>

2. JSON.parse(json)

* json对象(数组)转换为js<font color=red>对象(数组)</font>

```javascript
var obj={username:'babel'};
obj=JSON.stringify(obj);
console.log(typeof obj);//输出：string
obj=JSON.parse(obj);
console.log(typeof obj);//输出：object
```

## 3.Object扩展

1. Object.create(prototype,[descriptors])

   \* 作用：以指定对象为原型创建新的对象。类似对象的继承思想。

   \* 为新的对象指定新的属性，并对属性进行描述

   >\- value :指定值
   >
   >\- writable:标识当前属性是否可修改，默认为false
   >
   >\- configurable:标识当前属性是否可以被删除，默认为false
   >
   >\- enumerable:标识当前属性是否能用for in 枚举，默认为false

   ```javascript
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
   obj1.sex='女';//前提：writable:true,
   console.log(obj1.sex);
   //delete obj1.sex;//删除sex属性,前提：configurable:true
   console.log(obj1);
   for(var i in obj1){//前提:enumerable:true  
   	console.log(i);
   }
   ```

   ----

2. Object.defineProperties(object,descriptors)

   \* 作用：为指定对象定义扩展多个属性

   >\* get：用来获取当前属性值的回调函数
   >
   >\* set:修改当前属性值的触发的回调函数，并且实参即为修改后的值

   \* 存储器属性：setter，getter。一个用来存值，一个用来取值

   ```javascript
   ar obj2={firstName:'a',lastName:'b'};
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
   ```

   -----

3. get，set方法

   \* get propertyName(){} 用来得到当前属性值的回调函数

   \* set propertyName(){} 用来监视当前属性值变化的回调函数

   ```javascript
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
   
   ```

   ----

## 4.数组扩展

<font color=red>注意：</font>这些方法是对数组实例。

1. Array.prototype.indexOf(value):得到值在数组中的第一个下标

2. Array.prototype.lastIndexOf(value):得到值在数组中的最后一个下标

3. Array.prototype.forEach(function(item,index){}):遍历数组

4. Array.prototype.map(function(item,index){}):遍历数组返回一个新的数组，返回加工之后的值

5. Array.prototype.filter(function(item,index){}):遍历过滤出一个新的子数组，返回条件为true的值

   ```javascript
   var arr=[1,2,3,4,5,6,7,8,9];
   var arr1=arr.map(function(item,index){
   	//新的数组要求每个元素都比原来大10
   	return item+10;
   });
   var arr2=arr.filter(function(item,index){
   	//返回每个元素大于5数组
   	return item >5;
   });
   ```

   ----

## 5.函数（function）扩展

1. Function.prototype.bind(obj):

   \* 作用：将函数内的this绑定为obj，并将函数返回

2. bind()、call()、apply()的区别:

   \* 都将指定函数中的this

   \* call()/apply()是立即调用函数

   \* bind()是将函数返回

   ```javascript
   var obj5={userName:'dxy'};
   function foo(data){
   	console.log(this,data);
   };
   //传入参数的形式
   foo.call(obj5,10);//直接从第二个参数开始，依次传入
   foo.apply(obj5,[10]);//第二参数必须是数组，传入放在数组里
   //bind的特点：绑定完this不会立即调用当前的函数，而是将函数返回
   //bind传参的方式同call一样
   foo.bind(obj5,10)();
   setTimeout(function(){
   	console.log(this);//this指Window
   },1000);
   setTimeout(function(){
   	console.log(this)//此时this指obj5
   }.bind(obj5),1000);
   
   ```

   -----

## 6.let，const关键字

### 1.let

>1. 作用：
>
>   \* 与var类似，用于声明一个变量
>
>2. 特点：
>
>   \* 在块作用域内有效
>
>   \* 不能重复声明
>
>   \* 不会预处理，不存在提升
>
>3. 应用：
>
>   \* 循环遍历加监听

----

### 2.const

>1. 作用：
>
>   \* 定义一个常量
>
>2. 特点：
>
>   \* 不能修改
>
>   \* 其它特点同let
>
>3. 应用：
>
>   \* 保存不用改变的数据



----

## 7.变量的解构赋值

1. 理解：

   \* 从对象或数组中提取数据，并赋值给变量（多个）

2. 对象的解构赋值：

   ```javascript
   let {n,a}={n:'tom',a:12};
   ```

3. 数组的解构赋值：

   ```javascript
   let [a,b]=[1,'atguigu'];
   ```

4. 用途：

   \* 给多个形参赋值

   ----

## 8.模板字符串

1. 简化字符串的拼接

   \* 模板字符串必须用``包含

   \* 变化的部分使用${xxx}定义

   ----

## 9.简化的对象写法

1. 省略同名的属性值

2. 省略方法的function

   ```javascript
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
   ```

   ----

## 10.箭头函数

1. 作用：定义匿名函数

2. 基本语法：

   \* 没有参数：`()=>console.log('xxxx')`

   \* 一个参数：`i=>i+2`

   \* 大于一个参数：`(i,j)=>i+j`

   \* 函数体不用大括号：默认返回结果

   \* 函数体如果有多个语句，需要用{}包围，若有需要返回的内容，需要手动返回

   ```javascript
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
   ```

3. 使用场景：多用来定义回调函数

4. 箭头函数的特点：

   \* 箭头函数没有自己的this，箭头函数的this不是调用的时候决定的，而是在定义的时候处在的对象就是它的this。

   \* 箭头函数的this看外层的是否有函数，如果有，外层函数的this就是内部箭头函数的this，如果没有，则this是Window。

   -----

## 11.三点运算符

1. 用途：

   \* 用来取代arguments，但比arguments灵活，只能是最后部分形参参数；`arguments.callee()指函数本身`

   ```javascript
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
   ```

2. 扩展运算符

   ```javascript
   let arr21=[1,3,5];
   console.log(arr21);//[1, 3, 5]
   let arr22=[2,...arr21,6];
   console.log(arr22);//[2, 1, 3, 5, 6]
   arr22.push(...arr21);
   console.log(arr22);//[2, 1, 3, 5, 6, 1, 3, 5]
   console.log(...arr22);//2 1 3 5 6 1 3 5
   ```

   ------

## 12.形参默认值

1. 当不传入参数的时候默认使用形参里的默认值

   ```javascript
   function foo31(x=1,y=2){
   	this.x=x;
   	this.y=y;
   	console.log(x,y);
   }
   foo31();//1 2
   let foo32=new foo31();
   let foo33=new foo31(2,3)
   ```

   -----

## 13.Promise对象

1. 代表了未来某个将要发生的事件（通常是一个异步操作）

2. 可以将异步操作以同步的流程表达出来，避免了层层嵌套的回调函数（俗称'回调地狱'）

3. ES6的Promise是一个构造函数，用来生成Promise实例

4. 使用Promise基本步骤：

   >\* 创建promise对象
   >
   >```javascript
   >let promise=new Promise((resolve,reject)=>{
   >	//初始化promise状态为pending
   >	//执行异步操作
   >    //执行异步操作,通常是发送ajax请求，开启定时器
   >	if(异步操作成功){
   >		resolve(value);//修改promise的状态为fullfilled
   >	}else{
   >		reject(errMsg);//修改promise的状态为rejected
   >	}
   >})
   >```
   >
   >\* 调用promise的then()
   >
   >```javascript
   >promise.then(function(
   >	result=>console.log(result),
   >	errorMsg=>alert(errorMsg)
   >))
   >```

5. promise对象的3个状态

   >\* pending:初始化状态
   >
   >\* fullfilled:成功状态
   >
   >\* rejected:失败状态

6. 应用：

   >\* 使用promise实现超时处理
   >
   >\* 使用promise封装处理ajax请求
   >
   >```javascript
   >let request=new XMLHttpRequest();
   >request.onreadystatechange=function(){
   >
   >};
   >request.responseType='json';
   >request.open("GET",url);
   >request.send();
   >```

   ----

7. 实例：

   ```javascript
   let promise=new Promise((resolve,reject)=>{
   	//初始化promise状态,pending:初始化
   	console.log('111');
   	//执行异步操作,通常发送ajax请求,开启定时器
   	setTimeout(()=>{
   		console.log('222');
   		//根据异步任务的返回结果去修改promise的状态
   		//异步任务执行成功
   		resolve('成功了，作为data实参');//修改promise的状态为fullfilled:成功的状态
   		//异步任务执行失败
   		reject();//修改promise的状态为rejected:失败的状态		
   	},2000)
   	
   })
   console.log('333');
   promise.then((data)=>{//成功的回调
   	console.log('成功了。。。');
   	console.log('成功了获得resolve传进来的参数',data);
   },(error)=>{//失败的回调
   	console.log('失败了。。。');
   });
   ```

## 14.Symbol属性

1. ES5中对象的属性名都是字符串，容易造成重名，污染环境

2. ES6中添加了原始数据类型symbol(已有的原始数据类型：String，Number，boolean，null，undefined，对象)

3. 特点：

   >\* Symbol属性对应的值是惟一的，解决命名冲突问题
   >
   >\* Symbol值不能与其他数据进行计算，包括同字符串拼串
   >
   >\* for in ,for of遍历时不会遍历symbol属性

4. 使用：

   >\* 调用Symbol函数得到symbol值
   >
   >```javascript
   >//创建symbol属性值
   >let symbol=Symbol();
   >console.log(symbol);//Symbol()
   >let obj={username:'dxy',age:20};
   >obj[symbol]='hello';
   >console.log(obj);//Symbol(): "hello"
   >for(let i in obj){
   >console.log(i);//不会遍历symbol
   >}
   >```
   >
   >\* 传参标识
   >
   >```javascript
   >let symbol1=Symbol('one');
   >let symbol2=Symbol('two');
   >console.log(symbol1==symbol2);//false
   >console.log(symbol1,symbol2);//Symbol(one) Symbol(two)
   >```
   >
   >\* 定义常量
   >
   >```javascript
   >//可以去定义常量
   >const Person_key=Symbol('person_key');
   >console.log(Person_key);//Symbol(person_key)
   >```
   >
   >\* 内置Symbol值：提供了11个内置的Symbol值，指向语言内部使用的方法
   >
   >\- Symbol.iterator
   >
   >​	\* 对象的Symbol.iterator属性，指向该对象的默认遍历器方法
>
   >```javascript
   >//等同于在指定的数据内结构上部署了iterator接口，
   >//当使用for of去遍历某一个数据结构的时候，首先去找Symbol.iterator，找到了就去遍历，没有找到的话不能遍历xxx is not iterable
   >let targetData={
   >	[Symbol.iterator]:function(){
   >		let IteratorIndex=0;//记录指针的位置
   >	return {//遍历器对象
   >		next:function(){
   >			return IteratorIndex<this.length?{value:this[IteratorIndex++],done:false}:{value:this[IteratorIndex],done:true};
   >			}
   >		}
   >	}
   >}
   >```

-----

## 15.iterator接口机制

1. 一种接口机制，为各种不同的数据结构提供统一的访问机制

2. 作用：

   >\* 为各种数据结构，提供一个统一的、简单的访问接口；
   >
   >\* 使得数据结构的成员能够按某种次序排列；
   >
   >\* Iterator接口主要提供for...of消费。

3. 工作原理：

   >\- 创建一个指针对象(遍历器对象)，指向数据结构的起始位置。
   >
   >\- 第一次调用next方法，指针自动指向数据结构的第一个成员。
   >
   >\- 接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员。
   >
   >\- 每调用next方法返回的是一个包含value和done的对象，{value:当前成员的值，done：布尔值}。
   >
   >​	\* value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。
   >
   >​	\* 当遍历结束的时候返回的value值是undefined，done值为false。
   >
   >```javascript
   >//模拟指针对象(遍历器对象)
   >function myIterator(arr){//iterator接口
   >	let IteratorIndex=0;//记录指针的位置
   >	return {//遍历器对象
   >		next:function(){
   >			return IteratorIndex<arr.length?{value:arr[IteratorIndex++],done:false}:{value:arr[IteratorIndex],done:true};
   >		}
   >	}
   >};
   >arr=[1,2,3,4,'abc'];//准备一个数据
   >let oneIterator=myIterator(arr);
   >console.log(oneIterator.next());//{value: 1, done: false}
   >console.log(oneIterator.next());//{value: 2, done: false}
   >console.log(oneIterator.next());//{value: 3, done: false}
   >console.log(oneIterator.next());//{value: 4, done: false}
   >console.log(oneIterator.next());//{value: "abc", done: false}
   >console.log(oneIterator.next());//{value: undefined, done: true}
   >```
   >
   >

4. 原生具备iterator接口的数据(可用for of遍历)

5. 将iterator接口部署到指定的数据类型(数组，字符串，arguments，set容器，map容器)上，可以使用for of去循环遍历

   ```javascript
   //将iterator接口部署到指定的数据类型上，可以使用for of去循环遍历
   //数组，字符串，arguments，set容器，map容器
   for(let i of arr){
   	console.log(i);
   }
   let str='12345abc';
   for(let i of str){
   	console.log(i);
   }
   //arguments:用来收集函数实参，伪数组-没有数组一般方法
   function foo(){
   	for(let i of arguments){
   		console.log(i);
   	}
   }
   foo('一','二','三','四','五','中文');
   ```

   

6. 扩展：

   >\* 当数据结构上部署了Symbol.iterator接口，该数据就是可以用for of遍历
   >
   >\* 当使用for of去遍历目标数据的时候，该数据会自动去找Symbol.iterator属性，Symbol.iterator属性指向对象的默认遍历器方法。

   -----

## 16.Generator函数

1. ES6提供的解决异步编程的方案之一

2. Generator函数是一个状态机，内部封装了不同状态的数据

3. 用来生成遍历器对象

4. 可暂停函数(惰性求值)，yield可暂停，next方法可启动。每次返回的是yield后的表达式结果

5. 特点：

   >\* function与函数名只见那有一个星号
   >
   >\* 内部用yield表达式来定义不同的状态
   >
   >```javascript
   >function* myGenerator(){
   >	console.log('开始执行');
   >	yield 'hello';
   >	console.log('暂停后，再次执行');
   >	let result=yield 'result';
   >	console.log(result);//执行.next('aaaaaaaaaaaaaaaaaaaa'),参数可以传进来，result接收参数
   >	console.log("通过.next('参数')可以进行传参");//此时不能用单引号:
   >	//报错:Uncaught SyntaxError: missing ) after argument list
   >	yield 'generator';
   >	console.log('遍历完毕。。。');
   >	return '返回的结果'
   >}
   >let MG=myGenerator();//返回的是指针对象
   >console.log(MG);//myGenerator {<suspended>}
   >console.log(MG.next());//开始执行;{value: "hello", done: false}
   >console.log(MG.next());//暂停后，再次执行;{value: "generator", done: false}
   >console.log(MG.next('aaaaaaaaaaaaaaaaaaaa'));//当传参时，let result=yield 'result';result会获取参数
   >//{value: "result", done: false};aaaaaaaaaaaaaaaaaaaa
   >console.log(MG.next());//遍历完毕。。。;{value: "返回的结果", done: true}
   >```
   >
   >\* generator函数返回的是指针对象，而不会执行函数内部逻辑
   >
   >\* 调用next方法函数内部逻辑开始执行，遇到yield表达式停止，返回{value:yield后的表达式结果/undefined,done：布尔值}
   >
   >\* 再次调用next方法会从上一次停止时的yield处开始，直到最后
   >
   >\* yield语句返回结果通常为undefined，当调用next方法时传参内容会作为启动时yield语句的返回值。

6. 与对象的symbol.iterator属性结合，指向遍历器对象

   ```javascript
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
   ```

   ----

1. 真正意义上解决异步回调的问题，同步流程表达异步操作

2. Generator的语法糖：在原有的Generator上语法更加完善

3. 语法：

   ```javascript
   async function foo(){
   	await 异步操作;
   	await 异步操作;
   }
   ```

4. 特点:

   >\* 不需要像Generator去调用next方法，遇到await等待，当前的异步操作完成就往下执行
   >
   >\* 返回的总是Promise对象，可以用then方法进行下一步操作
   >
   >\* async取代Generator函数的星号*,await取代Generator的yield

   ```JavaScript
   //async基本使用
   async function foo(){
   	return new Promise(resolve=>{
   //		setTimeout(function(){
   //			resolve();
   //		},2000)
   		setTimeout(resolve,2000);
   	})
   }
   async function foo1(){
   	console.log('开始执行',new Date().toTimeString());
   	await foo();
   	console.log('执行完毕。。。',new Date().toTimeString())
   }
   foo1();
   ```

   ```javascript
   //async里await返回值
   function test(){
   	return 'xxx';
   }
   async function asyncPrint(){
    	let result1=await test();//console.log(result1);此时打印:xxx
   	let result2=await Promise.resolve();//console.log(result2);此时打印:undefined
   	let result3=await Promise.resolve('promise');//console.log(result3);此时打印:promise
   	let result4=await Promise.reject('失败了。。。')//console.log(result4);此时打印:Uncaught (in promise) 失败了。。。
   //	console.log(result4);
   }
   asyncPrint();
   ```

   ```javascript
   //获取新闻内容
   async function getNews(url){
   	return new Promise((resolve,reject)=>{
   		$.ajax({
   			method:'GET',
   			url,//url:url，因为属性值引用的参数相同，可以省略。ES6：同名的属性可以不写
   			success:data=>resolve(),
   			error:error=>reject()
   		})
   	})
   }
   async function sendXml(){
   	let result=await getNews('url');
   	awit getNews('url'+result.commentUrl);
   }
   ```

   ----

## 18.class类使用

1. 通过class定义类/实现类的继承,之前继承方式：原型（\__proto__）、构造函数(constructor)、原型+构造函数

   ```javascript
   function Person(name,age){//定义构造函数
   	this.name=name;
   	this.age=age
   }
   let person =new Person('张三',28);//构造函数生成实例对象:构造方法constructor用于生成实例
   console.log(person);
   ```

2. 在类中通过constructor定义构造方法

   ```javascript
   //定义一个人物类
   class Person{
   	//类的构造方法
   	constructor(name,age){
   		this.name=name;
   		this.age=age;
   	}
   	showName(){//不能用:showName:function(){}的写法,class中的方法用简写方式
   		console.log(this.name);
   	}
   }
   let person=new Person('张三',28);
   person.showName();
   ```

3. 通过new来创建类的实例

4. 通过extends来实现类的继承

5. 通过super调用父类的构造方法

6. 重写从父类中继承的一般方法

   ```javascript
   //定义一个人物类
   class Person{
   	//类的构造方法
   	constructor(name,age){
   		this.name=name;
   		this.age=age;
   	}
   	showName(){//不能用:showName:function(){}的写法,class中的方法用简写方式
   		console.log('调用父类的方法');
   		console.log(this.name,this.age);
   	}
   }
   let person=new Person('张三',28);
   person.showName();
   //子类
   class StarPerson extends Person{
   	constructor(name,age,sex){
   		super(name,age);//调用父类的构造方法
   		this.sex=sex;
   	}
   	//父类的方法重写
   	showName(){
   		console.log('调用子类的方法');
   		console.log(this.name,this.age,this.sex);
   	}
   }
   let person1=new StarPerson('李四',28,'男');
   console.log(person1);
   person1.showName();
   ```

   ----

## 19.字符串，数组的扩展

1. 字符串的扩展

   >1. includes(str):判断是否包含指定的字符串
   >2. startsWith(str):判断是否以指定字符串开头
   >3. endsWith(str):判断是否以指定字符串结尾
   >4. repeat(count):重复指定次数

   ----

2. 数组的扩展

   >1. 二进制与八进制数值表示法：二进制用0b，八进制用0o
   >2. Number.isFinite(i):判断是否是有限大的数
   >3. Number.isNaN(i):判断是否是NaN
   >4. Number.isInteger(i):判断是否是整数
   >5. Number.parseInt(str):将字符串转换为对应的数值
   >6. Math.trunc(i):直接去除小数部分

   ------

## 20.数组方法的扩展

1. Array.from(v):将伪数组对象或可遍历对象转换为真数组

2. Array.of(v1,v2,v3):将一系列值转换成数组

3. find(function(value,index,arr){return true}):找出第一个满足条件返回true的元素

4. findIndex(function(value,index,arr){return true}):找出第一个满足条件返回true元素的下标

   ```javascript
   //Array.from(v)
   let btns=document.getElementsByTagName('button');
   Array.from(btns).forEach(function(item,index){
       console.log(item);
   })
   //Array.of(v1,v2,v3)
   let arr=Array.of(1,4,'abc',true);
   //find(function(value,index,arr){return true})
   let arr2=[1,2,3,4,5,6,7,8,9];
   let result=arr2.find(function(item,index){
       return item>4;
   })
   console.log(result);
   ```

   ----

## 21.对象方法的扩展

1. Object.is(v1,v2):判断2个数据是否完全相等,以字符串的形式来判断

   ```javascript
   console.log(0==-0);//true
   console.log(NaN==NaN);//false,NaN与任何值都不相等
   console.log(Object(0,-0));//false
   console.log(Object(NaN,NaN));//true,
   ```

2. Object.assign(target,source1source2..):将源对象的属性复制到目标对象上

   ```javascript
   let obj={};
   let obj1={username:'dxy',age:20};
   let obj2={sex:'男'};
   Object.assign(obj,obj1,obj2);
   console.log(obj);
   ```

3. 直接操作\_\_proto\_\_属性

   ```javascript
   <!--let obj2={};
   	obj2.__proto__=obj1;
   -->
   let obj3={};
   let obj4={money:1234567};//obj4有1234567这么多钱
   obj3.__proto__=obj4;//将obj4作为obj3的原型，obj3可以使用这些钱
   console.log(obj3.money);
   ```

## 22.深度克隆





## 23.set，map容器

1. Set容器：无序的不可重复的多个value的集合体

   >\* Set()
   >
   >\* Set(array)
   >
   >\* add(value)
   >
   >\* delete(value)
   >
   >\* has(value)
   >
   >\* clear()
   >
   >\* size
   >
   >```javascript
   >let set=new Set([1,2,4,5,6,34,43,2342,4654,5]);
   >console.log(set);
   >```

   -----

2. Map容器：无序的key不重复的多个key-value的集合体

   >\* Map()
   >
   >\* Map(array)
   >
   >\* set(key,value) //添加
   >
   >\* get(key)
   >
   >\* delete(key)
   >
   >\* has(key)
   >
   >\* clear()
   >
   >\* size
   >
   >```javascript
   >let map=new Map([[1,2],[2,4],[23,43]]);//二维数组
   >console.log(map);//Map(3) {1 => 2, 2 => 4, 23 => 43}
   >map.delete(2);//删除[2,4]
   >console.log(map);//Map(2) {1 => 2, 23 => 43}
   >```

   -----

## 24.for of用法

1. `for(let value of target){}`循环遍历

   >\* 遍历数组
   >
   >\* 遍历Set
   >
   >\* 遍历Map
   >
   >\* 遍历字符串
   >
   >\* 遍历伪数组
   >
   >```javascript
   >//去重
   >let arr=[1,2,3,4,33,32,2,5,6,76];
   >let arr1=arr;
   >arr=[];
   >let set=new Set(arr1);
   >for(let i of set){
   >	arr.push(i);
   >}
   >console.log(arr);
   >```

   ------

## 25.Reflect





## 26.Proxy



## 27.Module

1. 将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。

2. Ruby的`require`、Python的`import`，CSS的`@import`

3. ES6之前主要模块加载方案：CommonJS（用于服务器）、AMD（用于浏览器）。<font color=red>在运行时确定这些东西</font>。

   如：CommonJS模块就是对象，输入时必须查找对象属性。<font color=red>CommonJS模块输出的是值的缓存。</font>不存在动态更新。

   ```javascript
   //CommonJS模块
   let {a,b,c}=require('mod');
   //等同于
   let _mod=require('mod');
   let a=_mod.a;
   let b=_mod.b;
   let c=_mod.c;
   /*解释
   *代码的实质：整体加载mod模块(即加载mod的所有法)，生成一个对象(_mod),再从这个对象上面读取3个方法。--“运行时加载”。只有运行时才能得到这个对象。无法在编译时做“静态优化”。
   */
   ```

4. ES6模块设计思想：尽量的静态化，<font color=red>在编译时就能确定模块的依赖关系</font>，以及输入和输出的变量。

5. 静态加载的优点：

   >\- 不再需要UMD模块格式了，将来服务器和浏览器都会支持ES6模块格式。
   >
   >\- 将来浏览器的新API就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
   >
   >\-不再需要对象作为命名空间（比如Math对象）。

   ```javascript
   //ES6模块化
   import {a,b,c} from 'mod';
   //ES6模块不是对象，通过export命令显式指定输出的代码，再通过import命令输入。
   /*实质：从mod模块加载3个方法，其他方法不加载。——"编译时加载"或者"静态加载"。实现在编译时就完成模块加载。
   特点：没法引用ES6模块本身，因为它不是对象。
   */
   ```

   ----

6. 模块功能由两个命令构成：

   >\- <font color=red>`export`</font>：用于规定模块的对外接口
   >
   >\- <font color=red>`import`</font>:用于输入其他模块提供的功能

   ```javascript
   //profile.js 文件：保存用户信息。可以将其视为一个模板
   //说明：一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如需要外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量。
   //写法一
   export var firstName='zhangsan';//export命令对外部输出firstName变量
   export var lastName='lisi';
   export var year=2020;
   //写法二
   var fristName='zhangsan';
   var lastName='lisi';
   var year=2020;
   export {firstName,lastName,year};//使用大括号指定所要输出的一组变量，建议使用，可以在脚本尾部
   //输出函数或类(class)
   export function multiply(x,y){
       return x*y;
   };//输出函数multiply
   //通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名
   function v1(){...}
   function v2(){...}
   export {
   	v1 as streamV1,
       v2 as streamV2,
       v3 as streamLatestVersion
   };//使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。
   ```

   <font color=red>注意:</font><font color=red>`export`</font>命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。

   ```JavaScript
   //错误写法1
   export 1;//报错：直接输出1，没有提供对外的接口
   //错误写法2
   var m=1;
   export m;//报错：通过变量m，还是直接输出1，1只是一个值，不是接口
   //正确写法一
   export var m=1;
   //正确写法二
   var m=1;
   export {m};
   //正确写法三
   var n=1;
   export {n as m};
   //以上三个写法，规定了对外的接口m。其他脚本可以通过这个接口，取到值1。它们实质是，在接口名与模块内部变量之间，建立一一对应的关系。
   /*function和class输出*/
   //报错
   function f(){}
   export f;
   //正确
   export function f(){};
   //正确
   function f(){}
   export {f};
   //export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值
   export var foo = 'bar';
   setTimeout(() => foo = 'baz', 500);//首先输出变量foo,值为bar,500毫秒之后变成了baz
   //export命令可以出现模块的任何位置，只要处于模块顶层即可以。如果处于块级作用域内，就会报错。import命令也是如此。原因：处于条件代码块之中，就没法做静态优化。
   function foo(){
       export default 'bar';//SyntaxError
   }
   foo();
   ```

   ```javascript
   // main.js
   import { firstName, lastName, year } from './profile.js';
   
   function setName(element) {
     element.textContent = firstName + ' ' + lastName;
   }
   //import用于加载profile.js文件，并从中输入变量，import命令接受一对大括号，里面指定要从其他模块导入的变量名。大括号里面的变量名，必须与被导入模块(profile.js)对外接口的名称相同。
   ```

   ------

## 28.Module的加载实现

1. 传统方法

   ```javascript
   <!-- 页面内嵌的脚本 -->
   <script type="application/javascript">
     // module code
   </script>
   
   <!-- 外部脚本 -->
   <script type="application/javascript" src="path/to/myModule.js">
   </script>
   //上面代码中，由于浏览器脚本默认语言是JavaScript，因此type="application/javascript"可以省略。
   //说明：默认情况下，浏览器是同步加载JavaScript脚本，即渲染引擎遇到<script>标签就会停下来，等执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。
   ```

2. 脚本异步加载

   ```javascript
   <script src="path/to/myModule.js" defer></script>
   <script src="path/to/myModule.js" async></script>
   //上面代码中，<script>标签打开defer或async属性，脚本就会异步加载。渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。
   ```

   >\* `defer`:等到整个页面在内存中正常渲染结束（DOM结构完全生成，以及其他脚本执行完成），才会执行。"渲染完再执行"。如果有多个defer脚本，会按照他们在页面出现的顺序加载。
   >
   >\* `async`:一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。"下载完就执行"。多个async脚本是不能保证加载顺序的。

   ------

3. 模块加载

   ```javascript
   //使用<script>标签，加入type="module"属性
   <script type="module" src="./foo.js"></script>
   /*浏览器对于带有type="module"的<script>，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的defer属性。*/
   <!-- 等同于 -->
   <script type="module" src="./foo.js" defer></script>
   /*如果网页有多个<script type="module">，它们会按照在页面出现的顺序依次执行。*/
   /*<script>标签的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。*/
   /*一旦使用了async属性，<script type="module">就不会按照在页面出现的顺序执行，而是只要该模块加载完成，就执行该模块。*/
   <script type="module" src="./foo.js" async></script>
   ```

   ```javascript
   //ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。
   <script type="module">
     import utils from "./utils.js";
   
     // other code
   </script>
   //举例来说，jQuery 就支持模块加载。
   <script type="module">
     import $ from "./jquery/src/jquery.js";
     $('#message').text('Hi from jQuery!');
   </script>
   ```

4. 外部模板脚本，有几点注意：

   >\- 代码是在模块作用域之中运行，而不是在全局作用域运行。模板内部的顶层变量，外部不可见。
   >
   >\- 模块脚本自动采用严格模式，不管有没有声明`use strict`。
   >
   >\- 模块之中，可以使用`import`命令加载其他模块(`.js`后缀不可省略，需要提供绝对URL或相对URL)，也可以使用`export`命令输出对外接口。
   >
   >\- 模块之中，顶层的`this`关键字返回undefined,而不是指向`window`。也就是说，在模块顶层使用`this`关键字，是无意义的。 
   >
   >\- 同一个模块如果加载多次，将只执行一次。

   ```javascript
   import utils from 'https://example.com/js/utils.js';
   const x = 1;
   console.log(x === window.x); //false
   console.log(this === undefined); // true
   //利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中。
   const isNotModuleScript = this !== undefined;//false
   ```

   -------

5. ES6模块与CommonJS模块的差异

   >1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
   >2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

6. Node.js加载

   >\* 从v13.2版本开始，Node.js已经默认打开了ES6模块支持。

   <font color=red>总结</font>：<font color=red>`.mjs`</font >文件总是以 ES6 模块加载，<font color=red>`.cjs`</font >文件总是以 CommonJS 模块加载，.js文件的加载取决于<font color=red>`package.json`</font >里面<font color=red>`type`</font >字段的设置。

   ```json
   {
      "type": "module"
   }
   ```

   ```Node.js
   # 解释成 ES6 模块
   $ node my-app.js
   ```

   <font color=red>注意</font>：ES6 模块与 CommonJS 模块尽量不要混用。<font color=red>`require`</font >命令不能加载<font color=red>`.mjs`</font >文件，会报错，只有<font color=red>`import`</font >命令才可以加载<font color=red>`.mjs`</font >文件。反过来，<font color=red>`.mjs`</font >文件里面也不能使用<font color=red>`require`</font >命令，必须使用<font color=red>`import`</font >。

   

## 29.编程风格

1. 块级作用域

   >\* let取代var
   >
   >\* 全局常量和线程安全：在let和const之间，建议优先使用const，尤其是在全局环境，不应该设置变量，只应设置常量。

   ```javascript
   /*const优于let的原因：
   	1.const可以提醒阅读程序的人，这个变量不应该改变；
   	2.const比较符合函数式编程思想，运算不改变值，只是新建值，而且这样也有利于将来的分布式运算；
   	3.JavaScript 编译器会对const进行优化，所以多使用const，有利于提高程序的运行效率，也就是说let和const的本质区别，其实是编译器内部的处理不同。
   	const声明常量好处：
   	1.阅读代码的人立刻会意识到不应该修改这个值；
   	2.防止了无意间修改变量值所导致的错误。
   	建议：
   	1.所有的函数都应该设置为常量。
   */
   // bad
   var a = 1, b = 2, c = 3;
   // good
   const a = 1;
   const b = 2;
   const c = 3;
   // best
   const [a, b, c] = [1, 2, 3];
   ```

   -----

2. 字符串

   静态字符串一律使用单引号或反引号，不使用双引号。动态字符串使用反引号。

   ```javascript
   // bad
   const a = "foobar";
   const b = 'foo' + a + 'bar';
   
   // acceptable
   const c = `foobar`;
   
   // good
   const a = 'foobar';
   const b = `foo${a}bar`;
   ```

   -----

3. 解构赋值

   > \* 使用数组成员对变量赋值时，优先使用解构赋值。

   ```javascript
   const arr = [1, 2, 3, 4];
   
   // bad
   const first = arr[0];
   const second = arr[1];
   
   // good
   const [first, second] = arr;
   ```

   >\* 函数的参数如果是对象的成员，优先使用解构赋值。

   ```javascript
   // bad
   function getFullName(user) {
     const firstName = user.firstName;
     const lastName = user.lastName;
   }
   
   // good
   function getFullName(obj) {
     const { firstName, lastName } = obj;
   }
   
   // best
   function getFullName({ firstName, lastName }) {
   }
   ```

   >\* 如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。这样便于以后添加返回值，以及更改返回值的顺序。

   ```javascript
   // bad
   function processInput(input) {
     return [left, right, top, bottom];
   }
   
   // good
   function processInput(input) {
     return { left, right, top, bottom };
   }
   
   const { left, right } = processInput(input);
   ```

4. 对象

   >\* 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

   ```javascript
   // bad
   const a = { k1: v1, k2: v2, };
   const b = {
     k1: v1,
     k2: v2
   };
   
   // good
   const a = { k1: v1, k2: v2 };
   const b = {
     k1: v1,
     k2: v2,
   };
   ```

   >\* 对象尽量静态化，一旦定义，就不得随意添加新的属性。如果添加属性不可避免，要使用`Object.assign`方法。

   ```javascript
   // bad
   const a = {};
   a.x = 3;
   
   // if reshape unavoidable
   const a = {};
   Object.assign(a, { x: 3 });
   
   // good
   const a = { x: null };
   a.x = 3;
   ```

   >\* 如果对象的属性名是动态的，可以在创造对象的时候，使用属性表达式定义。

   ```javascript
   // bad
   const obj = {
     id: 5,
     name: 'San Francisco',
   };
   obj[getKey('enabled')] = true;
   
   // good
   const obj = {
     id: 5,
     name: 'San Francisco',
     [getKey('enabled')]: true,
   };
   /*对象obj的最后一个属性名，需要计算得到。这时最好采用属性表达式，在新建obj的时候，将该属性与其他属性定义在一起。这样一来，所有属性就在一个地方定义了。*/
   ```

   >\* 对象的属性和方法，尽量采用简洁表达法，这样易于描述和书写。

   ```javascript
   var ref = 'some value';
   
   // bad
   const atom = {
     ref: ref,
   
     value: 1,
   
     addValue: function (value) {
       return atom.value + value;
     },
   };
   
   // good
   const atom = {
     ref,
   
     value: 1,
   
     addValue(value) {
       return atom.value + value;
     },
   };
   ```

   -----

5. 数组

   >\* 使用扩展运算符（...）拷贝数组。

   ```javascript
   // bad
   const len = items.length;
   const itemsCopy = [];
   let i;
   
   for (i = 0; i < len; i++) {
     itemsCopy[i] = items[i];
   }
   
   // good
   const itemsCopy = [...items];
   ```

   >\* 使用 Array.from 方法，将类似数组的对象转为数组。

   ```javascript
   const foo = document.querySelectorAll('.foo');
   const nodes = Array.from(foo);
   ```

   ------

6. 函数

   >\* 立即执行函数可以写成箭头函数的形式。

   ```javascript
   (() => {
     console.log('Welcome to the Internet.');
   })();
   ```

   >\* 使用匿名函数当作参数的场合，尽量用箭头函数代替。因为这样更简洁，而且绑定了 this。

   ```javascript
   // bad
   [1, 2, 3].map(function (x) {
     return x * x;
   });
   
   // good
   [1, 2, 3].map((x) => {
     return x * x;
   });
   
   // best
   [1, 2, 3].map(x => x * x);
   ```

   >\* 箭头函数取代`Function.prototype.bind`，不应再用 self/_this/that 绑定 this。

   ```javascript
   // bad
   const self = this;
   const boundMethod = function(...params) {
     return method.apply(self, params);
   }
   
   // acceptable
   const boundMethod = method.bind(this);
   
   // best
   const boundMethod = (...params) => method.apply(this, params);
   ```

   >\* 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。

   ```javascript
   // bad
   function divide(a, b, option = false ) {
   }
   
   // good
   function divide(a, b, { option = false } = {}) {
   }
   ```

   >\* 不要在函数体内使用 arguments 变量，使用 rest 运算符（...）代替。因为 rest 运算符显式表明你想要获取参数，而且 arguments 是一个类似数组的对象，而 rest 运算符可以提供一个真正的数组

   ```javascript
   // bad
   function concatenateAll() {
     const args = Array.prototype.slice.call(arguments);
     return args.join('');
   }
   
   // good
   function concatenateAll(...args) {
     return args.join('');
   }
   ```

   > \* 使用默认值语法设置函数参数的默认值。

   ```javascript
   // bad
   function handleThings(opts) {
     opts = opts || {};
   }
   
   // good
   function handleThings(opts = {}) {
     // ...
   }
   ```

   -------

7. Map结构

   >\* 注意区分 Object 和 Map，只有模拟现实世界的实体对象时，才使用 Object。如果只是需要`key: value`的数据结构，使用 Map 结构。因为 Map 有内建的遍历机制。

   ```javascript
   let map = new Map(arr);
   
   for (let key of map.keys()) {
     console.log(key);
   }
   
   for (let value of map.values()) {
     console.log(value);
   }
   
   for (let item of map.entries()) {
     console.log(item[0], item[1]);
   }
   ```

   -------

8. Class

   >\* 总是用 Class，取代需要 prototype 的操作。因为 Class 的写法更简洁，更易于理解。

   ```javascript
   // bad
   function Queue(contents = []) {
     this._queue = [...contents];
   }
   Queue.prototype.pop = function() {
     const value = this._queue[0];
     this._queue.splice(0, 1);
     return value;
   }
   
   // good
   class Queue {
     constructor(contents = []) {
       this._queue = [...contents];
     }
     pop() {
       const value = this._queue[0];
       this._queue.splice(0, 1);
       return value;
     }
   }
   ```

   >\* 使用`extends`实现继承，因为这样更简单，不会有破坏`instanceof`运算的危险。

   ```javascript
   // bad
   const inherits = require('inherits');
   function PeekableQueue(contents) {
     Queue.apply(this, contents);
   }
   inherits(PeekableQueue, Queue);
   PeekableQueue.prototype.peek = function() {
     return this._queue[0];
   }
   
   // good
   class PeekableQueue extends Queue {
     peek() {
       return this._queue[0];
     }
   }
   ```

   --------

9. 模块

   >\* 首先，Module 语法是 JavaScript 模块的标准写法，坚持使用这种写法。使用`import`取代`require`。

   ```javascript
   // bad
   const moduleA = require('moduleA');
   const func1 = moduleA.func1;
   const func2 = moduleA.func2;
   
   // good
   import { func1, func2 } from 'moduleA';
   ```

   >\* 使用`export`取代`module.exports`。

   ```javascript
   // commonJS的写法
   var React = require('react');
   
   var Breadcrumbs = React.createClass({
     render() {
       return <nav />;
     }
   });
   
   module.exports = Breadcrumbs;
   
   // ES6的写法
   import React from 'react';
   
   class Breadcrumbs extends React.Component {
     render() {
       return <nav />;
     }
   };
   
   export default Breadcrumbs;
   ```

   >\* 如果模块只有一个输出值，就使用`export default`，如果模块有多个输出值，就不使用`export default`，`export default`与普通的`export`不要同时使用。
   >
   >不要在模块输入中使用通配符。因为这样可以确保你的模块之中，有一个默认输出（export default）。

   ```javascript
   // bad
   import * as myObject from './importModule';
   
   // good
   import myObject from './importModule';
   ```

   >\* 如果模块默认输出一个函数，函数名的首字母应该小写。

   ```javascript
   function makeStyleGuide() {
   }
   
   export default makeStyleGuide;
   ```

   >\* 如果模块默认输出一个对象，对象名的首字母应该大写。

   ```javascript
   const StyleGuide = {
     es6: {
     }
   };
   
   export default StyleGuide;
   ```

   ----------

10. ESLint的使用

    >\* ESLint 是一个语法规则和代码风格的检查工具，可以用来保证写出语法正确、风格统一的代码。

    1. 首先，安装 ESLint。

    ```cmd
    $ npm i -g eslint
    ```

    2. 然后，安装 Airbnb 语法规则，以及 import、a11y、react 插件。

    ```cmd
    $ npm i -g eslint-config-airbnb
    $ npm i -g eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
    ```

    3. 最后，在项目的根目录下新建一个`.eslintrc`文件，配置 ESLint。

    ```
    {
      "extends": "eslint-config-airbnb"
    }
    ```

    4. 现在就可以检查，当前项目的代码是否符合预设的规则。`index.js`文件的代码如下。

    ```javascript
    var unusued = 'I have no purpose!';
    
    function greet() {
        var message = 'Hello, World!';
        alert(message);
    }
    
    greet();
    ```

    5. 使用 ESLint 检查这个文件，就会报出错误。

    ```
    $ eslint index.js
    index.js
      1:1  error  Unexpected var, use let or const instead          no-var
      1:5  error  unusued is defined but never used                 no-unused-vars
      4:5  error  Expected indentation of 2 characters but found 4  indent
      4:5  error  Unexpected var, use let or const instead          no-var
      5:5  error  Expected indentation of 2 characters but found 4  indent
    
    ✖ 5 problems (5 errors, 0 warnings)
    ```

    >上面代码说明，原文件有五个错误，其中两个是不应该使用`var`命令，而要使用`let`或`const`；一个是定义了变量，却没有使用；另外两个是行首缩进为 4 个空格，而不是规定的 2 个空格。

    -----

## 30.读懂规格

1. ECMAScript 6 的规格，ECMA 国际标准组织的官方网站（[www.ecma-international.org/ecma-262/6.0/](http://www.ecma-international.org/ecma-262/6.0/)）免费下载和在线阅读。

2. 抽象操作：引擎的一些内部方法，外部不能调用。规格定义了一系列的抽象操作，规定了他们的行为，留给各种引擎自己去实现。如：`Boolean(value)`，抽象操作，是引擎内部求出布尔值的算法。

3. 键值对(key-value map)：Record;每一组键值对：field。一个Record由多个field组成，而每个field都包含一个键名(key)和一个键值(value)。

4. [[Notation]]:[[value]]、[[Writable]]、[[Get]]、[[Set]]等。它用来指代field的键名。

   ```javascript
   /*举例来说，obj是一个 Record，它有一个Prototype属性。ES6 规格不会写obj.Prototype，而是写obj.[[Prototype]]。一般来说，使用[[Notation]]这种书写法的属性，都是对象的内部属性。
   所有的 JavaScript 函数都有一个内部属性[[Call]]，用来运行该函数。*/
   F.[[Call]](V, argumentsList)
   /*上面代码中，F是一个函数对象，[[Call]]是它的内部方法，F.[[call]]()表示运行该函数，V表示[[Call]]运行时this的值，argumentsList则是调用时传入函数的参数。*/
   ```

5. Completion Record:每个语句都会返回一个Completion Record，表示运行结果。每个Completion Record有一个[[Type]]属性，表示运行结果的类型。`[[Type]]`属性有五种可能的值：

   >\- normal
   >
   >\- return
   >
   >\- throw
   >
   >\- break
   >
   >\- continue

   ```
   如果[[Type]]的值是normal，就称为 normal completion，表示运行正常。其他的值，都称为 abrupt completion。其中，开发者只需要关注[[Type]]为throw的情况，即运行出错；break、continue、return这三个值都只出现在特定场景，可以不用考虑。
   ```

6. 抽象操作的标准流程。

   ```javascript
   1.Let result be AbstractOp().
   2.If result is an abrupt completion, return result.
   3.Set result to result.[[Value]].
   4.return result.
   /*上面的第一步调用了抽象操作AbstractOp()，得到result，这是一个 Completion Record。第二步，如果result属于 abrupt completion，就直接返回。如果此处没有返回，表示result属于 normal completion。第三步，将result的值设置为resultCompletionRecord.[[Value]]。第四步，返回result。*/
   //ES6 规格将这个标准流程，使用简写的方式表达。
   Let result be AbstractOp().
   ReturnIfAbrupt(result).
   return result.
   /*这个简写方式里面的ReturnIfAbrupt(result)，就代表了上面的第二步和第三步，即如果有报错，就返回错误，否则取出值。*/
   //甚至还有进一步的简写格式。
   Let result be ? AbstractOp().
   return result.
   /*上面流程的?，就代表AbstractOp()可能会报错。一旦报错，就返回错误，否则取出值。
   除了?，ES 6 规格还使用另一个简写符号!。*/
   Let result be ! AbstractOp().
   return result.
   /*上面流程的!，代表AbstractOp()不会报错，返回的一定是 normal completion，总是可以取出值。*/
   ```

7. 相等运算符

   ```javascript
   //算法细节：
   1.ReturnIfAbrupt(x).
   2.ReturnIfAbrupt(y).
   3.If Type(x) is the same as Type(y), then
       1.Return the result of performing Strict Equality Comparison x === y.
   4.If x is null and y is undefined, return true.
   5.If x is undefined and y is null, return true.
   6.If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
   7.If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
   8.If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
   9.If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
   10.If Type(x) is either String, Number, or Symbol and Type(y) is Object, then return the result of the comparison x == ToPrimitive(y).
   11.If Type(x) is Object and Type(y) is either String, Number, or Symbol, then return the result of the comparison ToPrimitive(x) == y.
   12.Return false.
   //上面这段算法，一共有 12 步，翻译如下。
   1.如果x不是正常值（比如抛出一个错误），中断执行。
   2.如果y不是正常值，中断执行。
   3.如果Type(x)与Type(y)相同，执行严格相等运算x === y。
   4.如果x是null，y是undefined，返回true。
   5.如果x是undefined，y是null，返回true。
   6.如果Type(x)是数值，Type(y)是字符串，返回x == ToNumber(y)的结果。
   7.如果Type(x)是字符串，Type(y)是数值，返回ToNumber(x) == y的结果。
   8.如果Type(x)是布尔值，返回ToNumber(x) == y的结果。
   9.如果Type(y)是布尔值，返回x == ToNumber(y)的结果。
   10.如果Type(x)是字符串或数值或Symbol值，Type(y)是对象，返回x == ToPrimitive(y)的结果。
   11.如果Type(x)是对象，Type(y)是字符串或数值或Symbol值，返回ToPrimitive(x) == y的结果。
   12.返回false。
   ```

8. 数组的空位

   ```javascript
   const a1 = [undefined, undefined, undefined];
   const a2 = [, , ,];
   
   a1.length // 3
   a2.length // 3
   
   a1[0] // undefined
   a2[0] // undefined
   
   a1[0] === a2[0] // true
   ```

   ```javascript
   0 in a1 // true
   0 in a2 // false
   
   a1.hasOwnProperty(0) // true
   a2.hasOwnProperty(0) // false
   
   Object.keys(a1) // ["0", "1", "2"]
   Object.keys(a2) // []
   //上面三种运算说明：数据a2取不到属性名
   a1.map(n => 1) // [1, 1, 1]
   a2.map(n => 1) // [, , ,]
   //数组a2没有发生遍历
   ```

9. 数组的map方法

   ```javascript
   const arr = [, , ,];
   arr.map(n => {
     console.log(n);
     return 1;
   }) // [, , ,]
   /*arr是一个全是空位的数组，map方法遍历成员时，发现是空位，就直接跳过，不会进入回调函数。因此，回调函数里面的console.log语句根本不会执行，整个map方法返回一个全是空位的新数组。*/
   ```

   

## 31. ES7

1. 指数运算符（幂）：**

2. Array.prototype.includes(value)：判断数组中是否包含指定value

   ```javascript
   console.log(3**3);//输出:27,3的3次方
   let arr3=[1,2,34,'abd'];
   console.log(arr3.includes(2));//true
   ```











​	





