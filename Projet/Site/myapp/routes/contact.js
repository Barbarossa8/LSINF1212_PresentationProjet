var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact. */
router.get('/', function(req, res, next) {
    res.render('contact', {});
});

/* POST contact us*/
router.post('/send', function (req,res,next) {
    var transporter = nodemailer.createTransport({
        service:'Gmail',
        auth:{
            user:'le.rendez.vous.1212@gmail.com',
            pass:'lsinf1212'
        }
    });

    var mailOptions ={
        from: 'Le Rendez-Vous <le.rendez.vous.1212@gmail.com>',
        to: 'le.rendez.vous.1212@gmail.com',
        subject: 'Le Rendez-Vous : Recommendation de '+req.body.nom,
        text:'Le Rendez-Vous',
        html: 'Recomendation de : '+req.body.nom + '<br> Adresse mail : '+ req.body.mail +'<br> Numéro de gsm : ' + req.body.tel +'<br> Message : '+req.body.mess
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.log(err);
            res.redirect('/');
        }
        else{
            console.log('Message envoyé: '+info.response);
            res.redirect('/');

        }


    })
});
module.exports = router;
