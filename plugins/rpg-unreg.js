import { createHash } from 'crypto'
let handler = async function (m, { args }) {
if (!args[0]) throw `ππ£ππ§ππ¨π ππ‘ π£πͺπ£ππ§π€ πππ‘ π¨ππ§ππ, π¨π π£π€ π¨πππ ππͺππ‘ ππ¨  πͺπ¨π ππ‘ ππ€π’ππ£ππ€ *#myns*`
let user = global.db.data.users[m.sender]
let sn = createHash('md5').update(m.sender).digest('hex')
if (args[0] !== sn) throw `${fg} π½ππππππππ πππ πππ ππ ππππππππ, πππ ππ πππππππ*#myns* π·πππ πππππππ ππ ππΜππππ ππ πππππ`
global.db.data.users[m.sender].money -= 400
global.db.data.users[m.sender].limit -= 4
global.db.data.users[m.sender].exp -= 150
global.db.data.users[m.sender].joincount -= 2
user.registered = false
m.reply(`${eg} πΌππππ ππ ππ ππππΜ ππππππππππ(πΌ)`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['xp']
handler.command = /^unreg(ister)?$/i
handler.register = true
export default handler
