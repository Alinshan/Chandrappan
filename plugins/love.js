/* Codded by @Amalser
*/

const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'list', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://www.linkpicture.com/q/IMG-20210629-WA0181.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦BOT CHANDRAPPAN❤️⃝➤⃟̱̱̱̱̄̄̄̄𝕤𝕞𝕒𝕣𝕥 𝕓𝕠𝕥⛦


💟𝗠𝗲     💠_BOT CHANDRAPPAN 
💟𝗢𝘄𝗻𝗲𝗿  💠_ALINSHAN

════════════════════
          🐼_𝙒𝙊𝙍𝙆𝙄𝙉𝙂 𝘼𝙎 𝙋𝙐𝘽𝙇𝙄𝘾_🐼 ══════════════════
𝙏𝙔𝙋𝙀 ".𝙝𝙚𝙡𝙥"  𝙁𝙊𝙍 𝙂𝙀𝙏 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 

𝙂𝙚𝙩 𝙜𝙧𝙖𝙣𝙩𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙨 𝙡𝙞𝙨𝙩𝙨
        ✅_.xmedia
        ✅_.deepai
        ✅_.effects
        ✅_.vava
        ✅_.amalser
══════════════════
➣:𝙊𝙒𝙉𝙀𝙍

⭕➣https://wa.me/message/919895828468

➣:𝘾𝙊𝘿𝙀𝘿 𝘽𝙔

⭕➣*ALINSHAN*


══════════════════
➣𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝙇𝙄𝙎𝙏𝙎

⭕➣.𝐡𝐞𝐥𝐩
⭕➣.𝐚𝐥𝐢𝐯𝐞
⭕➣.𝙖𝙢𝙖𝙡𝙨𝙚𝙧
⭕➣.𝐝𝐞𝐞𝐩𝐚𝐢
⭕➣.𝐱𝐦𝐞𝐝𝐢𝐚
⭕➣.𝙑𝙖𝙫𝙖
⭕➣.𝙚𝙛𝙛𝙚𝙘𝙩𝙨

➣𝙎𝙋𝙀𝘾𝙄𝘼𝙇 𝘾𝙊𝙈𝙈𝘼𝙉𝘿

⭕➣.𝙖𝙢𝙖𝙡

════════════════════
➣𝙈𝙀𝘿𝙄𝘼 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎

⭕➣.𝐬𝐨𝐧𝐠
⭕➣.𝐯𝐢𝐝𝐞𝐨
⭕➣.𝐬𝐭𝐢𝐜𝐤𝐞𝐫
⭕➣.𝐩𝐡𝐨𝐭𝐨
⭕➣.𝐲𝐭
⭕➣.𝙗𝙤𝙩
⭕➣.𝐢𝐦𝐠
⭕➣.𝐬𝐬
⭕➣.𝐭𝐭𝐬
⭕➣.𝐭𝐭𝐩
⭕➣.𝐚𝐭𝐭𝐩
⭕➣.𝐦𝐩3
⭕➣.𝐦𝐩4𝙖𝙪𝙙𝙞𝙤
⭕➣.𝐝𝐢𝐜𝐭
⭕➣.𝐟𝐟𝐦𝐩𝐞𝐠
⭕➣.𝐣𝐨𝐤𝐞
⭕➣.𝐦𝐞𝐦𝐞
⭕➣.𝐦𝐨𝐯𝐢𝐞
⭕➣.𝐢𝐧𝐬𝐭𝐚
⭕➣.𝐧𝐞𝐰𝐬
⭕➣.𝐨𝐜𝐫
⭕➣.𝐣𝐢𝐝
⭕➣.𝐪𝐮𝐨𝐭𝐞
⭕➣.𝐫𝐞𝐦𝐨𝐯𝐞𝐛𝐠
⭕➣.𝐬𝐜𝐚𝐧
⭕➣.𝐭𝐫𝐭
⭕➣.𝐠𝐢𝐭𝐡𝐮𝐛
⭕➣.𝐥𝐲𝐫𝐢𝐜
⭕➣.𝐜𝐨𝐯𝐢𝐝
⭕➣.𝐬𝐡𝐨𝐰
⭕➣.𝐢𝐠
⭕➣.𝐚𝐧𝐢𝐦𝐞𝐬𝐚𝐲
⭕➣.𝐜𝐡𝐚𝐧𝐠𝐞𝐬𝐚𝐲
⭕➣.𝐭𝐫𝐮𝐦𝐩𝐚𝐬𝐚𝐲
⭕➣.𝐬𝐰𝐞𝐚𝐭𝐡𝐞𝐫
⭕➣.𝐬𝐲𝐬𝐝
⭕➣.𝐭𝐛𝐥𝐞𝐧𝐝
⭕➣.𝐚
⭕➣.𝐮𝐧𝐯𝐨𝐢𝐜𝐞
⭕➣.𝐯𝐨𝐢𝐜𝐲
⭕➣.𝐰𝐚𝐥𝐥𝐩𝐚𝐩𝐞𝐫
⭕➣.𝐰𝐞𝐚𝐭𝐡𝐞𝐫
⭕➣.𝐬𝐡𝐨𝐫𝐭
⭕➣.𝐜𝐚𝐥𝐜
⭕➣.𝙬𝙞𝙠𝙞

`}) 

}));
