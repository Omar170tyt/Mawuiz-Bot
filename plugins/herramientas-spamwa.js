let handler = async (m, { conn, text, usedPrefix, command }) => {

let time = global.db.data.users[m.sender].lastrob + 7200000
if (new Date - global.db.data.users[m.sender].lastrob < 7200000) throw `*ā±ļø ESPERA ${msToTime(time - new Date())}\n NO USER ESTE COMANDO CON UN MAL USO\n (wey por que no van vos hacerle spam a esta persona???? y no me use a mi para tu pinche pendejada)*`
let [nomor, pesan, jumlah] = text.split('|')
if (!nomor) throw `${mg}š°šššššš šš ššĢšššš šššš šš šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
if (!pesan) throw `${mg}š°šššššš šš ššĢšššš šššš šš šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
if (jumlah && isNaN(jumlah)) throw `š³š šššššššš šššš šš šš šš ššĢšššš šš ššš šš šš ššššĢ šššš\n*ā ${usedPrefix + command} numero|texto|cantidad*\nš¬šššššš\n*ā ${usedPrefix + command} 999999999999|Holaaa|35*`
await delay(10000)
let fixedNumber = nomor.replace(/[-+<>@]/g, '').replace(/ +/g, '').replace(/^[0]/g, '62') + '@s.whatsapp.net'
await delay(10000)
let fixedJumlah = jumlah ? jumlah * 1 : 10
if (fixedJumlah > 5) throw `${fg}š“šĢšššš *5* ššššššš šššš ššššš šššš`
await delay(10000)
await m.reply(`${eg}š¬š šššš šš šššššĢ *${fixedJumlah}* š½šššš š *${nomor}*`)
await delay(10000)
for (let i = fixedJumlah; i > 1; i--) {
await delay(10000)
if (i !== 0) conn.reply(fixedNumber, pesan.trim(), m)
}
global.db.data.users[m.sender].lastrob = new Date * 1
}
handler.help = ['spamwa <number>|<mesage>|<no of messages>']
handler.tags = ['General']
handler.command = /^spam(wa)?$/i
handler.group = false
handler.premium = false
handler.private = true
handler.level = 45
handler.limit = 280
handler.register = true
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}
