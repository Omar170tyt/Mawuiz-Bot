let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let name = await conn.getName(m.sender)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
let totalreg = Object.keys(global.db.data.users).length
  let vn = './media/creador.mp3'

//------- Nombre
  let nowner = `${wm.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `
β’ @${wm.split`@`[0]} β’
------- ${wm} -------
`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => imagen1[1]) 
let teksbio = `
*πΎπ€π£π©πππ©π€* 
*Wa.me/56964787183 (no bot)*
*Wa.me/59895551199 (bot)*
*Wa.me/18134037792 (Bot Β²)*
*wa.me/56977774738 (bot Β³)*
*Wa.me/18134031118 (sub bot ofc)*
`
  let teks = ' '
const sections = [
   {
	title: `ππππππππΌπππ/πππππ`,
	rows: [
	    {title: "π° β’ NUMERO", rowId: ".owner bio"},
	{title: "π β’ CUENTAS OFICIALES", rowId: ".cuentasgb"},
	{title: "π β’ GRUPOS", rowId: ".grupos"},
	]
    },{
	title: `βββββββΒ·β’ πΌππππΌ πΌπ π½ππ βββββββΒ·β’`,
	rows: [
	{title: "π€ β’ INSTALARBOT", rowId: ".instalarbot"},
	{title: "π β’ SC", rowId: "Sc"},
	]
  },
]

const listMessage = {
text: `~ *PROPIETARIO/OWNER DEL BOT*`,
footer: `β­βγ *OWNER* γββ±
β *Holaπ ${name}*
βββββββΒ«β’Β»ββββββ
ββ’ πππ§π¨ππ€π£ πππ‘ ππ€π©: ${vs}  
ββββββββββββ
ββ’ ππ€π©ππ‘ πππ‘ ππ¨πͺππ§ππ€π¨: *${totalreg}* 
ββββββββββββ
ββ’ ππ€ππ€: ${global.db.data.settings[conn.user.jid].self ? '*Privado*' : '*PΓΊblico*'}
ββββββββββββ
ββ’ ππ§πππππ€: *${usedPrefix}* 
ββββββββββββ
ββ’ ππ§ππ’ππͺπ’: ${user.premiumTime > 0 ? 'Siu β' : 'No β'}
ββββββββββββ
ββ’ πΎπππ©(π¨) ππ§π€ππππππ€(π¨): ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
ββββββββββββ
ββ’ ππ¨πͺππ§ππ€(π¨) ππ§π€ππππππ€(π¨): ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
β°ββββ° π  ${vs} β±ββββα
${wm}`,
title: null,
buttonText: `HAGA CLICK AQUI`,
sections }

  try {
    if (/(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, "The-LoliBot-MD", m, { contextInfo: { mentionedJid: [nowner] }})
           break
            case 'bio':
          conn.sendHydrated(m.chat, teksbio, wm, ppown, "https://github.com/elrebelde21/The-LoliBot-MD", "πππ©ππͺπ",null, [null, null], m)
            break
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`β?β° Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
conn.sendFile(m.chat, vn, 'creador.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(contacto|owner|creator|propietario|dueΓ±o|dueΓ±a|propietaria|dueΓ±o|creadora|creador)$/i

export default handler
