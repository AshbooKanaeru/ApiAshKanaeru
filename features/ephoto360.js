const { cekKey, limitAdd, isLimit } = require('../database/db');
const { sleep } = require('../lib/function')
const { EphotO } = require('../lib/ephoto')

const knights = require("knights-canvas")
const DIG = require('discord-image-generation')
const Caxinha = require('caxinha')
const removebg = require('removebg-id')
const yuricanvas = require("yuri-canvas")
const fs = require('fs')

__path = process.cwd()

async function glass(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	EphotO('https://en.ephoto360.com/write-text-on-wet-glass-online-589.html', `text[]=${text}`).then((gets) => {
	if (gets.a == false) {
		res.header('content-type', 'application/json');
		return res.send(JSON.stringify(gets.d,null,4));
	}
	res.header('content-type', 'image/jpeg');
	res.end(gets.d)
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

module.exports = { 
   glass
}
