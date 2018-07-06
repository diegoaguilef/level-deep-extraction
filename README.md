# level-deep-extraction
Function that receive a json with a tree structure and scan its childs by passing a level

Example json tree whith three levels:
	`level1: {
		leve21: {
			leve31{
				childLevel: 'some text',
				anotherChild: 1
			},
			level32:{
				childLevel: 'some child',
				anotherChild: 2
			}
		},
		level22:{
			level31:{
				childLevel: 'some 3',
				anotherChild: 3
			}
		}
	},
	level2: {
		leve212: {
			leve312{
				childLevel: 'some text',
				anotherChild: 1
			},
			level322:{
				childLevel: 'some child',
				anotherChild: 2
			}
		},
		level222:{
			level312:{
				childLevel: 'some 3',
				anotherChild: 3
			}
		}
	}
		`

Then, in the function u need to pass the object and the level that you need to extract:
	To extract level 3 `levelDeepextraction(object, 3)`


And That's All !