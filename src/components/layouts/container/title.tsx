import React from 'react'
import { ITitle } from '@Type/core'
import Class from 'classnames'

const Title: React.FC<ITitle> = ({
	classname,
	children }) => {
	return <h2 className={Class('text-center font-extrabold text-2xl dark:text-[#6a98ef]', classname)}>{ children }</h2>
}

export default Title