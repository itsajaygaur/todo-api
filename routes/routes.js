const express = require('express')
const router = express.Router()
const { getAllTodos, getAllUsers, getUserByID } = require('../controllers/todos.js')


router.route('/todos').get(getAllTodos)
router.route('/users').get(getAllUsers)
router.route('/user/:id').get(getUserByID)


module.exports = router