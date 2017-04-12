const config  = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')
//const server  = restify.createServer().listen(2000)

// Connection to Microsoft Bot Framework
const connector = new builder.ChatConnector({
  appId: config.appId,
  appPassword: config.appPassword,
})

const bot = new builder.UniversalBot(connector)

// Event when Message received
bot.dialog('/', (session) => {
  console.log(session.message.text)
})

// Server Init
const server = restify.createServer()
server.listen(2000, () => {
  console.log("Example app listening on port ");
})
server.post('/', connector.listen())