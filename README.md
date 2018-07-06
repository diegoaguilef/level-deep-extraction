# level-deep-extraction
Function that receive a json with a tree structure and scan its childs by passing a level

Dependencies:
- Jquery

Example json tree whith three levels:
```
var json = {
	level1: {
		leve21: {
			leve31:{
				childLevel: 'some text',
				anotherChild: 1
			},
			level32:{
				childLevel: 'some child',
				anotherChild: 2
			},
			data1:'data1',
			data2: 'data2'
		},
		level22:{
			level31:{
				childLevel: 'some 3',
				anotherChild: 3
			},
			data1:'data1',
			data2: 'data2'
		},
		data13:'data31',
		data23: 'data23'
	},
	level2: {
		leve212: {
			leve312:{
				childLevel: 'some text',
				anotherChild: 1
			},
			level322:{
				childLevel: 'some child',
				anotherChild: 2
			},
			data12:'data12',
			data22: 'data22'
		},
		level222:{
			level312:{
				childLevel: 'some 3',
				anotherChild: 3
			},
			data21:'data21',
			data22: 'data22'
		},
		dataqq1:'dataq1',
		dataqq2: 'dataq2'
	}
}
```

Then, in the function, you need to pass the object and the level that you need to extract:
- To extract level 3 `levelDeepextraction(object, 3)`
- To extract level 2 `levelDeepextraction(object, 2)`
- To extract level 1 `levelDeepextraction(object, 1)`


And That's All !
