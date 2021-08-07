/* Codded by @Ravindu Manoj

Telegram: t.me/RavinduManoj
Facebook: https://www.facebook.com/ravindu.manoj.79

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

Whats bot - Ravindu Manoj
*/
const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config');
const jid = Config.DISBGM != false ? Config.DISBGM.split(',') : [];

const Language = require('../language');
const Lang = Language.getString('filters');

Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));

Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if (!!message.mention && message.mention[0] == '919207866848@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/Mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted : message.data, ptt: true})
        }
const array = ['Nanbaa','tea','Adnan','Helo','King','Kooi','Tuttu','Azaru','Ramos','Tentacion','Loveee','monjan','nirthada','Neymar','umma','Music','Kurup','Friend','Rose','aara','Alone','Admin','Carlos bomb squad','Amma','Apuz','Devil carlos','Group power','Hii','Nissaram','Njnum niyum','Ok da','Rules','adich','apuz ser','arum alla','carlos','corona','criminal','devil','fans','first','job','kallip','kalyanam','kanja','kazhicha','kazhik','kazhingh','kidanno','kollanam','kozhi','lahari','makeup','mine','missing','mood','morning','munji','mwoolusey','night','orumich','over','padipikaan','parayatt','pedi','penninay','poda','podi','poo','pott','pova','pranayam','prayojanam','preshnam','rakshasi','range','sarasu','sathyam','scene','set anoo','setta','shri','sneham','thallu','tym','uff','undakanne','uranghadi','vanda','vandada','vann','vilichaal','waiting','you','ayilla','bie','Oo','Chiri','Criz','Thala','Manasilayo','Dovp','dovp','Alamb','Aloo','Bhavani','Ayin','Birthday','Broken','Bye','Chava','Chiri','Chirikeda','Chirikkana','Comedy','Daaa','Ellarum','Ente','Fine','Gd nyt','Halo','Idi','Ithara','Ithetha','Iyyo','Ka','Kollam','Left','Mood','Ninne kond','Ninne','Oh no','Over','Pandaram','Owner','Patikkalle','Pattula','Pha','Pottan','Re entry','Rowdy','Silence','Smile','Thug','Vali','Wow','Ban','Chunkz','Edger','Entertain','Eyy','Kazhap','Mood','Padip','Vanda','Warning','apple','arum illa','avishym','carefull','chetta','chill','choora','chuma','chunk orap','come on','control','divasam','eda','ego','ejathi','errikum','glamour','kannano','kittila','kshemikanam','kudi poyo','makkaley','mandan','mariage','munb','muth','muttikkoo','nadakunathu','nayintta','ne arada','ninghal','onnu poda','onnum ariyilla','Good morning','Who is pablo','Subin','Myr','Enjoy','colony','enth','entha','Fuck','Goal','Exam','ayye','nirth','kunda','Kunda','Rip','hack','pvr','pro','dialogue','thamsha','Cry','cry','thayoli','Repost','video','A+','Over','per','Ready','like','poyi','Macha','macha','0','o','kick','mark','Mark','friend','died','4','5','pora','Show','Hambada','Kanja','Killedi','Pubg','Omg','kuthirappavan','mathi','Meeting','mier','moonji','Name','Oh no','pever','Potta','Serious','Soldier','Sry','Subscribe','thottu','Va','Vada','vimanam','3','nan','sad','chathu','delete','scene','Fake','vaa','bro','kaztro','Bgm','tha','a','lol','ban','ithara','song','poda','baby','hloo','lo','10','photo','lub','6','Kaztro','subscribe','support','Support','ichu','b','INR','mm','lokam','ithara','oh','andi','Mass','sorry','nanban','Lala','Smile','ghost','La be','Sed','Uff','Legend','music','Fek','Psycho','Town','Pwoli','Uyir','Malang','Bad','Boss','Thamasha','big fan','charlie','gd n8','kar98','love u','Endi','endi','noob','Poweresh','Perfect ok','perfect ok','power','saji','single','waiting','Myr','myr','Malappuram','uyir','thug','avastha','Moodesh','sketched','Cr7','Z aayi','manasilayo','Hi','Hlo','Poda','nirtheda','Aarulle','Portugal','ennitt','Boss','Haters','ayn','Kgf','😎','Messi','Hehe','hehe','Set aano','set aano','Bot myren','Venda','venda','chadhi','Chadhi','Hbday','hbday','Bot','Myre','myre','Oompi','oompi','parayatte','Fresh','fresh','Ok da','ok da','Feel aayi','feel aaayi','scene','Ok bei','ok bei','Da','Kozhi','kozhi','adi','Adi','kali','Kali','thantha','Thantha','Aysheri','aysheri','thund','Thund','thot','Thot','Sneham','Pm','paatt','Paatt','njan','Njan','life','Life','Killadi','killadi','good bye','Good bye','evide','Evide','achan','Achan','kunna','Kunna','broken','Broken','why','Why','pani','Pani','padicho','Padicho','paad','Paad','Chatho','chatho','nanayikoode','Nanayikoode','die','hate','Hate','nallath','Nallath','Neymer','neymer','Njr','Rohit','rohit','thall','Thall','Theri','theri','potte','Potte','Caption','caption','problem','Problem','BGM','Die','Jd','Loveu','Veeran','Waiting','ano','ara','alone','bad boy','brokenlove','care','chunke','comedy','devadha','ekk','fd','free','gdmng','gdngt','group','ha','i am back','ijathi','jd','kadhal','kerivaa','kiss','kukku','line','lucifer','machan','massbgm','matam','may i','mindathe','my area','mylove','padakam','polika','racal','rasool','rashmika','return','sneham','sulthan','thayirmulak','vada','wow','Thalapathy','Pikachu','Aliya','Leopucha','Poompatta gunda','Bgm','En nenjil','evde','Frnd','Game','Hy','Kadhali','king','Paavam','Pewer','pewer','Power','Pranayam','sed','Umma','Vava','Kunju','💪','🤣','Sis','Bairavaa','bgm','Mohanlal','Singapenne','Single','Jocker','1','alive','Aliyo','Ardra','Area','Ayn','bot','Chathi','Chunk','Chunks','cr7','Cry','Dai','Dora','Entry bgm','Gd mng','Gd ngt','Hloo','Kanjan','Ikkachi','Kanjav','Kevin','Kundan','kundan','manath','messi','My love','Nalla kutty','Nanban','Nanni','Nishal','Njn vera','Oh','Ok','Over','Pala shaji','Pever','Pinnallah','Poli','Potte','Power varatte','Re entry','Sad','Sahva','Scene','sed','Saji','Seth po','sis','Song','song','Supper','Vidhi','Baby','Music pranthan','Kenzo','kenzo','Kenzoo','Ashkar','Hbd','Mad','Blackzue','Nallakutti','Enthada','Akhil','Fsq','Nanbiye','Iblees','Rashmika','Kutty','Arakkal iblees','Althaf','Sayip','thamasha','Edi','Muth','Omb','2','Mood','Ok bye','Eda','Track maat','Chaya kudicho']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio, quoted: message.data, ptt: true})
}
});

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));

Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.BGMFILTER){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '918921483992@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
const array = ['Bot','Hi','power','sad','anthas','failed','alla','chunk','marichu','myre','think','cheyalle','mention','mama','set','eda','umma','police','aysheri','vannu','love','manasilla','uyir','oombi','Mm','important','sed','chathu','girl','poweresh','ooo','bye','fuck','pedicho','kunna','number','ok','pwoli','chiri','vibe','shut','saved','mood','shaad','pidi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./stickers/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
