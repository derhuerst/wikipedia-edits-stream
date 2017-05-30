'use strict'

const edits = require('.')

const e = edits()
e.on('data', console.log)
e.on('error', (err) => {
	console.error(err)
	process.exit(1)
})

setTimeout(() => e.close(), 10 * 1000)
