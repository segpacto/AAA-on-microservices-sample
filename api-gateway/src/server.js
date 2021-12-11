const gateway = require('fast-gateway')

const auth = require('./middlewares/auth')

const server = () => gateway({
  middlewares: [ auth ],
  routes: [{
    prefix: '/customer-api',
    target: 'http://customer-api:3000/customer-api'
  },
  {
    prefix: '/invoice-api',
    target: 'http://invoice-api:3001/invoices-api'
  }]
})

module.exports = server
