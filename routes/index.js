const express = require('express');
const router = express.Router();

router.get('/auth/login', (req, res) => {
    res.render('login', { title: 'Login' });
  });
  
  router.get('/user/profile', (req, res) => {
    res.render('profile', { title: 'Profil Pengguna' });
  });
  
  router.post('/profileSederhana', (req, res) => {
    res.render('profile', { title: 'Profil Pengguna' });
  });

  router.get('/profileSederhana', (req, res) => {
    res.render('profile', { title: 'Profil Pengguna' });
  });
module.exports = router;