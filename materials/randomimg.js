const express = require('express')
var router = express.Router();
const { getBuffer, fetchJson } = require('../lib/meta')
const axios = require('axios')
const fs = require('fs')
let fetch = require('node-fetch');
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

router.get('/waifu', async(req, res) => {
  try{
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
  }catch(err){
   return console.log("There's something wrong "+ err)
  }
})
router.get('/husbu', async(req, res) => {
  try{
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
  }catch(err){
   return console.log("There's something wrong "+ err)
}
})
router.get('/loli', async(req, res) => {
  try{
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
      }catch(err){
   return console.log("There's something wrong "+ err)
  }
})
router.get('/milf', async(req, res) => {
  try{
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
      }catch(err){
   return console.log("There's something wrong "+ err)
  }
})
router.get('/cosplay', async(req, res) => {
  try{
	var waif = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
	const result = waif[Math.floor(Math.random() * (waif.length))]
	data = await getBuffer(result)
    await fs.writeFileSync(__path +'/tmp/waifu.png', data)
    await res.sendFile(__path +'/tmp/waifu.png')
    await sleep(3000)
    await fs.unlinkSync(__path + '/tmp/waifu.png')
      }catch(err){
   return console.log("There's something wrong "+ err)
  }
})
router.get('/neko', async (req, res, next) => {
            fetch(encodeURI(`https://waifu.pics/api/sfw/neko`))
           .then(response => response.json())
           .then(async data => {
                let result = data;
                let buffer = await fetch(data.url)
                res.type('png')
                res.send(await buffer.buffer())
            })
           .catch(e => {
           	res.json(loghandler.error)
            })
        })
router.get('/megumin', async (req, res, next) => {
            fetch(encodeURI(`https://waifu.pics/api/sfw/megumin`))
           .then(response => response.json())
           .then(async data => {
                let result = data;
                let buffer = await fetch(data.url)
                res.type('png')
                res.send(await buffer.buffer())
            })
           .catch(e => {
           	res.json(loghandler.error)
            })
        })

module.exports = router 

///////////////////////////////////////// Made By SaikiDesu ////////////////////////////////////////

