let handler = async (m, { usedPrefix, conn}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
let caption = `β­βγ *πͺππππππ π* γββ¬£
β ${name} π¬π ππ πππππππ πππππ...
β *${global.db.data.users[who].limit} π«πππππππ(s)* π
β *${global.db.data.users[who].money} π³ππππππππ(s)* π
β *${global.db.data.users[who].exp} π¬πΏπ·* β‘
β *${global.db.data.users[who].joincount} π»ππππ(s)* πͺ
β°ββββγ *π  ${vs}* γββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `π·ππππ πππππππ ππΜπ πππππππππ πππππΜππππ πππππ πππππ πππππππ\n\nπͺπππππ ππππππππ πππ π¬πΏπ·\n${usedPrefix}buy cantidad\n${usedPrefix}buyall cantidad\n\nπͺπππππ ππππππππ πππ πππππππππ\n${usedPrefix}buy2 cantidad\n${usedPrefix}buyall2 cantidad\n\nπͺπππππ ππππππππ πππ πππππ\n${usedPrefix}buy3 cantidad\n${usedPrefix}buyall3 cantidad`, [['πππ£πͺ ππ§ππ£πππ₯ππ‘ β‘', '.menu']], m)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal2', 'cartera', 'wallet', 'cartera2', 'balance2'] 
export default handler
