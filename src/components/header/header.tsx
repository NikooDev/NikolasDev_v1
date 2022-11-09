import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Dark, Light } from '@Component/icons/darkmode'
import Container from '@Layout/container'
import HomeIcon from '@Component/icons/home'
import useAnchors from '@Hook/useAnchors'
import useTheme from '@Hook/useTheme'
import Class from 'classnames'

const Header = () => {
	const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>
	const { handleAnchor, anchor } = useAnchors()
	const { handleTheme } = useTheme()

	const link = "flex py-5 px-3 text-sm hover:text-[#4163c7] dark:hover:text-[#6a98ef] font-bold font-quicksand transition-colors"
	const linkActive = "text-[#4163c7] dark:text-[#6a98ef]"

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 850) {
				if (headerRef) headerRef.current.classList.remove('dark:bg-opacity-80')
			} else if (headerRef) headerRef.current.classList.add('dark:bg-opacity-80')
		})
	}, [headerRef])

	return (
		<>
			<header className="fixed w-full z-50" role="banner">
				<div className="flex flex-col justify-center bg-white dark:bg-[#0f1113] dark:bg-opacity-80 shadow-header dark:shadow-header-dark h-[4.15rem]" ref={headerRef}>
					<Container>
						<div className="flex items-center px-3 md:px-0">
							<Link href="/" passHref>
								<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="home" aria-label="logo" role="link">
									<img src="/static/logo.svg" height="35" width="51.48" alt="logo" />
								</a>
							</Link>
							<ul className="items-center ml-auto hidden md:flex">
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="home" aria-label="home" className={Class(anchor === 'home' && linkActive, 'flex py-5 px-3 text-sm hover:text-[#4163c7] dark:hover:text-[#6a98ef] transition-colors')}>
											<HomeIcon/>
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="about" className={Class(anchor === 'about' && linkActive, link)}>QUI SUIS-JE ?</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="projects" className={Class(anchor === 'projects' && linkActive, link)}>RÉALISATIONS</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="skills" className={Class(anchor === 'skills' && linkActive, link)}>COMPÉTENCES</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="training" className={Class(anchor === 'training' && linkActive, link)}>FORMATIONS</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a href="/" onClick={(event) => handleAnchor(event)} data-anchor="contact" className={Class(anchor === 'contact' && linkActive, link)}>GET IN TOUCH</a>
									</Link>
								</li>
								<li>
									<button onClick={(event) => handleTheme(event)} aria-label="darkmode"
										className="flex justify-center py-5 px-3 ml-2 h-[34px] w-[34px] outline-0 relative darkmode hover:text-[#4163c7] dark:hover:text-[#6a98ef] transition-colors">
										<Light classname="absolute top-0.5 translate-y-[-350%] dark:translate-y-0 transition-transform duration-500" fill="currentColor"/>
										<Dark classname="absolute top-0.5 translate-y-0 dark:translate-y-[-350%] transition-transform duration-500" fill="currentColor"/>
									</button>
								</li>
							</ul>
						</div>
					</Container>
				</div>
			</header>
			<button className="flex fixed bottom-20 right-0 bg-[#4961db] bg-gradient-to-r from-[#6a98ef] to-[#4961db] dark:bg-[#0f1113] dark:from-[#212529] dark:to-[#0f1113] shadow-md z-40 py-3 pl-4 pr-3 rounded-tl-full rounded-bl-full md:hidden">
				<svg focusable="false" aria-hidden="true" fill="#fff" height={34} width={34} viewBox="0 0 24 24">
					<path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z"/>
				</svg>
			</button>
			<button onClick={(event) => handleTheme(event)} aria-label="darkmode"
							className="flex fixed bottom-40 right-0 bg-[#4961db] bg-gradient-to-r from-[#6a98ef] to-[#4961db] dark:bg-[#0f1113] dark:from-[#212529] dark:to-[#0f1113] shadow-md z-40 py-3 pl-4 pr-3 rounded-tl-full rounded-bl-full h-[58px] w-[62px] md:hidden">
				<Light classname="absolute top-3 left-3 translate-x-[350%] dark:translate-x-[10%] transition-transform duration-500" fill="#fff"/>
				<Dark classname="absolute top-3 left-3 translate-x-[35%] dark:translate-x-[350%] transition-transform duration-500" fill="#fff"/>
			</button>
		</>
	)
}

export default Header