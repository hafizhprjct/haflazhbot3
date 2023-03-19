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
global.wms = '6285791762177' //wm help Pake nomor yng mau pp nya di jadiin Wm
autoread = true //jangan di ubah
global.footer = 'Lenttobd'//ganti
global.pulsa = "628xxxxx"//ganti
global.gopay = "628xxx"//ganti
global.dana = "628xxx"//ganti
global.paypal = "---" // biarin aja kalau gaada
global.shopay = "---" // biarin aja kalau gaada
global.saweria = "---" // biarin aja kalau gaada
global.sociabus = "---" // biarin aja kalau gaada
global.bni = "---" // biarin aja kalau gaada
global.bri = "---" // biarin aja kalau gaada
global.bankjatim = "---" // biarin aja kalau gaada
global.jago = "---" // biarin aja kalau gaada
global.neobank = "---" // biarin aja kalau gaada
global.packname = 'LENTTOBS WA MD'//nama wm
global.footer = '©Maslent'//ganti
global.ovo = "628xxx"//ganti
global.ownerlen = "Maslent/Lenttobs"//Ubah
global.owner = ['6212345678910'] //ubh nomor owner hp
global.ownername = "WA MD" //ubah
global.ytname = "YT: lenttobs"//ubah
global.socialm = "IG: vlntncptr"//ubah
global.location = "Indonesia, Jawatimur, Lumajang"//ubah
global.ownernomer = "6212345678910"//ubah nomorhp owner
global.premium = ['6212345678910']//ubah nomor hp premium
global.nomorcs = '628123456678'//nomormu
global.botname = 'Bot V23' //ubah
global.linkz = "Link Gc"//ubah
global.websitex = "yt mu"//ubah
global.botscript = '-'
global.themeemoji = "😿"//ubah
global.packname = "Sticker By"//ubah
global.author = "Made by Lenttobs"//ubah
global.wm = "LENTTOBS WHATSAAP MD"//ubah Jadi nama wm
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Piye?!', 
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
    free: 2,
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
