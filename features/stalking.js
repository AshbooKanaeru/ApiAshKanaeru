const ch = require('../lib/scraper')
const { getBuffer } = require('../lib/function')
const { cekKey, limitAdd, isLimit } = require('../database/db');
const { igProfile } = require('../lib/instagram.js')

const fs = require('fs')
const request = require('request')
const fetch = require('node-fetch')

__path = process.cwd()

async function idepep(req, res) {
         try {
    let { apikey, id } = req.query
    if (!apikey) return res.status(400).send({ status: 400, message: 'Masukkan parameter apikey' })
    cek = await cekKey(apikey)
    if (!cek) return res.status(403).send({ status: 403, message: 'Ups... Your apikey invalid' })
    if (!id) return res.status(400).send({ status: 400, message: 'Masukkan parameter id' })
    limit = await isLimit(req.query.apikey)
    if (limit) return res.status(429).send({ status: 429, message: 'Limit apikey anda habis!' })
    limitAdd(req.query.apikey);
        let { nickname } = await ch.fetchJson(`https://api-xyz.com/trueid/freefire/?id=${id}&token=NguyenThuWan`)
        if (!nickname) return res.status(404).send({ status: 404, message: 'invalid ID' })
        res.send({ status: 200, result: nickname })
    } catch(err) {
              console.log(err)
        res.status(500).send({ status: 500, message: 'Internal server error' })
    }
}

async function idml(req, res) {
         try {
    let { apikey, id, server } = req.query
    if (!apikey) return res.status(400).send({ status: 400, message: 'Masukkan parameter apikey' })
    cek = await cekKey(apikey)
    if (!cek) return res.status(403).send({ status: 403, message: 'Ups... Your apikey invalid' })
    if (!id) return res.status(400).send({ status: 400, message: 'Masukkan parameter id' })
    if (!server) return res.status(400).send({ status: 400, message: 'Masukkan parameter server' })
    limit = await isLimit(req.query.apikey)
    if (limit) return res.status(429).send({ status: 429, message: 'Limit apikey anda habis!' })
    limitAdd(req.query.apikey);
        let { result } = await ch.fetchJson(`https://apikey-bear3.herokuapp.com/api/id/ml?apikey=KingOfBear&id=${id}&server=${server}`)
        if (!result) return res.status(404).send({ status: 404, message: 'invalid ID/SERVER' })
        res.send({ status: 200, result: result })
    } catch(err) {
              console.log(err)
        res.status(500).send({ status: 500, message: 'Internal server error' })
    }
}

     async function ghstalk(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.ghstalk(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/62895328108012', result: 'error' })
         }
     }
     
     async function igstalk(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await igProfile(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/62895328108012', result: 'error' })
         }
     }
     
     async function wattpad(req, res) {
         try {
            let username = req.query.username
            let apikey = req.query.apikey
            if (!username) return res.status(400).send({ status: 400, message: 'username parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            let result = await ch.WattpadUser(username)
              res.status(200).json({ status: 200, result: result })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/62895328108012', result: 'error' })
         }
     }
     
     async function npminfo(req, res) {
         try {
            let query = req.query.query
            let apikey = req.query.apikey
            if (!query) return res.status(400).send({ status: 400, message: 'query parameter cannot be empty', result: 'error' })
            if (!apikey) return res.status(400).send({ status: 400, message: 'apikey parameter cannot be empty', result: 'error' })
            let check = await cekKey(apikey)
            if (!check) return res.status(404).send({ status: 404, message: `apikey ${apikey} not found, please register first.` })
            let limit = await isLimit(apikey);
            if (limit) return res.status(429).send({ status: 429, message: 'requests limit exceeded (500 req / day), call owner for an upgrade to premium', result: 'error' })
            limitAdd(apikey);
            fetch(encodeURI(`https://registry.npmjs.org/${query}`))
           .then(response => response.json())
           .then(result => {
              res.status(200).json({ status: 200, result: result })
            })
         } catch(err) {
              console.log(err)
              res.status(500).send({ status: 500, message: 'An internal error occurred. Please report via WhatsApp wa.me/62895328108012', result: 'error' })
         }
     }
    
    
module.exports = { 
   idepep,
   idml,
   ghstalk, 
   wattpad, 
   igstalk,
   npminfo
}
