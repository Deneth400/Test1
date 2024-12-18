//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname} I'm alive now*

*╭─「 ALIVE 」*
*│◈ 𝙱𝙾𝚃 𝙽𝙰𝙼𝙴* : ᴘᴏᴅᴅᴀ-ᴍᴅ
*│◈ 𝙾𝚆𝙽𝙴𝚁𝚂 𝙽𝙰𝙼𝙴𝚂* : ꜱᴀʜᴀꜱ ᴛᴇᴄʜ & ᴄʏʙᴇʀ ᴀʏᴇꜱʜ
*╰──────────●●►*
*╭──────────●●►*
*│ 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙲𝙷𝙰𝙽𝙽𝙴𝙻:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533
*│ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴:* https://www.youtube.com/@Sahas_Tech
*│ 𝚈𝙾𝚄𝚃𝚄𝙱𝙴:* https://www.youtube.com/@programmercyberayesh
*╰──────────●●►*

*Type .menu to get bot user menu*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/67chv0.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//============= menu command ================

const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "menu the bot",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭─「 ᴄᴏᴍᴍᴀɴᴅ ᴘᴀɴᴇʟ」*
*│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*│◈ ʀᴀᴍ ᴜꜱᴀɢᴇ : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*│◈ ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰──────────●●►*

*╭╼╼╼╼╼╼╼╼╼╼*
*├ 1 • OWNER*
*├ 2 • CONVERT*
*├ 3 • AI*
*├ 4 • SEARCH*
*├ 5 • DOWNLOAD*
*├ 6 • MAIN*
*├ 7 • GROUP*
*├ 8 • FUN*
*├ 9 • TOOLS*
*├ 10 • OTHER*
*╰╼╼╼╼╼╼╼╼╼╼*

_*🌟 Reply with the Number you want to select*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url: "https://files.catbox.moe/67chv0.jpg"}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`*◈╾──────OWNER COMMAND LIST──────╼◈*

╭────────●●►
│ • *restart* 
╰────────────────────●●►

⭓ *Total Commands List OWNER: 1*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '2':               
                        reply(`*◈╾──────CONVERT COMMAND LIST──────╼◈*

╭────────●●►
│ • *convert* 
╰────────────────────●●►

⭓ *Total Commands List CONVERT: 1*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '3':               
                        reply(`*◈╾──────AI COMMAND LIST──────╼◈*

╭────────●●►
│ • *ai* 
╰────────────────────●●►

⭓ *Total Commands List AI: 1*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '4':               
                        reply(`*◈╾──────SEARCH COMMAND LIST──────╼◈*

╭────────●●►
│ • *yts* 
╰────────────────────●●►
╭────────●●►
│ • *srepo* 
╰────────────────────●●►

⭓ *Total Commands List SEARCH: 2*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '5':               
                        reply(`*◈╾──────DOWNLOAD COMMAND LIST──────╼◈*

╭────────●●►
│ • *apk* 
╰────────────────────●●►
╭────────●●►
│ • *twitter* 
╰────────────────────●●►
╭────────●●►
│ • *gdrive* 
╰────────────────────●●►
╭────────●●►
│ • *mediafire* 
╰────────────────────●●►
╭────────●●►
│ • *fb* 
╰────────────────────●●►
╭────────●●►
│ • *ig* 
╰────────────────────●●►
╭────────●●►
│ • *movie* 
╰────────────────────●●►
╭────────●●►
│ • *song* 
╰────────────────────●●►
╭────────●●►
│ • *video* 
╰────────────────────●●►
╭────────●●►
│ • *play/yt* 
╰────────────────────●●►
╭────────●●►
│ • *song2* 
╰────────────────────●●►
╭────────●●►
│ • *video2* 
╰────────────────────●●►
╭────────●●►
│ • *tiktok* 
╰────────────────────●●►
╭────────●●►
│ • *img* 
╰────────────────────●●►

⭓ *Total Commands List DOWNLOAD: 14*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '6':               
                        reply(`*◈╾──────MAIN COMMAND LIST──────╼◈*

╭────────●●►
│ • *alive* 
╰────────────────────●●►
╭────────●●►
│ • *about* 
╰────────────────────●●►
╭────────●●►
│ • *menu* 
╰────────────────────●●►
╭────────●●►
│ • *allmenu* 
╰────────────────────●●►
╭────────●●►
│ • *support* 
╰────────────────────●●►
╭────────●●►
│ • *system* 
╰────────────────────●●►
╭────────●●►
│ • *ping* 
╰────────────────────●●►
╭────────●●►
│ • *runtime* 
╰────────────────────●●►

⭓ *Total Commands List MAIN: 8*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                        break;
                    case '7':               
                        reply(`*◈╾──────GROUP COMMAND LIST──────╼◈*

╭────────●●►
│ • *promote* 
╰────────────────────●●►
╭────────●●►
│ • *demote* 
╰────────────────────●●►
╭────────●●►
│ • *kick* 
╰────────────────────●●►
╭────────●●►
│ • *add* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *tagall* 
╰────────────────────●●►
╭────────●●►
│ • *getpic* 
╰────────────────────●●►
╭────────●●►
│ • *setwelcome* 
╰────────────────────●●►
╭────────●●►
│ • *setgoodbye* 
╰────────────────────●●►
╭────────●●►
│ • *admins* 
╰────────────────────●●►
╭────────●●►
│ • *gname* 
╰────────────────────●●►

⭓ *Total Commands List GROUP: 11*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);
                       break;
                    case '8':               
                        reply(`*◈╾──────FUN COMMAND LIST──────╼◈*

╭────────●●►
│ • *dog* 
╰────────────────────●●►
╭────────●●►
│ • *fact* 
╰────────────────────●●►
╭────────●●►
│ • *hack* 
╰────────────────────●●►
╭────────●●►
│ • *quote* 
╰────────────────────●●►

⭓ *Total Commands List FUN: 4*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);

                        break;
                    case '10':               
                        reply(`*◈╾──────OTHER COMMAND LIST──────╼◈*

╭────────●●►
│ • *githubstalk* 
╰────────────────────●●►
╭────────●●►
│ • *trt* 
╰────────────────────●●►
╭────────●●►
│ • *weather* 
╰────────────────────●●►

⭓ *Total Commands List OTHER: 3*

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`);


                        break;
                    default:
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});


//======================= system command =====================
cmd({
    pattern: "system",
    alias: ["status","botinfo"],
    desc: "check up time",
    category: "main",
    react: "👀",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =`┌────────────────────
    *├ ⏰Runtime:-  ${runtime(process.uptime())}*    
    *├ 📟Ram usage:- ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
    *├ ⚙️Platform:- ${os.hostname()}*
    *├ 👨‍💻Owner:- Sahas Tech And Cyber Ayesh*   
    *├ 👾Version:- 1.0.0*
    └───────────────────────
`
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})


//=================== ping command =======================

cmd({
    pattern: "ping",
    react: "⚡",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging To index.js!!!```'  }, { quoted: mek } )
var final = new Date().getTime();
return await conn.edit(ping, '*Pong*\n *' + (final - inital) + ' ms* ' )
} catch (e) {
reply(`${e}`)
console.log(e)
}
})


//================ run time ======================

cmd({
    pattern: "status",
    alias: ["runtime","botinfo"],
    desc: "check up time",
    category: "main",
    react: "⏰",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{ 

let status =` *🚀 Runtime:-  ${runtime(process.uptime())}* `
return reply(`${status}`)
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//================= abio command ========================

cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 𝐇𝐄𝐋𝐋𝐎𝐖 𝐓𝐇𝐄𝐈𝐑 ${senderNumber}*

              𝐈 𝐀𝐌 𝐏𝐎𝐃𝐃𝐀-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓

              𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 𝐀𝐍𝐃 𝐂𝐘𝐁𝐄𝐑 𝐀𝐘𝐄𝐒𝐇..
           
*ɢɪᴛʜᴜʙ :*    
             
*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@Sahas_Tech

*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@programmercyberayesh
      
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

              тнαηкѕ ƒσя υѕιɳɠ ʂααԋαʂ-м∂ ωнαтѕαρρ вσт м∂`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/67chv0.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})


//====================== support command ===================


cmd({

    pattern: "support",

    desc: "To get the bot informations.",

    react: "⛓",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{


let about = ` *👋 Hello ${pushname}*

*👨‍💻PODDA-MD Support Channels💗*

*Youtube Channel Link:* https://www.youtube.com/@Sahas_Tech

*Youtube Channel Link:* https://www.youtube.com/@programmercyberayesh

*Whatsapp Channel Link:* https://whatsapp.com/channel/0029VaiTjMlK5cDLek3bB533

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/67chv0.jpg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})

//==================== all menu command =====================

cmd({
    pattern: "allmenu",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
ai: '',
tools: '',
search: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}

let madeMenu = `
❤🤍 𝐏𝐎𝐃𝐃𝐀 𝐌𝐃 - 𝗔𝗟𝗟 𝗠𝗘𝗡𝗨 🤍❤

      👋 𝐇𝐄𝐋𝐋𝐎, ${pushname}!

✨ 𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝘁𝗼 𝐏𝐎𝐃𝐃𝐀 𝐌𝐃! ✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ яυηтιмє * ${runtime(process.uptime())}
│◈ σωηєя ηαмє * 𝐒𝐀𝐇𝐀𝐒 𝐓𝐄𝐂𝐇 & 𝐂𝐘𝐁𝐄𝐑 𝐀𝐘𝐄𝐒𝐇
│◈ σωηєяʂ ηυмвєяʂ * 94718913389 & 94775341543
╰──────────●●►
╭──────────●●►
 📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.download}
╰───────────●●►
╭──────────●●►
 👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.ai}
╰───────────●●►
╭──────────●●►
 🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.main}
╰───────────●●►
╭──────────●●►
 🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.fun}
╰───────────●●►
╭──────────●●►
 🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.convert}
╰───────────●●►
╭──────────●●►
 🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.search}
╰───────────●●►
╭──────────●●►
 👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.group}
╰───────────●●►
╭──────────●●►
 🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.owner}
╰───────────●●►
╭──────────●●►
 ⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.other}
╰───────────●●►
╭──────────●●►
 🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
 ${menu.tools}
╰───────────●●►

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘᴏᴅᴅᴀ ᴍᴅ*`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/67chv0.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`𝔼𝕣𝕣𝕣𝕠𝕣`)
}
})

