const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "system",
    react: "💻",
    alias: ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
╭──═❮ *FILMPUBLISHER-LK*  ❯═─┈•

|⏰ 𝗨𝗽𝘁𝗶𝗺𝗲:  ${runtime(process.uptime())}
|💾 𝗥𝗮𝗺 𝘂𝘀𝗮𝗴𝗲: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
|⚙️ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺: ${os.hostname()}
|🥷 𝗢𝘄𝗻𝗲𝗿: FILMPUBLISHER-LK

╰────────────────❃
`
    return reply(`${status}`)    
}catch(e){    
console.log(e)
reply(`${e}`)   

}    
})
