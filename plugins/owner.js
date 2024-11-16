const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*👾 ＰＯＤＤＡ-ＭＤ 👨‍💻💗*

> *𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢* 

*⚡ᴏᴡɴᴇʀꜱ ɴᴀᴍᴇꜱ -: ꜱᴀʜᴀꜱ ᴛᴇᴄʜ & ᴄʏʙᴇʀ ᴀʏᴇꜱʜ*
*⚡ɴᴜᴍʙᴇʀꜱ* -: 94718913389,94775341543
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@Sahas_Tech
*⚡ʏᴏᴜᴛᴜʙᴇ -:* https://www.youtube.com/@programmercyberayesh
*⚡ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/67chv0.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
