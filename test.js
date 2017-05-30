'use strict'

const test = require('tape')
const isStream = require('is-stream')

const edits = require('.')

test('edits', (t) => {
	const s = edits()
	let events = 0

	s.on('error', t.ifError)
	t.ok(isStream(s))
	s.on('data', (edit) => {
		t.equal(typeof edit.id, 'number')

		if (++events === 3) {
			s.close()
			t.end()
		}
	})
})
