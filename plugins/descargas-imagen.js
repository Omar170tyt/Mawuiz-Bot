import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let user = global.db.data.users[m.sender]

if (!text) throw `š¤šš² šÆššš°š®šæ? š¤ļø\n šØšš²šæ šš š”š šØšššŖššš£š©š š¢šš£šš§š\nšš·š²šŗš½š¹š¼\n*${usedPrefix + command} Loli*`
const res = await googleImage(text)
let image = res.getRandom()
let link = image
await delay(5000)
conn.sendHydrated(m.chat, `āØ šššØšŖš”š©ššš¤: ${text}`, `${wm}`, link, link, 'āļø ššš', null, null, [
['š ššššŖššš£š©š', `/imagen ${text}`],
], m)
}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|imagen)$/i
handler.exp = 20
handler.money = 40
export default handler
const delay = time => new Promise(res => setTimeout(res, time))