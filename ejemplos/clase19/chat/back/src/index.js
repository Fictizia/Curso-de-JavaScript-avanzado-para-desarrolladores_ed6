const WebSocket = require('ws')

const wss = new WebSocket.Server({
  port: 3000,
  zlibDeflateOptions: {
    // See zlib defaults.
    chunkSize: 1024,
    memLevel: 7,
    level: 3
  },
  zlibInflateOptions: {
    chunkSize: 10 * 1024
  }
})

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message)
      }
    })
  })
})
