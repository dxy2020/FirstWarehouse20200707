let v1=new Vue({
	el:'#v1',
	data:{
		searchName:'',
		selectorderType:0,
		persons:[
		{name:'张三',age:1},
		{name:'李四',age:2},
		{name:'王五',age:1},
		{name:'周六',age:12}		
		]
	},
	computed:{
		filterPersons:function(){
			const {searchName,persons,selectorderType}=this;
			let fpersons;
			fpersons=persons.filter(p=>p.name.indexOf(searchName)!==-1);			
			//排序
			if(selectorderType!==0){
				fpersons.sort(function(p1,p2){
					if(selectorderType===2){
						return p2.age-p1.age;
					}else{
						return p1.age-p2.age;
					}
				})
			}
			return fpersons;
		}
	},
	methods:{
		clickupdown(selectorderType){
			this.selectorderType=selectorderType;
		}
	}
})