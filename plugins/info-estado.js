/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MΓNIMAMENTE LOS CRΓDITOS DE LOLIBOT-MD, 
SI VAS A AΓADIR TUS DATOS O CRΓDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE LOLIBOT-MD, GRACIAS 
**/
let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado = `*π Hola  ${name} β¨*`
conn.sendButton(m.chat, estado, `βββββ· *γπ€ Estado del Bot π€ε½‘*
β *=> Bot activo β*
ββββββββββββββββββ
β *=> Bot uso pΓΊblico βοΈ*
ββββββββββββββββββ
β=> πΌππ©ππ«π€ ππͺπ§ππ£π©π
β=> ${uptime} β
β°ββββββββββββββββββ`, [
['π·οΈ MENΓ π·', '.menu'], ['β¨οΈ MENΓ AUDIOS β¨οΈ', '.audios']], m)

/*conn.sendHydrated(m.chat, estado, wm, picture, 'https://github.com/GataNina-Li/GataBot-MD', 'πππ©ππ½π€π©-ππΏ', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ', '#menu']
], m)}*/
}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(estado|status|estate|state|stado|stats|botstat(us)?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
