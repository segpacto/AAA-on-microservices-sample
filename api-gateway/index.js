const gateway = require('./src/server')

const { port } = require('./src/config')

gateway()
  .start(port)
  .then(() => console.log(`Service running on ${port}`))
