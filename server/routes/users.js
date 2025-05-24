const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/users');

router.use(protect);

router.route('/')
  .get(getUsers);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router; 