// Gracias a https://github.com/BrunoSobrino

import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
let img = await q.download()
let url = await uploadImage(img)
let scircle = global.API('dzx', '/api/canvas/circle', { url }) 
let stiker = await sticker(null, scircle, global.packname, global.author)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
} catch (e) {
m.reply(`${fg}ð¹ððððððð ðððð ðð ðððððððð *${usedPrefix + command}* ð¹ððððððððððð ð ððð ðððððð ðððð ððððð ðððððððð ðððððððð`)
}}
handler.command = /^scircle|circle|cÃ­rculo|circulo|scÃ­rculo|scirculo|sircle|redondo|circular$/i
handler.money = 40
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
/* `https://api.dhamzxploit.my.id/api/canvas/circle?url=${url}` */
