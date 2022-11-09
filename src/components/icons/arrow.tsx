import React from 'react'
import { ISvg } from '@Type/core'
import Class from 'classnames'

const LeftIcon = ({ classname }: ISvg) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" className={Class(classname)} fill="currentColor" viewBox="0 0 16 16">
			<defs xmlns="http://www.w3.org/2000/svg">
				<linearGradient id="gradient" gradientUnits="userSpaceOnUse">
					<stop stopColor="#6a98f0" />
					<stop offset="1" stopColor="#4961dc" />
				</linearGradient>
			</defs>
			<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
		</svg>
	)
}

export default LeftIcon