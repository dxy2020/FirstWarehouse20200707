//function Person(name,age){//定义构造函数
//	this.name=name;
//	this.age=age
//}
//let person =new Person('张三',28);//构造函数生成实例对象:构造方法constructor用于生成实例
//console.log(person);
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
