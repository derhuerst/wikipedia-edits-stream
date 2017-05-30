# wikipedia-edits-stream

**A live stream of [page edits on Wikipedia](https://www.mediawiki.org/wiki/API:Recent_changes_stream).**

[![npm version](https://img.shields.io/npm/v/wikipedia-edits-stream.svg)](https://www.npmjs.com/package/wikipedia-edits-stream)
[![build status](https://img.shields.io/travis/derhuerst/wikipedia-edits-stream.svg)](https://travis-ci.org/derhuerst/wikipedia-edits-stream)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/wikipedia-edits-stream.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install wikipedia-edits-stream
```


## Usage

```js
const edits = require('.')

const e = edits()
e.on('data', console.log)
e.on('error', (err) => {
	console.error(err)
	process.exit(1)
})

setTimeout(() => e.close(), 10 * 1000)
```


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/wikipedia-edits-stream/issues).
