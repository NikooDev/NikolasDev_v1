import React from 'react'
import { GlobeMethods, GlobeProps } from 'react-globe.gl'

export interface GlobeRef {
	ref: React.MutableRefObject<GlobeProps & GlobeMethods>
}

export interface IGlobe {
	globe: GlobeProps & GlobeMethods
}

export interface IContact {
	name: string | null
	firstname: string | null
	from: string | null
	content: string | null
}

export interface IContactError {
	id: string
	message: string | null
	field: string | null
	isValid: boolean
}