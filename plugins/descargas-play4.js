import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `ð¤ð¦ðªð ðð¨ð©ð ððªð¨ðððð¤?ð¤ ðð£ðð§ðð¨ð ðð¡ ð£ð¤ð¢ðð§ð/ð©ðð©ðªð¡ð¤ ðð ððð£ððð¤ð£\n\n*ââ ðððð¢ð¥ð¡ð¤:\n#play lgante - bar*`
  await m.reply(wait)
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Error'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId

  let captvid = `âââââ· ðððð¨
âð ð§ð¶ððð¹ð¼: ${title}
ââ²ï¸ ð¿ðªð§ðððð¤ð£: ${durationH}
âð ð©ð¶ððð®ð: ${viewH}
âð ð£ðð¯ð¹ð¶ð°ð®ð°ð¶ð¼ð»: ${publishedTime}
â
â Â Â Â Â Â Â Â  *âââââââââââââ%100*
â°âââââââââââââââââ`
  conn.sendButton(m.chat, `âââââ· ðððð¨
âð ð§ð¶ððð¹ð¼: ${title}
ââ²ï¸ ð¿ðªð§ðððð¤ð£: ${durationH}
âð ð©ð¶ððð®ð: : ${viewH}
âð ð£ðð¯ð¹ð¶ð°ð®ð°ð¶ð¼ð»: ${publishedTime}
â
â Â Â Â Â Â Â Â  *âââââââââââââ%100*
â°âââââââââââââââââ`, author.trim(), await( await conn.getFile(thumbnail)).data, ['ð½VIDEO', `${usedPrefix}getvid ${url} 360`], false, { quoted: m, 'document': { 'url':'https://wa.me/923470027813' },
'mimetype': global.dpdf,
'fileName': `ðð ð¦ðð¦ðð âðððªð¤`,
'fileLength': 666666666666666,
'pageCount': 666,contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: `${url}`,
title: `The-Loliabot-MD`,
body: wm,
sourceUrl: 'https://chat.whatsapp.com/GGZtt70qqdf1x2mYAKWfuQ', thumbnail: await ( await conn.getFile(thumbnail)).data
  }
 } 
})
  
  //let buttons = [{ buttonText: { displayText: 'ð½VIDEO' }, buttonId: `${usedPrefix}ytv ${url} 360` }]
 //let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid, footer: author, buttons }, { quoted: m })

  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: wm,
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }

  return conn.sendMessage(m.chat, doc, { quoted: m })
	// return conn.sendMessage(m.chat, { document: { url: link }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m})
	// return await conn.sendFile(m.chat, link, title + '.mp3', '', m, false, { asDocument: true })
}
handler.help = ['play4'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play4$/i

handler.exp = 0
handler.money = 80
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

