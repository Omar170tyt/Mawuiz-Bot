import fetch from 'node-fetch'
let handler = async (m, {command, conn, text}) => {
if (!text) throw `๐ค๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐๐ช๐จ๐๐๐๐ค?๐ค ๐๐ฃ๐๐ง๐๐จ๐ ๐๐ก ๐ฃ๐ค๐ข๐๐ง๐/๐ฉ๐๐ฉ๐ช๐ก๐ค ๐๐ ๐๐๐ฃ๐๐๐ค๐ฃ\n\n*โโ ๐๐๐๐ข๐ฅ๐ก๐ค:\n#play lgante - bar*`
try {
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, durationH, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
if (command == 'play') {
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `๐ ๐๐๐ฉ๐ช๐ก๐ค: ${title}\n๐ ๐๐ช๐๐ก๐๐๐๐๐๐ค๐ฃ: ${published}\n๐ ๐๐๐จ๐ฉ๐๐จ: ${views}`
const buttons = [{buttonId: `#menu`, buttonText: {displayText: '๐ถ ๐๐๐ฃ๐ช ๐ถ'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'แดษดแด ษชแดษดแดแด แดแดแดษชแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mp4', fileName: `${title}.mp3`}, {quoted: m})
}

if (command == 'play2') {
let jsonn = await ytLink.json()
let vid = await jsonn.result.video
let capt = `๐ ๐๐๐ฉ๐ช๐ก๐ค: ${title}\n๐ ๐๐ช๐๐ก๐๐๐๐๐๐ค๐ฃ: ${published}\n๐ ๐๐๐จ๐ฉ๐๐จ: ${views}`
const buttons = [{buttonId: `#playlistass2 ${title}`, buttonText: {displayText: '๐  ๐๐๐จ ๐ง๐๐จ๐ช๐ก๐ฉ๐๐๐ค๐จ'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: 'แดษดแด ษชแดษดแดแด แด ษชแดแดแด, แดษขแดแดสแดแด แดษด แดแดแดแดษดแดแด...', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { video: { url: vid }, fileName: '${title}.mp4', mimetype: 'video/mp4', caption: `๐ฐ ๐ผ๐ฆ๐ช๐ ๐๐จ๐ฉ๐ ๐ฉ๐ช ๐ซ๐๐๐๐ค \n๐ฅ ๐๐๐ฉ๐ช๐ก๐ค: ${title}`}, {quoted: m})
}
} catch (e) {
}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = ['play', 'play2']
export default handler
