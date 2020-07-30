import Mock from 'mockjs';
export const getClassInformation=(options)=>{
	const template={
		'name|2-4': 'fujingwen',
		'parent|10': "fujingwen111",
	}
	return Mock.mock(template)
}
