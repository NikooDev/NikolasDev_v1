import React from 'react'
import Container from '@Layout/container'
import Title from '@Layout/container/title'
import { Facebook, Github, Linkedin } from '@Component/icons/social'

const AboutOriginal = () => {
	return (
		<section className="mt-32 pt-14" id="about">
			<Container>
				<Title>QUI SUIS-JE ?</Title>
				<div className="absolute left-0 mt-20 w-full min-h-[25rem] bg-gradient-to-tr from-[#6a98ef] to-[#4961db] shadow-lg -z-10 -skew-y-3"/>
				<div className="flex flex-col items-center md:flex-row">
					<div className="flex flex-col">
						<img src="/static/avatar.svg" className="flex -mt-36 rounded-3xl bg-[#f8f8f8] dark:bg-[#0f1113] border-white" height={350} width={350} alt="avatar"/>
						<div className="flex justify-center mt-5">
							<a href="https://github.com/NikooDev" target="_blank" className="mr-5 text-white hover:text-[#383838] transition-colors duration-200" aria-label="Github">
								<Github />
							</a>
							<a href="https://www.facebook.com/nikoola44/" target="_blank" className="mr-5 text-white hover:text-[#383838] transition-colors duration-200" aria-label="Facebook">
								<Facebook />
							</a>
							<a href="https://www.linkedin.com/in/nicolas-tual-677092161/" aria-label="Linkedin" className="text-white hover:text-[#383838] transition-colors duration-200" target="_blank">
								<Linkedin />
							</a>
						</div>
					</div>
					<div className="mt-36 mb-5 px-10 text-white text-base font-quicksand">
						<p className="mb-3">Je m'appelle <strong>Nicolas Tual</strong>, je suis actuellement étudiant en Bachelor Concepteur Développeur d'Application (BAC +3) chez MyDigitalSchool.</p>
						<p className="mb-3">Mon intérêt et ma passion pour les technologies du web ont commencé en 2005.
							<br />Durant ces années j'ai su me former et développer des compétences en devenant autodidacte.</p>
						<p className="mb-3">L'obtention de mon BAC professionnel Système Numérique en 2020 a été un tremplin pour pouvoir accéder à des formations supérieures diplomantes.</p>
						<p className="mt-12 py-2">Vous souhaitez en savoir plus ?<br/>N'hésitez pas à <a href="/"  data-anchor="contact" className="inline-flex ml-1.5 text-white hover:underline underline-offset-4 font-semibold">ME CONTACTER</a></p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-around relative -z-20">
					<div className="bg-white dark:bg-[#212529] w-11/12 h-40 pt-24 px-5 mr-5 shadow-lg rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand">
							<span className="text-3xl mr-3">+ </span>
							années d'autoformation
						</p>
					</div>
					<div className="bg-white dark:bg-[#212529] w-11/12 h-36 pt-20 px-5 mr-5 shadow-lg rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand">
							<span className="text-3xl mr-3"></span>
							projets web terminés
						</p>
					</div>
					<div className="bg-white dark:bg-[#212529] w-11/12 h-32 pt-16 px-5 shadow-lg rounded-b-2xl">
						<p className="flex items-center justify-center text-lg font-semibold font-quicksand">
							<span className="text-3xl mr-3"></span>
							projet en développement
						</p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export default AboutOriginal