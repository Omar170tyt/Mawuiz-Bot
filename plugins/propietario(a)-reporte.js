let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${mg}*ððĻðð§ððð ððĄ ð§ððĨðĪð§ðĐð*\n\n*ððððĒðĨðĄðĪ:*\n*${usedPrefix + command} el comando ${usedPrefix}los stickers no funka.*`
if (text.length < 8) throw `${fg} âĻ *ðīðĖðððð 10 ðððððððððð ðððð ððððð ðð ððððððð..*`
if (text.length > 1000) throw `${fg} ðž *ðīðĖðððð 1000 ðŠððððððððð ðððð ððððð ðð ððððððð.*`
await delay(5 * 5000)
let teks = `*â­ââ[ ðđðððððð ]ââââŽĢ*\n*â*\n*â* *ðĩðĖðððð*\nâ âĶ Wa.me/${m.sender.split`@`[0]}\n*â*\n*â* *ðīðððððð*\n*â* âĶ ${text}\n*â*\n*â°âââââââââââââââââââŽĢ*`
//conn.reply('593968585383@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('56964787183@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
await delay(5 * 5000)
  m.reply(`â°âąðâą *ðŽĖððððð* âąðâąâŪ\n\n*ðŽð ððððððð ðð ðððð ððððððð ð ðð ððððððð , ððððððĖ ððð ððððððððð ðððððð. ðŦð ððð ððððð ððððĖ ðððððððð ðð ððððððð.*`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))