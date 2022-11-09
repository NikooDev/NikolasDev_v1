import { IChildren } from '@Type/utils'

export interface ISvg {
	height?: string | number
	width?: string | number
	fill?: string
	classname?: string
}

export interface ITitle {
	children: IChildren['children']
	classname?: string
}