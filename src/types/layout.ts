import { IChildren } from '@Type/utils'

interface ILayout {
	children: IChildren['children']
	title: string
	description: string
}

export default ILayout