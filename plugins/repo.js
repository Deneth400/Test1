const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*📍ℝ𝔼ℙ𝕆-𝕃𝕀ℕ𝕂 ❤️‍🔥👇*

👨‍💻◦ https://github.com

*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝕊𝕌𝔹𝕊ℂℝ𝕀𝔹𝔼 𝕄𝕐 𝕐𝕆𝕌𝕋𝕌𝔹𝔼 ℂℍ𝔸ℕℕ𝔼𝕃𝕊❤️‍🔥👇*

👨‍💻◦ https://www.youtube.com/@Sahas_Tech

👨‍💻◦ https://www.youtube.com/@programmercyberayesh

*📍ℙ𝕃𝔼𝔸𝕊𝔼 𝔽𝕆𝕃𝕃𝕆𝕎 𝕄𝕐 𝕎ℍ𝔸𝕋𝕊𝔸ℙℙ ℂℍ𝔸ℕℕ𝔼𝕃 ❤️‍🔥👇*

👨‍💻◦ https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/67chv0.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
