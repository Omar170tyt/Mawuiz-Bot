/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(`${eg}ππππ πΎππΌπ πππ πΏπππ½πΌπππΌπΏπ π₯³\nπΌππππΌ ππ πππππ πΏπππππππ½ππ.\n\nππππ πΎππΌπ ππΌπ πππ½πΌπ π\nπππ π πΌπ πΌππΌπππΌπ½ππ.`)
}
handler.help = ['unbanchat2']
handler.tags = ['owner']
handler.command = /^unbanchat$/i
handler.rowner = true
handler.exp = 50

export default handler*/

//PARA GRUPOS

let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply(`ππ¨π©π ππππ© ππͺπ πππ£ππππ€ π€\n π£π€ ππ¨π©ππ§π πππ¨π₯π€π£πππ‘π πππ¨π©π π¦πͺπ π¨ππ πππ¨πππ£ππππ.`)
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.botAdmin = true
handler.admin = true 
export default handler