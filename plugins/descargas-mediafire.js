import fs from 'fs'
import { mediafiredl } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
let user = db.data.users[m.sender]
let time = global.db.data.users[m.sender].prue + 60000
if (new Date - global.db.data.users[m.sender].prue < 60000) throw `*ESPERA UNOS MINUTOS PARA USAR OTRO COMANDO*`

if (!args[0]) throw `${mg}๐๐ฃ๐๐ง๐๐จ๐ ๐ช๐ฃ ๐๐ฃ๐ก๐๐๐ ๐ซ๐๐ก๐๐๐ค ๐๐๐ก ๐ข๐๐๐๐๐๐๐ง๐\n๐๐๐๐ข๐ฅ๐ก๐ค\n ${usedPrefix + command} https://www.mediafire.com/file/cv64tns6co3272q/Lolibot.zip/file`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
let caption = `
โญโ ${eg}
โ ๐  ${wm}*    
โโโโโโโยซโขยปโโโโโโ
โ ๐ซ ๐๐ค๐ข๐๐ง๐   
โ ${filename}
โโโโโโโยซโขยปโโโโโโ
โ ๐ช ๐๐๐จ๐ค
โ ${filesizeH}
โโโโโโโยซโขยปโโโโโโ
โ ๐ ๐๐๐ฅ๐ค
โ ${ext}
โฐโโโโฐ ๐  ${vs} โฑโโโโแ`.trim()
//let author = global.author
await conn.sendButton(m.chat, caption, `๐ด๐๐๐๐ ๐ 150 ๐ด๐ฎ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐`, [['๐๐๐ฃ๐ช ๐๐ง๐๐ฃ๐๐๐ฅ๐๐ก โก', '.menu']], m)
 
/*let info = `๐ด๐๐๐๐ ๐ 150 ๐ด๐ฎ ๐๐ ๐๐๐๐๐๐๐ ๐๐๐ ๐๐ ๐๐ ๐๐๐๐๐ฬ`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, ig, '๐๐๐ ๐ฉ๐ค๐ ', null, null, [
['๐๐๐ฃ๐ช ๐ฟ๐๐จ๐๐๐ง๐๐๐จ ๐', '#descargasmenu'],
['๐๐๐ฃ๐ช ๐พ๐ค๐ข๐ฅ๐ก๐๐ฉ๐ค โจ', '.allmenu'],
['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ โ๏ธ', '/menu']
], m,)  
let vn = './media/descarga.mp3'
*/  
conn.sendFile(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
} catch (e) {
let sticker = './src/stickers1.webp'
conn.sendFile(m.chat, sticker, 'error.webp', '', m)}
/* conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
*/
global.db.data.users[m.sender].prue = new Date * 1
}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
handler.register = true
handler.limit = 3
handler.exp = 100
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}
