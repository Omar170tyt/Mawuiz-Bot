global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^š¾šŖšš” ššØ š§ššØšŖš”š©ššš¤ šš/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return 
await delay(5000)  
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoMG']()}šš šš šššššššššĢ  šššš šššššššš`, wm, null, [['šš¤š”š«šš§ š ššŖššš§ š§®', `/math`], ['šš¤š”š«šš§ šš” ššš£šŖ āļø', '/menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
conn.sendButton(m.chat, `š šššØš„šŖššØš©š šš¤š§š§ššš©š\nššŖš š„š§š¤ š\nāāāāāāāāāāāāāāāāā\nššš£ššØš©š\nš *_${math.bonus}_* šš\nāāāāāāāāāāāāāāāāā\nš½š¤š£š¤\nš *_$500_* šš¤š”ššš¤šš£šØ\nāāāāāāāāāāāāāāāāā\nššŖ šæšš£šš§š¤\nšµ *_$${gatacoins}_* šš¤š”ššš¤šš£šØ`, wm, null, [['šš¤š”š«šš§ š ššŖššš§ š§®', `/math ${math.mode}`], ['ššš£šŖ ššŖššš¤šØ š”', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
conn.sendButton(m.chat, `${lenguajeGB['smsAvisoAG']()}šŗš šššššššš ššš ššššššššššššš\nš³š ššššššššš šš *${math.result}*`, wm, null, [['šš¤š”š«šš§ š ššŖššš§ š§®', `/math ${math.mode}`], ['šš¤š„šØ š', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `${lenguajeGB['smsAvisoFG']()}āļø š¹šššššššš šššššššššš!!\nš»š šššššš *${global.math[id][2]}* š¶šššššššššššš š±`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
const delay = time => new Promise(res => setTimeout(res, time))