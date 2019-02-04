const router = require('express').Router()
const catsController = require('../controllers/cats')

router.route('/cats')
  .get(catsController.index)
  .post(catsController.create)

router.route('/cats/:id')
  .get(catsController.show)

module.exports = router
