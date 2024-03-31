var handler = async (m, { conn, text, usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🌩 *Ingrese un texto a preguntar*\n\nEjemplo, !${command} Hoy Llueve?`)
//m.react('❔')
await delay(1000 * 1)
//m.react('❓')
await delay(1000 * 1)
//m.react('❔')
await delay(1000 * 1)

conn.reply(m.chat, `🌩 *Preguntas - Sakura*\n\n*Pregunta:* ${text}\n*Respuesta:* ${['Si','Tal vez sí','Posiblemente','Probablemente no','No','Imposible','Por que haces estas preguntas','Por eso te dejo','Para que quieres saber','No te dire la respuesta'].getRandom()}`)

}
handler.help = ['pregunta']
handler.tags = ['juegos']
handler.command = /^pregunta|preguntas|apakah$/i

handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
