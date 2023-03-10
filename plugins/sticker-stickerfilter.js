import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
import MessageType from '@adiwajshing/baileys'
const effects = ['greyscale', 'invert', 'brightness', 'threshold', 'sepia', 'red', 'green', 'blue', 'blurple', 'pixelate', 'blur']

let handler = async (m, { conn, usedPrefix, command, text }) => {
let effect = text.trim().toLowerCase()
if (!effects.includes(effect)) throw `
๐ซ๐๐๐ ๐๐ ๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐
*${usedPrefix + command} efecto*

๐น๐๐๐๐๐๐๐ ๐ ๐๐๐ ๐๐๐๐๐๐
๐ฌ๐๐๐๐๐๐
*${usedPrefix + command} blue*

๐ฌ๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐
${effects.map(effect => `_ยป ${effect}_`).join('\n')}
`.trim()
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `๐ต๐ ๐๐ ๐๐๐๐๐๐๐๐ฬ ๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐๐ ๐๐๐๐๐๐`
if (!/image\/(jpe?g|png)/.test(mime)) throw `๐ฌ๐ ๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ *jpg o jpeg*`
let img = await q.download()
let url = await uploadImage(img)
let apiUrl = global.API('https://some-random-api.ml/canvas/', encodeURIComponent(effect), {
avatar: url
})
try {
let stiker = await sticker(null, apiUrl, global.packname, global.author)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nnnttt, thumbnail: imagen1}}}, { quoted: m })
} catch (e) {
m.reply(`๐ฌ๐๐๐๐, ๐๐ ๐๐ ๐๐๐๐ ๐๐๐๐๐ ๐๐ ๐๐๐๐๐๐๐๐๐ฬ๐, ๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐ฬ๐ ๐๐๐ ๐๐๐๐๐๐`)
await conn.sendFile(m.chat, apiUrl, 'image.png', null, m)
}}
handler.help = ['stickfilter (caption|reply media)']
handler.tags = ['General']
handler.command = /^(stickerfilter|stikerfilter|cs2|stickerefecto|efectosticker|filtrosticker|stickerfiltro)$/i
handler.money = 40
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))