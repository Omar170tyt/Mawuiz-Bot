import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, text }) => {
if (!text) throw `${mg}ðððūððð―ðž ðð ðððð―ðð ðŋð ðð ððžðððž`
let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
if (!res.ok) throw await res.text()
let json = await res.json()
let { title, chapters, volumes, members, score, synopsis, url, image_url, type, start_date, end_date, mal_id } = json.results[0]
let res2 = await fetch(`https://myanimelist.net/manga/${mal_id}`)
if (!res2.ok) throw await res2.text()
let html = await res2.text()
let animeingfo = 
`ðððððð
âĢ ${title}
âââââââââââââââââ
ðūðžððððððð
âĢ ${chapters}
âââââââââââââââââ
ððððððððð
âĢ ${volumes}
âââââââââââââââââ
ðððūððž ðŋð ððððūðð
âĢ ${start_date}
âââââââââââââââââ
ðððūððž ððððžð
âĢ ${end_date}
âââââââââââââââââ
ðððððžðð
âĢ ${score}
âââââââââââââââââ
ððððð―ððð
âĢ ${members}
âââââââââââââââââ
ðððððððð ððððððð
âĢ ${synopsis}
âââââââââââââââââ
ððððžðūð
âĢ ${url}`
await conn.sendFile(m.chat, image_url, '', animeingfo, m) 
let info = `ð *ððĢððĪð§ðĒðð§ðĐð ðĻðĪðð§ð ðĄððĻ ðĢðĪðŦððððððĻ ðŪ ð§ðððŠðð§ðð ðĐððĢðð§ ðĄð ðŠĖðĄðĐððĒð ðŦðð§ðĻððĪĖðĢ.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ððĢðĻðĐððð§ððĒ', null, null, [
['ðððĢðŠ ð―ðŠðĻðĶðŠððððĻ ð', '#buscarmenu'],
['ðððĢðŠ ðūðĪðĒðĨðĄððĐðĪ âĻ', '.allmenu'],
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ âïļ', '/menu']
], m,)  
  
}
handler.help = ['animeinfo <anime>']
handler.tags = ['internet']
handler.command = /^(mangainfo)$/i
handler.exp = 50
handler.level = 4 
handler.money = 20
export default handler
