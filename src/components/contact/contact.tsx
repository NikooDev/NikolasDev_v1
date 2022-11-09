import React, { useCallback, useEffect, useRef, useState } from 'react'
import { OrbitControls } from 'three-orbitcontrols-ts'
import validContact, { notifStyle } from '@Validator/contact'
import { GlobeProps } from 'react-globe.gl'
import { GlobeRef, IGlobe, IContact } from '@Type/contact'
import useResponsive from '@Hook/useResponsive'
import renderMarker from '@Helper/markers'
import Container from '@Layout/container'
import Title from '@Layout/container/title'
import Class from 'classnames'
import toast from 'react-hot-toast'
import Footer from '@Component/footer'

let Globe: React.FC<GlobeProps & GlobeRef> = () => null
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default

const Contact = () => {
	const globeRef = useRef() as React.MutableRefObject<IGlobe['globe']>
	const [errorField, setErrorField] = useState<string | null>(null)
	const [contact, setContact] = useState<IContact>({ name: null, firstname: null, from: null, content: null })
	const [coords, setCoords] = useState({ lat: 27.052274, lng: -44.944836, current: false })
	const [readyGlobe, setReadyGlobe] = useState<boolean>(false)
	const [loading, setLoading] = useState<boolean>(false)
	const [arcsData, setArcsData] = useState<any>([])
	const timer = useRef<ReturnType<typeof setTimeout>>()

	const { Sm, Md, Lg } = useResponsive()

	const emitArc = useCallback(() => {
		const arc = { startLat: -21.877716, startLng: -24.843371, endLat: 47.7667, endLng: -3.2333 }
		setArcsData([arc])
	}, [])

	const emitErrorArc = useCallback(() => {
		const arc = { startLat: -21.877716, startLng: -24.843371, endLat: 51.857422, endLng: -38.772008 }
		setArcsData((prevState: any) => [...prevState, arc])
		globeRef.current.pointOfView({ lat: 40.7667, lng: -38.772008, altitude: 1.7 }, 1500)
		timer.current = setTimeout(() => setArcsData([]), 1500)
	}, [timer, globeRef])

	useEffect(() => {
		if (globeRef.current) {
			const controls = globeRef.current.controls() as OrbitControls
			globeRef.current.pointOfView({ lat: -2.968175, lng: -20.810247, altitude: 6 }, 500)
			controls.enableZoom = false
			controls.autoRotate = true
			controls.autoRotateSpeed = 1
		}
	}, [globeRef])

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
				setReadyGlobe(true)
			}
		})
	}, [])

	useEffect(() => {
		const training = document.getElementById('training') as HTMLDivElement

		window.addEventListener('scroll', () => {
			if (window.scrollY < training.offsetTop + 800) {
				toast.dismiss()
			}
		})
	}, [])

	useEffect(() => {
		if (readyGlobe) {
			globeRef.current.pointOfView({ lat: 40.7667, lng: 15.2333, altitude: 1.7 }, 1500)
			setCoords({ lat: 47.7667, lng: -3.2333, current: true })
		}
	}, [readyGlobe, globeRef])

	const handleChange = (event: React.ChangeEvent) => {
		const target = event.currentTarget as HTMLInputElement

		setErrorField(null)
		setContact({ ...contact, [target.name]: target.value })
	}

	const handleSendMessage = async (event: React.FormEvent) => {
		event.preventDefault()

		clearTimeout(timer.current)

		toast.dismiss()
		const error = validContact(contact)

		if (!error.isValid && error.field) {
			setErrorField(error.field)
			const input = document.getElementById(error.field) as HTMLInputElement
			input.focus()
			emitErrorArc()
			return toast.error(error.message, { id: error.id, duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#ef5454' } })
		} else {
			setErrorField(null)
		}

		setLoading(true)

		const req = await fetch('/api/postmail', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(contact)
		})

		const res = await req.json()
		setLoading(false)

		if (res.message.length !== 0) {
			if (res.type === 'success') {
				toast.success(res.message, { id: 'success', duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#4fad58' } })
				globeRef.current.pointOfView({ lat: 40.7667, lng: 15.2333, altitude: 1.7 }, 1500)
				setContact({ name: '', firstname: '', from: '', content: '' })
				setTimeout(() => emitArc(), 1500)
				setTimeout(() => setArcsData([]), 3000)
			} else {
				emitErrorArc()
				toast.error(res.message, { id: 'error', duration: 5000, icon: null, style: { ...notifStyle, backgroundColor: '#ef5454' } })
			}
		}
	}

	return (
		<section className="mt-32 pt-[4rem]" id="contact">
			<Container>
				<Title>GET IN TOUCH</Title>
				<div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-14 relative">
					<div className="flex justify-center relative w-full lg:w-1/2 hover:cursor-pointer active:cursor-grabbing">
						<Globe ref={globeRef}
									 backgroundColor="rgba(0, 0, 0, 0)" atmosphereColor="#888" globeImageUrl="/static/img/earth.webp" animateIn={false}
									 arcsData={arcsData} arcColor={() => errorField && errorField.length > 0 ? '#ef5454' : 'white'} arcDashLength={.4} arcDashGap={2}
									 arcDashInitialGap={1} arcStroke={.5} arcDashAnimateTime={1000} arcsTransitionDuration={0}
									 rendererConfig={{ preserveDrawingBuffer: true, antialias: false }}
									 htmlElementsData={coords.current ? [coords] : []} htmlElement={renderMarker}
									 height={Sm ? 350 : Md ? 610 : Lg ? 610 : 610} width={Sm ? 350 : Md ? 610 : Lg ? 610 : 610}/>
					</div>
					<form method="POST" autoComplete="off" onSubmit={handleSendMessage} className="flex flex-col p-3 md:p-8 w-full max-w-[33rem] font-quicksand">
						<div className="flex justify-between">
							<input type="text"
										 name="name"
										 id="name"
										 onChange={handleChange}
										 disabled={loading}
										 value={contact.name ? contact.name : ''}
										 className={Class(
											 'rounded-3xl mb-5 mr-2 py-2 px-4 w-full outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium capitalize transition-border',
											 errorField === 'name' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
										 )}
										 placeholder="Nom"/>
							<input type="text"
										 name="firstname"
										 id="firstname"
										 onChange={handleChange}
										 disabled={loading}
										 value={contact.firstname ? contact.firstname : ''}
										 className={Class(
											 'rounded-3xl mb-5 py-2 px-4 w-full outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium capitalize',
											 errorField === 'firstname' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
										 )}
										 placeholder="Prénom"/>
						</div>
						<input type="text"
									 name="from"
									 id="from"
									 onChange={handleChange}
									 disabled={loading}
									 value={contact.from ? contact.from : ''}
									 className={Class(
										 'rounded-3xl mb-5 py-2 px-4 outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg outline-0 font-medium',
										 errorField === 'from' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
									 )}
									 placeholder="Adresse e-mail"/>
						<textarea name="content"
											id="content"
											className={Class(
												'rounded-3xl mb-5 py-3 px-4 outline-none bg-white dark:bg-[#212529] border-2 border-white dark:border-[#212529] shadow-lg resize-none outline-0 font-medium',
												errorField === 'content' && 'border-2 border-red-500 dark:border-red-500 animate-pulse'
											)}
											rows={4}
											maxLength={500}
											onChange={handleChange}
											disabled={loading}
											value={contact.content ? contact.content : ''}
											placeholder="Votre message"/>
						<button disabled={loading} className="inline-flex justify-center items-center rounded-3xl p-3 outline-none disabled:opacity-70 disabled:hover:to-[#4961db] bg-[#4961db] bg-gradient-to-r from-[#7f9efa] to-[#394fbf] hover:bg-[#394fbf] text-white hover:to-transparent transition-colors duration-300 shadow-lg text-base font-semibold text-white" type="submit">
							<svg className={Class(loading ? '' : 'hidden','animate-spin -ml-1 mr-3 h-5 w-5 text-white')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
								<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							<span>{ loading ? 'ENVOI EN COURS...' : 'ENVOYER' }</span>
						</button>
					</form>
				</div>
				<Footer/>
			</Container>
		</section>
	)
}

export default Contact