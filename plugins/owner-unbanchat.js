/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true

m.reply(`${eg}๐๐๐๐ ๐พ๐๐ผ๐ ๐๐๐ ๐ฝ๐ผ๐๐๐ผ๐ฟ๐ ๐ค\n๐๐ ๐๐๐๐ผ๐๐ ๐ฟ๐๐๐๐๐๐๐ฝ๐๐ ๐๐ผ๐๐๐ผ ๐๐๐ ๐๐๐ผ ๐ฟ๐๐๐ฝ๐ผ๐๐๐ผ๐ฟ๐ผ.\n\n๐๐๐๐ ๐พ๐๐ผ๐ ๐๐ผ๐ ๐ฝ๐ผ๐๐๐๐ฟ ๐ป\n๐ ๐๐๐๐ ๐๐๐ ๐ฝ๐ ๐ผ๐๐ผ๐๐๐ผ๐ฝ๐๐ ๐๐๐๐๐ ๐๐ ๐๐ ๐๐๐ฝ๐ผ๐๐๐๐ฟ`)
}
handler.help = ['banchat1']
handler.tags = ['owner']
handler.command = /^ban1|banear1|banchat1$/i
handler.exp = 500
handler.rowner = true

export default handler*/

//PARA GRUPOS

let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no estรก registrado en la base de datos!*')
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no estรก baneado!!*')
  chat.isBanned = false
  m.reply(`๐๐จ๐ฉ๐ ๐๐๐๐ฉ ๐๐ช๐ ๐๐๐จ๐๐๐ฃ๐๐๐๐ค ๐ฅณ\n๐๐๐ค๐ง๐ ๐๐จ๐ฉ๐ค๐ฎ ๐๐๐จ๐ฅ๐ค๐ฃ๐๐๐ก๐...`)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = true

export default handler
 
 