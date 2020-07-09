////async基本使用
//async function foo(){
//	return new Promise(resolve=>{
//		setTimeout(function(){
//			resolve();
//		},2000)
//		setTimeout(resolve,2000);
//	})
//}
//async function foo1(){
//	console.log('开始执行',new Date().toTimeString());
//	await foo();
//	console.log('执行完毕。。。',new Date().toTimeString())
//}
//foo1();
//async里await返回值
function test(){
	return 'xxx';
}
async function asyncPrint(){
//	let result1=await test();//console.log(result1);此时打印:xxx
	let result2=await Promise.resolve();//console.log(result2);此时打印:undefined
	let result3=await Promise.resolve('promise');//console.log(result3);此时打印:promise
	let result4=await Promise.reject('失败了。。。')//console.log(result4);此时打印:Uncaught (in promise) 失败了。。。
//	console.log(result4);
}
asyncPrint();

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
