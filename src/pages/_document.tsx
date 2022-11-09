import Document, { Html, Main, Head, NextScript } from 'next/document'
import React from 'react'

class HTML extends Document {
	render () {
		return (
			<Html lang="fr" className="dark">
				<Head>
					<script type="text/javascript" src="/static/js/noFlash.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default HTML