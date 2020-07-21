# MVVM框架

## 1.数据代理

1. 数据代理：通过一个对象代理对另一个对象中属性的操作(读/写)

2. vue数据代理：通过vm对象来代理data对象中所有属性的操作

3. 好处：跟方便的操作data中的数据

4. 基本实现流程：

   >\* 通过Object.defineProperty()给vm添加与data对象的属性对应的属性描述符
   >
   >\* 所有添加的属性都包含getter/setter
   >
   >\* getter/setter内部去操作data中对应的属性数据。

## 2.模板解析



## 3.数据绑定



## 4.要点

1. [].slice.call(list)：将伪数组转换为真数组

   ```html
   <html>
       <body>
           <div id="idtest">
               <ul id="ultest">
                   <li>标题一</li>
                   <li>标题二</li>
                   <li>标题三</li>
               </ul>
               
           </div>
           <script type="text/javascript">
           	let arr=document.getElementsByTagName('li');
               console.log(arr instanceof Array,arr[1].innerHTML,arr.forEach);
               let arrli=Array.slice.call(arr);
               console.log(arrli instanceof Array,arrli[1].innerHTML,arrli.forEach)
           </script>
       </body>
       
   </html>
   ```

   

2. node.nodeType：得到节点类型

   ```html
   //节点：document,elements,attribute(属性节点),text
   <html>
       <body>
           <div id="idtest">hello world</div>
           <div id="idtest1">
               <ul id="ultest">
                   <li>标题一</li>
                   <li>标题二</li>
                   <li>标题三</li>
               </ul>
               
           </div>
           <script type="text/javascript">
           	const elementNode=document.getElementById('idtest');
               const attrNode=elementNode.getAttributeNode('id');
               const textNode=elementNode.firstChild;
               console.log(elementNode.nodeType,attrNode.nodeType,textNode.nodeType);
           </script>
       </body>
       
   </html>
   ```

   

3. Object.defineProperty(obj,propertyName,{})：给对象添加属性(指定描述符)

   ```js
   const obj={
       firstname:"a",
       latsname:"b"
   };
   //给obj添加fullname属性
   //obj.fullname="a-b";
   /*
   	1.属性描述符：
   	configurable:是否可以重新定义
   	enumerable:是否可以枚举
   	value：初始值
   	writable：是否可以修改属性值
   	2.访问描述符：
   	get：回调函数，根据其他相关的属性动态计算得到当前属性值
   	set：回调函数，监视当前属性值的变化，更新其他相关的属性值
   	
   */
   Object.defineProperty(obj,'fullname',{
       get(){
           return this.firstname+'-'+this.lastname
       },
       set(value){
           const names=value.split('-');
           this.firstname=names[0];
           this.lastname=names[1];
       }
   });
   console.log(obj.fullname);//a-b
   obj.firstname='A';
   obj.lastname='B';
   console.log(obj.fullname);//A-B
   
   ```

   

4. Object.keys(obj)：得到对象自身可枚举属性组成的数组

5. obj.hasOwnProperty(prop)：判断prop是否是obj自身的属性

6. DocumentFragment：文档碎片(高效批量更新多个节点)

   >\* document：对应显示的页面，包含n个element。一旦更新document内部的某个元素界面更新。
   >
   >\* documentFragment：内存中保存n个element的容器对象(不与界面关联)，如果更新framgnet中的某个element，界面不变。

   ```html
   <html>
       <body>
           <div id="idtest">hello world</div>
           <div id="idtest1">
               <ul id="ultest">
                   <li>标题一</li>
                   <li>标题二</li>
                   <li>标题三</li>
               </ul>
               
           </div>
           <script type="text/javascript">
          		const ul=document.getElementById('ultest');
               //1.创建fragment
               const fragment=document.createDocumentFragment();
               //2.取出ul中所有子节点取出保存到fragment
               let child;
               while(child=ul.firstChild){//一个节点只能有一个父亲
                   fragment.appendChild(child);//先将child从ul中移除，添加为fragment子节点
               }
           	//3.更新fragment中所有li的文本
               Array.prototype.slice.call(fragment.chilNodes).forEach(node=>{
                   if(node.nodeType===1){//元素节点</li>
                       node.textContent="abcdefg";                    
                   }
               });
               //4.将fragment插入ul
               ul.appendChild(fragment);
           </script>
       </body>
       
   </html>
   ```

   