let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `šš©šš¦šŖšš©š š šš”ššŖššš£ š„šš§š ššš£ššš§\nšššš¢š„š”š¤:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
let ban = './media/baneado.mp3'
conn.sendFile(m.chat, ban, 'error.mp3', null, m, true, {type: 'audioMessage', ptt: true})}  
handler.command = /^banuser$/i
handler.rowner = true
export default handler