import fetch from 'node-fetch'
let handler = async (m, { isPrems, conn }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" 
}
let grupos = [nna, nn, nnn]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'π» super The-LoliBot-MD - WhatsApp ', thumbnailUrl: await(await fetch(global.img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]    

let user = global.db.data.users[m.sender]
let premium = user.premium

let botol = `${pickRandom([1, 1, 2, 3, 3, 0, 0])}` * 1
let botolpremium = `${pickRandom([3, 3, 7, 7, 5, 5])}` * 1
	
let batu = `${pickRandom([2, 2, 1, 1, 1, 1, 3])}` * 1
let batupremium = `${pickRandom([4, 4, 3, 7, 7, 5])}` * 1

let potion = `${pickRandom([1, 2, 3, 4, 5])}` * 1
let potionpremium = `${pickRandom([2, 4, 6, 9, 12])}` * 1

let common = `${pickRandom([1, 0, 0, 2, 0, 1, 1, 1])}` * 1
let commonpremium = `${pickRandom([2, 2, 1, 3, 4])}` * 1
 
const recompensas = {
  botol: premium ? botolpremium : botol,
  batu: premium ? batupremium : batu,
  common: premium ? commonpremium : common,
}

let time = user.lasthourly + 3600000 //1 Hora //3600000
if (new Date - user.lasthourly < 3600000) return await conn.sendButton(m.chat, `ππΌ πππΎππ½ππππ ππ ππππππΌ πΏπ πΎπΌπΏπΌ ππππΌ β»οΈ\nππππππ ππ *${msToTime(time - new Date())}* ππΌππΌ πππΎππ½ππ ππππΌ πππππππΌ`, wm, null, [['π  π π‘ π¨ βοΈ', '/menu']], fkontak, m)
let texto = ''
for (let reward of Object.keys(recompensas)) {
    if (!(reward in user)) continue
    user[reward] += recompensas[reward]
texto += `*+${recompensas[reward]}* ${global.rpgshop.emoticon(reward)}\n`}
let text = `
β­ββπβπβπβββ¬£
β β»οΈ πππππππΌ πΎπΌπΏπΌ ππππΌ!!
β *${premium ? 'ποΈ Recompensa Premium' : 'π Recompensa Gratis'}*
β°ββπβπβπβββ¬£`

await conn.sendButton(m.chat, text, texto + `\n\nποΈ π£ π₯ π π  π π¨ π  β’ ${premium ? 'β' : 'β'}\n${wm}`, img5, [['π ππππΌππ π', '/claim'], ['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜβοΈ', '/menu']], m, dos.getRandom())  
user.lasthourly = new Date * 1
}
handler.help = ['hourly']
handler.tags = ['xp']
handler.command = ['hourly', 'entega', 'cadahora', 'recibirentrega'] 
handler.level = 4 
handler.register = true
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " Horas " + minutes + " Minutos"
}
