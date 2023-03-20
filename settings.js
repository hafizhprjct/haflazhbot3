//Ubah Image/Thumbnail di folder maslent/pplent/maslent.jpg (Cari fotomu Ubah namnya ganti jadi maslent.jpg trus di gantu make pp mu yang baru

const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.autoTyping = false // matikan kalau ga mau mengetik botnya cara matiinya ubah dari true jadi false
//edit aja sesuka hati
global.welcome = `
selamat datang gesss
`
global.left = ` 
bye smoga tenang di sana
`
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
global.sapi = 'WA MD'
//===============================\\
global.wms = '6285171662264' //wm help Pake nomor yng mau pp nya di jadiin Wm
autoread = true //jangan di ubah
global.footer = 'Lenttobd'//ganti
global.pulsa = "6285651307830"//ganti
global.pulsa2 = "6281354060278"//ganti
global.gopay = "6285651307830"//ganti
global.dana = "6285651307830"//ganti
global.QRISBarcode = "https://telegra.ph/Donasi-Melalui-QRIS-2-03-20" // biarin aja kalau gaada
global.shopeepay = "6285651307830" // biarin aja kalau gaada
global.saweria = "saweria.com/HafizhFlash" // biarin aja kalau gaada
global.trakteer = "https://trakteer.id/HafizhFlash22" // biarin aja kalau gaada
global.bni = "chat owner aja" // biarin aja kalau gaada
global.bri = "chat owner aja" // biarin aja kalau gaada
global.linkaja = "6285651307830" // biarin aja kalau gaada
global.seabank = "chat owner aja" // biarin aja kalau gaada
global.neobank = "chat owner aja" // biarin aja kalau gaada
global.packname = 'HaFlazh-BOT'//nama wm
global.footer = '© Hafizh'//ganti
global.ovo = "6285651307830"//ganti
global.ownerlen = "Hafizh/HaFlazhBOT"//Ubah
global.owner = ['6285651307830'] //ubh nomor owner hp
global.ownername = "ඞ Hafizh ඞ" //ubah
global.ytname = "YT: Hafizh Flash"//ubah
global.socialm = "IG: hfizh22"//ubah
global.location = "Indonesia, Kalimantan Timur, Bontang"//ubah
global.ownernomer = "6285651307830"//ubah nomorhp owner
global.premium = ['6285651307830']//ubah nomor hp premium
global.nomorcs = '6285651307830'//nomormu
global.botname = 'HaFlazh-BOT' //ubah
global.linkz = "https://chat.whatsapp.com/JQTVwyYnQNW0ljAncX2Kpf"//ubah
global.websitex = "https://www.youtube.com/channel/UCA4lRndgyxYTZWIkjJzkpKg"//ubah
global.botscript = '-'
global.themeemoji = "😿"//ubah
global.packname = "Sticker By"//ubah
global.author = "Made by HaFlazh-BOT"//ubah
global.wm = "HfLzH"//ubah Jadi nama wm
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Sukses Masbro!', 
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only', 
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Upss Limit Kamu sudah habis..Tunggu Waktu menunjukan Pukul 12:00 Limit Anda otomatis akan Di reset!!!',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
