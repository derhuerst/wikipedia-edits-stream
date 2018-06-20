'use strict'

const {Readable} = require('stream')
const EventSource = require('eventsource')

const endpoint = 'https://stream.wikimedia.org/v2/stream/recentchange'

const edits = () => {
	// todo: close src if stream gets closed
	const out = Readable({
		objectMode: true,
		read: () => {}
	})

	const src = new EventSource(endpoint)
	src.onmessage = (msg) => {
		try {
			const data = JSON.parse(msg.data)
			out.push(data)
		} catch (err) {
			out.destroy(err)
		}
	}
	src.onerror = err => out.destroy(err)

	out.on('close', () => src.close())
	out.close = () => src.close()

	return out
}

module.exports = edits
