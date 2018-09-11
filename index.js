'use strict'
const request = require('request');
const process = require('./reply');
const 
  credentials = require('./getCredentials'),
  FACEBOOK_ACESS_TOKEN = credentials.fb,
  FB_SECRET = credentials.secret;
  

//messenger bot framework 
const BootBot = require('bootbot');
const PORT =  3000;
const bot = new BootBot({
  accessToken :FACEBOOK_ACESS_TOKEN,
  verifyToken : 'hello',
  appSecret: FB_SECRET
});

bot.on('message',(payload,chat)=>{
  process(chat,payload)
  })
bot.start(PORT);