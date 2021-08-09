/* Copyright (C) 2020 amalser.
Edited by amalser.
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

// Descriptions
const ENZAR = "Owner list. [ ✅️ Official External Plugin ]"

// Sentences
const ENSEN = "```CHANDRAPPAN Loading🎯```"

// Results
const ENSON = "```.``` "

// Plugin Start 
if (con.LANG === 'EN' || 'az') {

    if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'own', fromMe: true, desc: ENZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "*OWNER List*\n*➣antilink  on/off*\n*➣ fulleva on/off*\n*➣ mlink on/of*\n*➣ theri no/yes*\n*➣ update now*\n*➣ tagall*\n*➣ bgm on/off*";
            r_text[1] = "*Heroku Settings*\n*➣ BOT_NAME*\n*➣ REMOVE_BG_API_KEY*\n*➣ TAG_HEADER*\n*➣ TAG_REPLY*\n*➣ SUDO*\n*➣ WORK_TYPE*\n*➣ OWNER_NAME*\n*➣ LANGUAGE*\n*➣ KICKME_MESSAGE*\n*➣ AUTO_BİO*\n*➣ ALIVE_MESSAGE*\n*➣ ALL_CAPTION*";
            r_text[2] = "*HOW TO USE HEROKU COMMAND IN GROUP*\n*➣ setvar BOT_NAME: [💘CHANDRAPPAN💘]*\n*➣ setvar WORK_TYPE:public*\n*➣ setvar SUDO:91xxxxxxxxxx,0,91xxxxxxxxxx*\n*➣ setvar LANGUAGE:en*";
            r_text[3] = "setvar BOT_NAME:[💘CHANDRAPPAN💘]";
            r_text[4] = "antilink on";
            r_text[5] = "*aennum sneham mathram😊*";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'own', fromMe: false, desc: ENZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, ENSEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "*OWNER List*\n*➣antilink  on/off*\n*➣ fulleva on/off*\n*➣ mlink on/of*\n*➣ theri no/yes*\n*➣ update now*\n*➣ tagall*\n*➣ bgm on/off*";
            r_text[1] = "*Heroku Settings*\n*➣ BOT_NAME*\n*➣ REMOVE_BG_API_KEY*\n*➣ TAG_HEADER*\n*➣ TAG_REPLY*\n*➣ SUDO*\n*➣ WORK_TYPE*\n*➣ OWNER_NAME*\n*➣ LANGUAGE*\n*➣ KICKME_MESSAGE*\n*➣ AUTO_BİO*\n*➣ ALIVE_MESSAGE*\n*➣ ALL_CAPTION*";
            r_text[2] = "*HOW TO USE HEROKU COMMAND IN GROUP*\n*➣ setvar BOT_NAME: [💘CHANDRAPPAN💘]*\n*➣ setvar WORK_TYPE:public*\n*➣ setvar SUDO:91xxxxxxxxxx,0,91xxxxxxxxxx*\n*➣ setvar LANGUAGE:en*";
            r_text[3] = ".setvar BOT_NAME:[💘CHANDRAPPAN💘]";
            r_text[4] = ".antilink on";
            r_text[5] = "*aennum sneham mathram😊*";


            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, ENSON + `${r_text[i]}`, MessageType.text);

        }));
    }
}
