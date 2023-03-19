
exports.lvlon = () => {
	return`*「❗」LEVELING ENABLE*`
}

exports.lvloff = () => {
	return`*「❗」LEVELING DISABLE*`
}

exports.lvlnul = () => {
	return`*「❗」LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*「❗」LEVEL DI GRUP BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*KAMU BELUM DAFTAR*\n_*SILAHKAN DAFTAR KETIK DAFTAR*_\nContoh : !daftar`
}

exports.rediregis = () => {
	return`*NOMORMU SUDAH TERDAFTAR*`
}

exports.groupo = () => {
	return`*「❗」HANYA UNTUK GRUP*`
}
exports.clears = () => {
	return`*Sukses bang!*`
}
exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel) => {
	return`
*「 SELAMAT 」*
\`\`\`➸ *Nama* : ${pushname}\`\`\`
\`\`\`➸ *Nomor* : wa.me/${sender.split("@")[0]}\`\`\`
\`\`\`➸ *Xp* : ${getLevelingXp(sender)}\`\`\`
\`\`\`➸ *Level* : ${getLevel} ➸ ${getLevelingLevel(sender)}\`\`\`
`}
 
exports.limitend = (pushname, prefix) => {
	return`*maaf ${pushname} limit hari ini habis*
*Limit di reset setiap jam 24:00*

\`\`\`Upgrade Premium Bebas Limit\`\`\`
\`\`\`➸ 15K : 1 Bulan\`\`\`
\`\`\`Jika berminat silahkan hubungi owner\`\`\`
\`\`\`Kirim perintah : ${prefix}owner\`\`\`
`
}

exports.limitcount = (isPrem, limitCounts) => {
	return`sisa limit anda : ${isPrem ? '9999' : `${db.data.users[m.sender].limit}`}

Upgrade premium yah bang, biar bebas gunain bot tanpa batasan limit hehe`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`
╭───────────────────
╰───────────────────`
}
