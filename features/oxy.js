const { cekKey, limitAdd, isLimit } = require('../database/db');
const { sleep } = require('../lib/function')
const { PhotoOxy } = require('../lib/photooxy')
const { Oxy2 } = require('../lib/photooxy2')

const knights = require("knights-canvas")
const DIG = require('discord-image-generation')
const Caxinha = require('caxinha')
const removebg = require('removebg-id')
const yuricanvas = require("yuri-canvas")
const fs = require('fs')

__path = process.cwd()

async function flamingfire(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html', `text[]=${text}`).then((gets) => {
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

async function fallleaves(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html', `text[]=${text}`).then((gets) => {
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

async function shadow(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html', `text[]=${text}`).then((gets) => {
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

async function cup(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html', `text[]=${text}`).then((gets) => {
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

async function cup2(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html', `text[]=${text}`).then((gets) => {
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

async function romance(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html', `text[]=${text}`).then((gets) => {
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

async function smoke(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html', `text[]=${text}`).then((gets) => {
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

async function burnpaper(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html', `text[]=${text}`).then((gets) => {
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

async function lovemessage(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html', `text[]=${text}`).then((gets) => {
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

async function undergrass(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html', `text[]=${text}`).then((gets) => {
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

async function love(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/love-text-effect-372.html', `text[]=${text}`).then((gets) => {
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

async function coffe(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html', `text[]=${text}`).then((gets) => {
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

async function woodheart(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html', `text[]=${text}`).then((gets) => {
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

async function woodenboard(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html', `text[]=${text}`).then((gets) => {
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

async function summer3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html', `text[]=${text}`).then((gets) => {
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

async function wolfmetal(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html', `text[]=${text}`).then((gets) => {
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

async function nature3d(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html', `text[]=${text}`).then((gets) => {
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

async function underwater(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html', `text[]=${text}`).then((gets) => {
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

async function goldenrose(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html', `text[]=${text}`).then((gets) => {
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

async function summernature(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html', `text[]=${text}`).then((gets) => {
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

async function falllevaes(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html', `text[]=${text}`).then((gets) => {
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

async function harrypotter(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html', `text[]=${text}`).then((gets) => {
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

async function carvedwood(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html', `text[]=${text}`).then((gets) => {
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

async function tiktokoxy(req, res, next) {
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
	PhotoOxy("https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",`text[]=${text}&text[]=${text2}`).then((gets) => {
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

async function arcade8bit(req, res, next) {
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
	PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html",`text[]=${text}&text[]=${text2}`).then((gets) => {
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

async function battlefield4(req, res, next) {
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
	PhotoOxy("https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",`text[]=${text}&text[]=${text2}`).then((gets) => {
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

async function pubg(req, res, next) {
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
	PhotoOxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",`text[]=${text}&text[]=${text2}`).then((gets) => {
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

async function bannergraffiti(req, res, next) {
         let text = req.query.text
         if (!text) return res.status(400).send({ status: 400, message: 'text parameter cannot be empty', result: 'error' })
         let apikey = req.query.apikey
         if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
         let check = await cekKey(apikey)
         if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
         let limit = await isLimit(apikey);
         if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
         limitAdd(apikey);
	PhotoOxy('https://photooxy.com/banner-cover/graffiti-text-cover-222.html', `text[]=${text}`).then((gets) => {
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
   flamingfire,
   shadow,
   cup,
   cup2,
   romance,
   smoke,
   burnpaper,
   lovemessage,
   undergrass,
   love,
   coffe,
   woodheart,
   woodenboard,
   summer3d,
   wolfmetal,
   nature3d,
   underwater,
   goldenrose,
   summernature,
   fallleaves,
   harrypotter,
   carvedwood,
   tiktokoxy,
   arcade8bit,
   battlefield4,
   pubg,
   bannergraffiti
}
