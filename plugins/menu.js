const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    react: "📜",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `👋 *HELLOW ${pushname}*

╭──═❮𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨❯═─┈•
|
| ➤ alive
| ➤ menu
| ➤ system
| ➤ ping
| ➤ restart
| ➤ update
| ➤ ai
|
╰────────────────❃
╭──═❮𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨❯═─┈•
| 
| ➤ song
| ➤ video
| ➤ fb
| ➤ mediafire
| ➤ tiktok
| ➤ gdrive
| ➤ twitter
|
╰────────────────❃
╭──═❮𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨❯═─┈•
| 
| ➤ hirunews
| ➤ derananews
| ➤ sirasanews
| ➤ lnews
| ➤ bbc
| 
╰────────────────❃
╭──═❮𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨❯═─┈•
|
| ➤ shutdown
| ➤ broadcast
| ➤ setpp
| ➤ block
| ➤ unblock
| ➤ clearchats
| ➤ jid
| ➤ gjid
| ➤ restart
| ➤ update
|
╰────────────────❃
╭──═❮𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨❯═─┈•
|
| ➤ mute
| ➤ unmute
| ➤ promote
| ➤ demote
| ➤ del
| ➤ remove
| ➤ add
| ➤ setgoodbye
| ➤ setwelcome
| ➤ getpic
|
╰────────────────❃
Powerd By FILMPUBLISHER-LK
`  
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})


//============================== DOWNLOAD MENU===============================   

cmd({
    pattern: "dmenu",
    react: "⬇️",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `╭──═❮*DOWNLOAD MENU*❯═─┈•
| 
| ➤ song
| ➤ video
| ➤ fb
| ➤ mediafire
| ➤ tiktok
| ➤ gdrive
| ➤ twitter
|
╰────────────────❃
Powered By FILMPUBLISHER-LK
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})    



//================================NEWS==============================

cmd({
    pattern: "news",
    react: "📰",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '', 
owner: '',
convert: '',
search: '',    
};   
for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `╭──═❮*NEWS*❯═─┈•
| 
| ➤ hirunews
| ➤ derananews
| ➤ sirasanews
| ➤ lnews
| ➤ bbc
| 
╰────────────────❃
Powered By FILMPUBLISHER-LK`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
    
}catch(e){
console.log(e)
reply(`${e}`)    
}    
})    
