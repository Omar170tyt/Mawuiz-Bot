let handler = async (m, { conn, text}) => {
if (!text) throw 'šš©šš¦šŖšš©ššØ šš”ššŖš£ šŖšØšŖšš§šš¤šØ š„šš§š šššØššš£šš\nšššš¢š„š”š¤: *@tag*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw 'šš©šš¦šŖšš©ššØ šš”ššŖš£ šŖšØšŖšš§šš¤šØ š„šš§š šššØššš£šš \nšššš¢š„š”š¤: *@tag*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*šš” šŖšØšŖšš§šš¤ ššŖš šššØššš£šššš¤ š¤©\nš„š¤šš§š šŖšØšš§ š šš” šš¤š©`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^unbanuser$/i
handler.rowner = true
export default handler
