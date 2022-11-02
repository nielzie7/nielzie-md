let fs = require("fs")
let chalk = require("chalk")
exports.commandsmenu= (prefix, pushname, runtime) => {
return `
*Halo ${pushname}*
*Uptime: ${runtime(process.uptime())}*

->
`
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})