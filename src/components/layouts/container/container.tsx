import React from 'react'
import { ITitle } from '@Type/core'
import Class from 'classnames'

const Container: React.FC<ITitle> = ({ children, classname }) => {
	return (
		<div className={Class('mx-auto max-w-6xl px-0 md:px-4 w-full', classname)}>
			{ children }
		</div>
	)
}

export default Container