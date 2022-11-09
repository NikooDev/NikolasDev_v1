import React from 'react'
import { ISvg } from '@Type/core'
import Class from 'classnames'

const Quotes = ({ height, width, classname }: ISvg) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" className={Class(classname ? classname : null)} height={height} width={width} enableBackground="new 0 0 32 32" viewBox="0 0 32 32">
			<g>
				<path d="m6.59998 19.23999c-.65998 1.65997-1.69996 3.29999-3.08997 4.88001-.44.5-.5 1.21997-.14001 1.77997.28003.44.73999.67999 1.23999.67999.14001 0 .28003-.00995.42004-.06 2.93994-.85999 9.81-3.90997 10-13.69.06995-3.76996-2.69-7.00995-6.28003-7.37995-1.98999-.20001-3.96997.44995-5.44 1.76996-1.46997 1.33002-2.31 3.23004-2.31 5.21002 0 3.29999 2.34003 6.19001 5.59998 6.81z"/>
				<path d="m24.71002 5.45001c-1.98004-.20001-3.96002.44995-5.42999 1.76996-1.47003 1.33002-2.31006 3.23004-2.31006 5.21002 0 3.29999 2.34003 6.19 5.60004 6.81-.66003 1.65997-1.70001 3.29999-3.09003 4.88-.44.5-.5 1.21997-.13995 1.77997.27997.44.73999.67999 1.23999.67999.13995 0 .27997-.00995.41998-.06 2.94-.85999 9.81-3.90997 10-13.69v-.13995c0-3.71002-2.72998-6.86999-6.28998-7.23999z"/>
			</g>
		</svg>
	)
}

export default Quotes