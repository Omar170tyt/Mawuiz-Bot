//Creditos https://github.com/BrunoSobrino
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ β οΈ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
if (!args[0]) throw `${mg}πππ ππ ππππΌπΎπ πΏπ ππππΏπππ\nπππππππ\n* ${usedPrefix + command} https://www.xvideos.com/video70389849/pequena_zorra_follada_duro*`
try {
await delay(6000)
await conn.reply(m.chat, 'β€ ππππππ πππ ππΌπππ πΌ πππ ππ πππππ ππ πππΏππ', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xvideos?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('*${fg}ππ ππππΎππππ, πππ ππ ππππΌπΎπ πΏπ ππππΏπππ, ππππππΌ πΌ πππππππΌπ*')
}}
handler.command = /^(xvideosdl)$/i
handler.level = 6
handler.limit = 4
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
