/* 
plk
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');

const Language = require('../language');
const Lang = Language.getString('weather');

Asena.addCommand({pattern: 'sarticles ?(.*)', fromMe: false, desc: "Gets you a list of Astronomy articles from the Planetary Society."}, async (message, match) => {
	if (match[1] === 'where is it?') return await message.reply("wait...");
	const url = `https://spaceflightnewsapi.net/api/v2/blogs`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
	        return await message.client.sendMessage(message.jid,'*📁 ' + "Space Articles" +'* \n\n\n' +
		'*📑 ' + "Article" +':* ```' + json[0].title + '```\n' + 
                '*📄 ' + "Synopsis" +':* ```' + json[0].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[0].url + '```\n\n' +
                '*📑 ' + "Article" +':* ```' + json[1].title + '```\n' +                                                                         
		'*📄 ' + "Synopsis" +':* ```' + json[1].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[1].url + '```\n\n' + 
                '*📑 ' + "Article"+':* ```' + json[2].title + '```\n' +
                '*📄 ' + "Synopsis" +':* ```' + json[2].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[2].url + '```\n\n' + 
                '*📑 ' + "Article" +':* ```' + json[3].title + '```\n' +
   	        '*📄 ' + "Synopsis" +':* ```' + json[3].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[3].url + '```\n\n' + 
                '*📑 ' + "Article" +':* ```' + json[4].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[4].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[4].url + '```\n\n'+ 
		 '*📑 ' + "Article" +':* ```' + json[5].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[5].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[5].url + '```\n\n'+
		 '*📑 ' + "Article" +':* ```' + json[6].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[6].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[6].url + '```\n\n'+									 
		 '*📑 ' + "Article" +':* ```' + json[7].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[7].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[7].url + '```\n\n'+									 
		 '*📑 ' + "Article" +':* ```' + json[8].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[8].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[8].url + '```\n\n'+
		'*📑 ' + "Article" +':* ```' + json[9].title + '```\n' +                                                                         
                '*📄 ' + "Synopsis" +':* ```' + json[9].summary + '```\n' + 
		'*🔗 ' + Lang.RMLINK +':* ```' + json[9].url + '```\n\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, "*Error*", MessageType.text);
	}
});
