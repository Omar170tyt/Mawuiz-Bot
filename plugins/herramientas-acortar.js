
import fetch from 'node-fetch'
let handler = async(m, { conn, args, text }) => {
if (!text) throw '* ð ðð¡ ðð£ð¡ððð?*\n*ðð£ðð§ðð¨ð ðð£ð¡ððð ð¥ðð§ð ððð¤ð§ð©ð*'
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text()  
if (!shortUrl1) throw `*[â] á´ÊÊá´Ê, á´á´á´á´Êá´á´Êá´  Ç«á´á´ á´Ê  á´á´xá´á´ ÉªÉ´É¢Êá´sá´á´á´ sá´á´ á´É´ á´á´xá´á´ á´ ÉªÉ´á´á´É´á´á´ á´á´ É´á´á´á´ á´*`
let done = `*â sá´ Êá´á´ÊÉªá´¢á´ á´á´É´ á´xÉªá´á´!!*\n\n*á´É´Êá´á´á´ á´á´ á´É´á´á´s:*\n${text}\n*ÊÉªÉ´á´ á´á´á´Êá´á´á´á´:*\n${shortUrl1}`.trim()   
m.reply(done)}
handler.help = ['tinyurl','acortar'].map(v => v + ' <link>')
handler.tags = ['tools']
handler.command = /^(tinyurl|short|acortar|corto)$/i
handler.limit = 1
handler.register = true
handler.fail = null
export default handler





