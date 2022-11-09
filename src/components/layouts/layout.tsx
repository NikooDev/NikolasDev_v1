import React from 'react'
import { Toaster } from 'react-hot-toast'
import ILayout from '@Type/layout'
import { ThemeProvider } from '@Context/theme.context'
import Head from 'next/head'
import Header from '@Component/header'
import Cubes from '@Layout/cubes'

const Layout: React.FC<ILayout> = ({
	title,
	description,
	children }) => {
	return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name="description" content={description} />
			</Head>
			<ThemeProvider>
				<Header/>
				<Toaster position="top-center" containerClassName="notif" gutter={10}/>
				<main role="main">
					<Cubes/>
					<img src="/static/rect.svg" height="100%" width="100%" className="absolute right-0 -z-10 w-[40%] top-0" alt="cubes"/>
					{ children }
				</main>
			</ThemeProvider>
		</>
	)
}

export default Layout