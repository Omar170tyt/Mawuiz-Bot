import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['jail', 'gay', 'glass', 'wasted' ,'triggered', 'lolice', 'simpcard', 'horny']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
๐ซ๐๐๐ ๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐
*${usedPrefix + command} efecto*

๐น๐๐๐๐๐๐๐ ๐ ๐๐๐ ๐๐๐๐๐๐
๐ฌ๐๐๐๐๐๐
*${usedPrefix + command} simpcard*

๐ฌ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐
${effects.map(effect => `_ยป ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `๐ต๐ ๐๐ ๐๐๐๐๐๐๐๐ฬ ๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐ ๐๐๐๐๐๐ `
if (!/image\/(jpe?g|png)/.test(mime)) throw `๐ฌ๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ *jpg o jpeg* ๐ ๐๐ ๐๐๐๐๐๐๐๐๐ ๐ ๐๐๐ ๐๐๐๐๐๐`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
await delay(5 * 5000)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) {
m.reply(`๐ฌ๐๐๐๐, ๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ฬ๐, ๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐ฬ๐ ๐๐๐ ๐๐๐๐๐๐`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickmaker (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickmaker|stickermaker|stickermarker|cs)$/i
handler.money = 40
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))