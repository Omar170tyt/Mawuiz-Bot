
import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {

if (!text) throw `ššØšš§ššš šŖš£ š©šš­š©š¤ š„šš§š šššš”šš§ šš¤š£š¢ššš¤\n\nšššš¢š„š”š¤: ${usedPrefix + command} Hola bot*`
  await conn.sendPresenceUpdate('composing', m.chat)
let res = await fetch(`https://api.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`) 
}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi'] 
export default handler
