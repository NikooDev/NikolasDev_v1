import React from 'react'
import Masonry from 'react-masonry-css'
import Tippy, { useSingleton } from '@tippyjs/react'
import { SocketIO, TailwindCSS } from '@Component/icons/stack'
import Container from '@Layout/container'
import Title from '@Layout/container/title'
import Image from 'next/image'

const Projects = () => {
	const [source, target] = useSingleton()

	const card = "flex flex-col bg-white dark:bg-[#212529] rounded-2xl shadow-lg mb-4 md:mb-8 font-quicksand dark:opacity-60 opacity-80 dark:hover:opacity-100 hover:opacity-100 transition-opacity duration-300"

	return (
		<section className="mt-32 pt-14" id="projects">
			<Container>
				<Title>RÉALISATIONS</Title>
				<Masonry breakpointCols={{default: 2, 768: 1}} className="flex mt-16 w-auto p-3 md:p-0" columnClassName="col">
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<span className="absolute -top-3.5 left-6 text-sm text-white font-semibold py-1 px-3 z-[40] rounded-3xl bg-gradient-to-tr from-[#6a98ef] to-[#4961db]">Développement en cours</span>
							<Image src={'/static/projects/wakychat.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="wakychat" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">WakyChat</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" layout="fill" alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" layout="fill" alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Socket.io" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<SocketIO height={30} width={30}/>
										</div>
									</div>
								</Tippy>
								<Tippy content="AdonisJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/adonisjs.svg" layout="fill" alt="adonisjs"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="PostgreSQL" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/postgresql.svg" layout="fill" alt="postgresql"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Chat en temps réel avec globe intéractif (ThreeJS) permettant de voir les utilisateurs connectés selon leur localisation sur le globe.</p>
							<div className="flex justify-end mt-4">
								<a href="/" className="inline-flex ml-1.5 text-white hover:underline underline-offset-4 font-semibold">EN SAVOIR PLUS</a>
							</div>
							<p className="mt-4 font-semibold hidden">Fonctionnalités :</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/portfolio.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="portfolio" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Portfolio NikolasDev.com</p>
							<div className="flex items-center justify-center mt-3 mb-3 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" layout="fill" alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" layout="fill" alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Socket.io" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<SocketIO height={30} width={30}/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Tailwind CSS" singleton={target}>
									<div className="pt-3">
										<div className="flex justify-center w-[3.5rem] h-[1.8rem]">
											<TailwindCSS height={30} width={30}/>
										</div>
									</div>
								</Tippy>
							</div>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/groupomania.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="groupomania" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Réseau social</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="ReactJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/react.svg" layout="fill" alt="react"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" layout="fill" alt="node"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="AdonisJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/adonisjs.svg" layout="fill" alt="adonisjs"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="PostgreSQL" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/postgresql.svg" layout="fill" alt="postgresql"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Réalisation d'un réseau social professionnel (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/kanap.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="kanap" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">E-commerce</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" layout="fill" alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" layout="fill" alt="css"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Javascript" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/js.svg" layout="fill" alt="javascript"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="NodeJS" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/nodejs.svg" layout="fill" alt="node"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Récupération de données d'une API REST (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/ohmyfood.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="ohmyfood" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Intégration web</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" layout="fill" alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" layout="fill" alt="css"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="Javascript" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/js.svg" layout="fill" alt="javascript"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Intégration d'une maquette desktop vers mobile (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/agence.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="agence" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Optimisation SEO</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" layout="fill" alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" layout="fill" alt="css"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Optimisation SEO d'un site internet existant (Projet étudiant).</p>
						</div>
					</div>
					<div className={card}>
						<div className="relative min-h-[302.41px]">
							<Image src={'/static/projects/booki.jpg'} className="rounded-t-2xl" objectFit="cover" layout="fill" alt="booki" />
						</div>
						<div className="relative z-30 p-4 bg-white dark:bg-[#212529] rounded-b-2xl">
							<p className="text-lg font-semibold">Site vitrine</p>
							<div className="flex items-center justify-center mt-3 mb-8 relative">
								<Tippy singleton={source} moveTransition="transform .2s ease-out" />
								<Tippy content="HTML" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/html.svg" layout="fill" alt="html"/>
										</div>
									</div>
								</Tippy>
								<Tippy content="CSS3" singleton={target}>
									<div className="pt-3">
										<div className="relative w-[3.5rem] h-[1.8rem]">
											<Image src="/static/skills/css.svg" layout="fill" alt="css"/>
										</div>
									</div>
								</Tippy>
							</div>
							<p>Création d'un site responsive HTML + CSS à partir d'une maquette (Projet étudiant).</p>
						</div>
					</div>
				</Masonry>
			</Container>
		</section>
	)
}

export default Projects