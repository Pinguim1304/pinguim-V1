default:
if (body == `${prefix}${command}`) {
hsl = `        ────────────────\nOi @${sender.split("@")[0]}!!\nO comando: ${prefix}${command} não existe\n\nMano cê tem doença?🧙‍♂️\nSe não esta no ${prefix}menu é porq não tem.\n        ────────────────`
client.sendMessage(from, hsl, text, {quoted: mek, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
reply(ptbr.erro())
}
})
}
starts()
╭─── 「 *INFO COVID BR* 」
├⊱ 📊Casos Total ${infocovid.resultado.casos}
├⊱ 🧖🏽‍♂️Mortes Total ${infocovid.resultado.mortes}
├⊱ 👊🏽Recuperados ${infocovid.resultado.recuperados}
├⊱ 🧬Testes Feitos ${infocovid.resultado.testes}
├⊱ 🦠Casos Indefinidos ${infocovid.resultado.casosIndefinidos}
╰────────────────────

				