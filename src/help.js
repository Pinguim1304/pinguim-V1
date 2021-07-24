const help = (pushname, tampilJam, tampilHari, tampilUcapan, sender, patt, getLevelingLevel, getLevelingXp, prefix) => {
	return `
╭───「 *INFO USUÁRIO* 」
├⊱ *Olá ${pushname}*
├⊱ *Número: ${sender.split('@')[0]}*
├⊱ *Level: ${getLevelingLevel(sender)}*
├⊱ *Xp: ${getLevelingXp(sender)}*
├⊱ *Patente: ${patt}*
╰────────────────────
╭───「 *SOBRE O BOT* 」
├⊱ Nome: *PINGUIM BOT*
├⊱ Dono: *Pinguim e Lari*
├⊱ *Wa.me/5511959118827*
├⊱ *Status: Online* ✅
├⊱ *Bot em testes...*
├⊱ *Não kiba xerequinha* 🐊🚩
├⊱ *Prefix* 「 ${prefix} 」
╰────────────────────
╭────「 📆 *DATA* 📆」
├⊱┏❰ *Hora*
├⊱┗❰ *${tampilJam}*
├⊱┏❰ *Dia*
├⊱┗❰ *${tampilHari}*
╰────────────────────
╭───「⭐ *MENUS* ⭐」
├⊱    💌 *${prefix}menufig* 💌
├⊱「Utilidade-menu de figu」
├⊱    🔮 *${prefix}menuaudio*🔮
├⊱「Utilidade-menu de áudios」
├⊱    🧙‍♂️ *${prefix}menuadm* 🧙‍♂️
├⊱「Utilidade-menu dos adms」
├⊱    📸 *${prefix}imagens* 📸
├⊱「Utilidade-menu de img」
├⊱    👾 *${prefix}jogos* 👾
├⊱「Utilidade-para entreter」
├⊱    🌟 *${prefix}logos* 🌟 
├⊱「Utilidade-fazer logos」
├⊱    💎 *${prefix}menuvip* 💎
├⊱「Utilidade-menus dos vips」
├⊱    👑 *${prefix}dono* 👑
├⊱「Utilidade-para o dono」
├⊱    🛠️ *${prefix}ferramentas* 🛠️
├⊱「Utilidade-sendo feito」
├⊱   *[ ❗ ] Em breve mais...*
╰───────────────────
╭──「⚡ *Pinguim - Bot* ⚡」
├⊱ ©  *Copyright by Pinguim*
├⊱ ®  *Dominando tudo* ⚡
╰───────────────────
╭───────────────────
├⊱   ▌│█║▌║▌║ - ║▌║▌║█▌
╰───────────────────`
}

exports.help = help
