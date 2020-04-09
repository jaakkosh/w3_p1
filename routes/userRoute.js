'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const {body, sanitizeBody} = require('express-validator');
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/hack', (req, res) => {
  res.send(req.body.search);
});

router.post('/', [

  body('name', 'Min 3 chars, required').isLength({min: 3}).escape(),
  body('email', 'Not valid email address').isEmail().escape(),
  body('passwd', 'Min 8 chars, at least one capital letter')
  .matches('(?=.*[A-Z]).{8,}').escape(),
], userController.user_post);

router.put('/', userController.user_put);

router.delete('/:id', userController.user_delete);

module.exports = router;
