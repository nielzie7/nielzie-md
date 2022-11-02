require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const jsonFile = require('jsonfile');
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const yts = require('yt-search')
const { performance } = require('perf_hooks')
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer,jsonformat, delay, format, logic,generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')

const { commandsmenu } = require("./src/commandmenu")

module.exports = client = async (client, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const isCmd = prefix.includes(body != '' && body.slice(0, 1)) && body.slice(1) != ''
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await client.decodeJid(client.user.id)
    const isCreator = [client.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isOwner = global.owner + '@s.whatsapp.net'

    const itsMe = m.sender == client.user.id ? true : false
    const text = q = args.join(" ")
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)

    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

if (!client.public) {
      if (!m.key.fromMe) return
    }
    
    //console log
if (isCmd) {
      console.log(chalk.black(chalk.bgCyanBright("[ CMD ]")), chalk.black(chalk.cyan.bold(budy || m.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(pushname), chalk.yellow(m.sender) + "\n" + chalk.magenta("=> In"), chalk.green(m.isGroup ? groupName : groupName))
      } else {
      console.log(chalk.black(chalk.bgWhiteBright("[ MSG ]")), chalk.black(chalk.white.bold(budy || m.mtype)) + "\n" + chalk.magenta("=> From"), chalk.green(pushname), chalk.yellow(m.sender) + "\n" + chalk.magenta("=> In"), chalk.green(m.isGroup ? groupName : groupName))
}

switch (command) {
     case 'menu':
      case 'help': {
        let btn = [{
          urlButton: {
            displayText: 'Source',
            url: 'https://github.com/nielzie7/'
          }
        }, {
          quickReplyButton: {
            displayText: 'Menu',
            id: `#`
          }
        }, {
          quickReplyButton: {
            displayText: 'Menu?',
            id: `#`
          }
        }]
        client.send5ButImg(m.chat, commandsmenu, gloval.footer, global.thumb, btn)
      }
        break
default:
}
        } catch (e) {
            console.log(e)
        }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})