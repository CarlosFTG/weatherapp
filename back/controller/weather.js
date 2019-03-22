var request = require('request');
var Weather = require('../models/weather');
var openWeatherData;

//request data to the API
function getWheather(req,res){
    var city=req.body.city;
    var weather=new Weather;
 
    request("http://api.apixu.com/v1/current.json?key=********************q="+city, function (error, response, body) {
    console.log('error:', error); 
    console.log('statusCode:', response && response.statusCode); 
    var params=req.body._id;
    var parseBody=JSON.parse(body);

    if(response.statusCode!=200){
        res.status(404).send("Wrong city or city doesn´t exist")

    }else{
        console.log("body: "+parseBody.current.precip_mm)
        weather.city=city;
        weather.temperature=parseBody.current.temp_c;
        weather.precipitations=parseBody.current.precip_mm;
        weather.humidity=parseBody.current.humidity;
        weather.clouds=parseBody.current.cloud;
        weather.windSpeed=parseBody.current.wind_kph;
        weather.date=parseBody.location.localtime;
        weather.userId=req.body.userId; 
        weather.save(function (err){
            if(err){
                res.status(500).send(err.message);
            }
            console.log(weather)
            res.status(200).send("Data registered")
        });   
    }
     
    });
}


//search the weather of a concret city and user and returns an array with the objects sorted by date
function getCityData(req,res){
    var city=req.body.city;
    var params=req.body.userId;
    console.log(params)
    Weather.find({"userId":params,"city":city}, function (err, data){

        if(err){
            console.log(err)
        }else{
            console.log(data)
            return res.status(200).send(data);
            
        }

    }).sort({date: 1});
}

function addCityToUserCitiesArray(userId,cityEntrance){
    User.findOne({'_id':userId},function(err,userFound){
        if(err){
            console.log(500).send(error);
        }else{
            console.log('user found ' +userFound._id)
            if(userFound){
                User.findById({'_id':userFound._id},{userFoundcities:1},function(err,cities){
                    if(err){
                        console.log(error);
                    }else if(!cities.cities){
                        User.updateOne({'_id':userFound._id},{$addToSet: {"cities":[cityEntrance]}},function(err,updated){
                        })
                    }
                })
            }
        }
       })
}




module.exports={getWheather,getCityData};
