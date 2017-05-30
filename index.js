'use strict'

const passthrough = require('readable-stream/passthrough')
const EventSource = require('eventsource')

const endpoint = 'https://stream.wikimedia.org/v2/stream/recentchange'

const edits = () => {
	// todo: close src if stream gets closed
	const out = passthrough({objectMode: true})

	const src = new EventSource(endpoint)
	src.onmessage = (msg) => {
		try {
			const data = JSON.parse(msg.data)
			out.write(data)
		} catch (err) {
			out.emit('error', err)
		}
	}
	src.onerror = (err) => out.emit('error', err)

	out.close = () => src.close()

	return out
}

module.exports = edits
