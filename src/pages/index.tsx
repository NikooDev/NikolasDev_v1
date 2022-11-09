import React from 'react'
import Layout from '@Layout/layout'
import Intro from '@Component/intro'
import About from '@Component/about'
import Projects from '@Component/projects'
import Skills from '@Component/skills'
import Training from '@Component/training'
import Dynamic from 'next/dynamic'

const Contact = Dynamic(() => import('@Component/contact'), { ssr: false })

const Home = () => {
	return (
		<>
			<Intro/>
			<About/>
			<Projects/>
			<Skills/>
			<Training/>
			<Contact/>
		</>
	)
}

Home.getLayout = (page: React.ReactElement) => {
	return (
		<Layout title="NikolasDev • Développeur web junior" description="Nicolas Tual, autodidacte, étudiant et développeur web passionné. Spécialisé en JavaScript Full-Stack : Node.js | Adonis.js | React.js | Next.js...">
			{ page }
		</Layout>
	)
}

export default Home