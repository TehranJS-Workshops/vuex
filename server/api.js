const _ = require('lodash')
const products = require('./mock/_products')

module.exports = function apiMiddleware(app) {
  // returning products
  app.get('/api/product/list', (req, res) => {
    res.json({ payload: products }).end()
  })

  // get single product by sku
  app.get('/api/product/:id', (req, res) => {
    const id = parseInt(req.params.id, 10)
    const product = _.find(products, { id: id })
    if (!product) {
      return res
        .status(404)
        .json({ error: { message: 'Product not found' } })
        .end()
    }
    return res.json({ payload: product }).end()
  })

  app.all('/api/*', (req, res) =>
    res
      .status(404)
      .json({ error: { message: 'Not found' } })
      .end()
  )
}
