let handler = async (m, { conn, usedPrefix}) => {
  
  const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
  
	let banteng = global.db.data.users[m.sender].banteng
	let harimau = global.db.data.users[m.sender].harimau
	let gajah = global.db.data.users[m.sender].gajah
	let kambing = global.db.data.users[m.sender].kambing
	let panda = global.db.data.users[m.sender].panda
	let buaya = global.db.data.users[m.sender].buaya
	let kerbau = global.db.data.users[m.sender].kerbau
	let sapi = global.db.data.users[m.sender].sapi
	let monyet = global.db.data.users[m.sender].monyet
	let babihutan = global.db.data.users[m.sender].babihutan
	let babi = global.db.data.users[m.sender].babi
	let ayam = global.db.data.users[m.sender].ayam

	let ndy = `
*${htki} πΌππππΌπππ ${htka}*
    
 *${rpg.emoticon('bull')} β‘οΈ ${banteng}*
 *${rpg.emoticon('tiger')} β‘οΈ ${harimau}*
 *${rpg.emoticon('elephant')} β‘οΈ ${gajah}*
 *${rpg.emoticon('kambing')} β‘οΈ ${kambing}*
 *${rpg.emoticon('panda')} β‘οΈ ${panda}*
 *${rpg.emoticon('buaya')} β‘οΈ ${buaya}*
 *${rpg.emoticon('kerbau')} β‘οΈ ${kerbau}*
 *${rpg.emoticon('cow')} β‘οΈ ${sapi}*
 *${rpg.emoticon('monyet')} β‘οΈ ${monyet}*
 *${rpg.emoticon('Jabali')} β‘οΈ ${babihutan}*
 *${rpg.emoticon('babi')} β‘οΈ ${babi}*
 *${rpg.emoticon('ayam')} β‘οΈ ${ayam}*`.trim()
await conn.sendButton(m.chat, ndy, `π πΌπ£ππ’ππ‘ππ¨ π‘ππ¨π©π€π¨ π₯ππ§π πΎπ€πππ£ππ§\n${wm}`, null, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu'], [`π ππ£π«ππ£π©ππ§ππ€`, `.inventario`]], fkontak, m)

}
handler.help = ['kandang']
handler.tags = ['rpg']
handler.level = 6
handler.limit = 1
handler.register = true
handler.command = /^(kandang|animales|animals)$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
