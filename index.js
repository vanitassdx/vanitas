
const { Client } = require('whatsapp-web.js');
const client = new Client();
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const path = require('path');






const SESSION_FILE_PATH = './session.json';
const express = require("express")
const app = express()
const qr = require("qr-image")

app.set("view engine", "ejs")
app.get('/qrcode', (req, res) => {
    res.render("home")
});





let codeBarra;

client.on('qr', qr => {
    // qrcode.generate(qr, {small: true});
    codeBarra = qr
    
});

app.get('/', async (req, res) => {

    const code = await qr.image(codeBarra, { type: 'svg' })
    res.type('svg')
    code.pipe(res)

});

client.on('ready', () => {
    console.log('إشتغل!');
});

client.on('message', async msg => {
    console.log('MESSAGE RECEIVED', msg);

    if (msg.body === 'بوت') {
        // Send a new message as a reply to the current one
        msg.reply('ميت');
    } else if (msg.body === 'عمك') {
        let button = new Buttons('فانيتاس عمك',[{body:'فانيتاس عمك'},{body:'فانيتاس عمك'},{body:'فانيتاس عمك'}],'فانيتاس عمك','فانيتاس عمك');
        client.sendMessage(msg.from, button);
    } else if (msg.body === 'فانيتاس') {
        msg.react('🤝🏻');
    }

   






















});

 

client.initialize();


app.listen(8080, () => {
    console.log('servidor rodando http://localhost:8080')

});





