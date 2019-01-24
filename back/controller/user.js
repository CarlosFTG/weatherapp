'use strict'


var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('../services/jwt');
const nodemailer = require('nodemailer');



function createUser(req, res){

    var dataEntryControl=require('../auxiliar/auxiliar');
    var user = new User();
    user.name = req.body.name;
    user.surname = req.body.surname;
    user.userName=req.body.userName;
    user.email = req.body.email;
    user.password=req.body.password;
    user.rol="user";
    user.suscriptionDate=new Date();
   /*  if(!dataEntryControl(user.name,user.surname,user.userName,user.email)){
        res.status(500).send("incompleted data or wrong data, check your inputs"); */
        
    //}else{
        User.findOne({email: user.email}, function(err,obj) {
            if(err){
                res.status(500).send(error);
            }else if(obj){
                res.status(400).send("User already exists");
            }else{
                console.log('user doesn´t exist')
                bcrypt.hash(req.body.password, null, null, function(err, hash){
                    user.password = hash;
                    user.save(function (err, user){
                            if(err){
                                console.log(err)
                                res.status(500).send(err.message);
                            }
                            console.log(user)
                            res.status(200).send(user)
                        });
                });
            }
        } );
            

    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    nodemailer.createTestAccount((err, account) => {
        //create reusable transporter object using the default SMTP transport
         let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465 ,
            secure: true,
            auth: {
                user: 'carlosTejedaJSDeveloper@gmail.com',
                pass: 'xxxxxxx'
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Carlos Fernández-Tejeda" <carlosTejedaJSDeveloper@gmail.com>', // sender address
            to: user.email, // list of receivers
            subject: 'Welcome to weather app',// Subject line
            text: 'Hi '+user.name+' welcome to weather app', // plain text body
            html: 'Hi <b>'+user.name+'</b> welcome to weather app.'+
            '</br>You are now registered in weather app, this is you data acces: </br>'+
            </br>You are now registered in weather app whith this email: </br>'+ user.email
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });  
    }

    

//}

function removeUser(req,res){
    let id=req.body._id;
     User.findByIdAndRemove({_id:id},function(err,user){
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(user);
        }
    }) 
}


function login(req, res){
    var params = req.body;
    var email = params.email;
    var password = params.password;
    
    User.findOne({email: email.toLowerCase()}, (err, user)=>{
        if (err) {
            res.status(500).send({message: "Error in the petition"});
        } else{
            //checks if the user exists in the DB
            if (!user) {
                res.status(404).send({message: "non-existent user"});
                
            } else {
                //bcrypt dependency checks if the password in the front-end matches the one in the BD.
                bcrypt.compare(password, user.password, (err, check)=>{
                    if (check) {
                        //data decodification to return the token
                        if (params.gethash) {
							console.log('login ok')
                            res.status(200).send({
                                token: jwt.createToken(user)
								
                            }); 
                        } else {
                            res.status(200).send({user});
                            
                       } 
                    } else {
                        
                        res.status(404).send({message: "No se ha podido loggear."});
                    }
                });
            }
        }
    })
}



module.exports = {createUser,login,removeUser}
