const { cekKey, limitAdd, isLimit } = require('../database/db');
const { sleep } = require('../lib/function')
const { textpro2 } = require('../lib/textpro')

const knights = require("knights-canvas")
const DIG = require('discord-image-generation')
const Caxinha = require('caxinha')
const removebg = require('removebg-id')
const yuricanvas = require("yuri-canvas")
const fs = require('fs')

__path = process.cwd()

async function neonlight(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function glitchtiktok(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let text2 = req.query.text2
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html', `text[]=${text}&text2[]=${text2}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function Style1917(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/1917-style-text-effect-online-980.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function deepsea3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function scifi3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function rainbow3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function waterpipe3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function stone3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function neonlight3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-3d-neon-light-text-effect-online-1028.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function gradient3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/online-3d-gradient-text-effect-generator-1020.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function abstragold(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/abstra-gold-text-effect-859.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function americanflag(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-american-flag-3d-text-effect-online-1051.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function spookyhallowen(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let text2 = req.query.text2
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html', `text[]=${text}&text[]=${text2}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function bagel(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/bagel-text-effect-857.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function berry(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-berry-text-effect-online-free-1033.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function biscuit(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/biscuit-text-effect-858.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function blackmetal(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/black-metal-text-effect-829.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

 async function blackpink(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-blackpink-logo-style-online-1001.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function greenneon(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-green-neon-text-effect-874.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function neon(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/neon-light-text-effect-online-882.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function foggy(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/write-text-on-foggy-window-online-free-1015.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function NeonDevil(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function ChristmasHoliday(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function Engraved3D(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/sand-engraved-3d-text-effect-989.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function Space3D(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let text2 = req.query.text2
         if (!text2) return res.status(400).send({ status: 400, message: 'text2 parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/create-space-3d-text-effect-online-985.html', `text[]=${text}&text[]=${text2}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function Minion3D(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/minion-text-effect-3d-online-978.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

async function Firework(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	textpro2('https://textpro.me/firework-sparkle-text-effect-930.html', `text[]=${text}`).then((buff) => {
		if (buff.status == false || buff.status == "false") return res.send(JSON.stringify(buff, null, 4));
		res.header("Content-Type", 'image/jpeg');
		res.header("Content-Disposition", `inline; filename="neon-devil-wings_hadi-api.jpg"`)
		res.end(buff, 'binary')
	}).catch(e => {
		console.log(e)
		res.status(500).send({
			status: false,
			message: 'Internal Server Error'
		})
	})
}

module.exports = { 
   glitchtiktok, 
   neonlight, 
   Style1917, 
   deepsea3d, 
   scifi3d, 
   rainbow3d, 
   waterpipe3d, 
   stone3d, 
   neonlight3d, 
   gradient3d, 
   abstragold, 
   americanflag, 
   spookyhallowen, 
   bagel, 
   berry, 
   biscuit, 
   blackmetal, 
   blackpink, 
   greenneon, 
   neon, 
   foggy, 
   NeonDevil, 
   ChristmasHoliday, 
   Engraved3D, 
   Space3D, 
   Minion3D, 
   Firework
}
