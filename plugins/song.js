const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "s2",
    react: "🎧",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me a link huththo")
const search = await yts(q)
const data = search.videos[0]; 
const url = data.url

let desc = `
𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗦𝗢𝗡𝗚 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 🎶
───────────────────────◎
📄 𝘁𝗶𝘁𝗹𝗲: ${data.title}
📜 𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${data.description}
⏰ 𝗱𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${data.timestamp}
📍 𝗮𝗴𝗼: ${data.ago}
👁️ 𝘃𝗶𝗲𝘄𝘀: ${data.views}
───────────────────────◎
©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖 
`  
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});   

//download audio + document

let down = await fg.yta(url)
let downloadurl = down.dl_url  

//send audio massage
await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek}) 
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖"},{quoted:mek}) 

    
}catch(e){
console.log(e)
reply(`${e}`)    
}
})        

//===========video + document dl=============

cmd({
    pattern: "video",
    react:"📽️",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me a link huththo")
const search = await yts(q)
const data = search.videos[0]; 
const url = data.url

let desc = `
𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗩𝗜𝗗𝗘𝗢 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 📽️
───────────────────────◎
📄 𝘁𝗶𝘁𝗹𝗲: ${data.title}
📜 𝗱𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻: ${data.description}
⏰ 𝗱𝘂𝗿𝗮𝘁𝗶𝗼𝗻: ${data.timestamp}
📍 𝗮𝗴𝗼: ${data.ago}
👁️ 𝘃𝗶𝗲𝘄𝘀: ${data.views}
───────────────────────◎
©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖
`  
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});   

//download video

let down = await fg.ytv(url)
let downloadurl = down.dl_url  

//send video massage
await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek}) 
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"©𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗠𝗔𝗟𝗦𝗛𝗔𝗡-𝗠𝗗 𝗢𝗙𝗖"},{quoted:mek}) 

                             
}catch(e){
console.log(e)
reply(`${e}`)    
}
})        
