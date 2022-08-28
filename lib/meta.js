// Made by SaikiDesu (Mr.Aik3ro)
// YT: https://youtube.com/c/MrAik3ro
// FB: https://www.facebook.com/saikidesu.11
// Github: https://github.com/mraikero-01
// Random Image API, I hope this can help you!❤️

const axios = require('axios');
const FileType = require('file-type');
const fetch = require('node-fetch');

const getBuffer = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: "get",
            url,
            headers: {
                'DNT': 1,
                'Upgrade-Insecure-Request': 1
            },
            ...options,
            responseType: 'arraybuffer'
        })
        return res.data
    } catch (e) {
        console.log(`Error : ${e}`)
    }
}
const getFile = async(path) => {
    let res
      let data = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (res = await fetch(path)).buffer() : fs.existsSync(path) ? fs.readFileSync(path) : typeof path === 'string' ? path : Buffer.alloc(0)
      if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      let type = await FileType.fromBuffer(data) || {
        mime: 'application/octet-stream',
        ext: '.bin'
      }

      return {
        res,
        ...type,
        data
      }
}

module.exports = { getBuffer, getFile }

///////////////////////////////////////// Made By SaikiDesu ////////////////////////////////////////

