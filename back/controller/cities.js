var Weather = require('../models/weather');

function getCity(req,res){
    var params=req.body._id;
    Weather.find({"userId":params}, function (err, data){
        var dataArr=[];
        var data=data;
        var citiesArr=[];

        if(err){
            console.log(err)
        }else{
            for(let i=0;i<data.length;i++){
                dataArr.push(data[i].city);
            };
            dataArr.sort();
    
    
                //as the finder returns all the data on the weather data, it returns repeated cities
                //this method helps to returns unique cities on the array
                 citiesArr = dataArr.filter(function(elem, index, self) {
                    return index == self.indexOf(elem);
                });
               
                console.log(citiesArr)
                return res.status(200).send(citiesArr); 
        }

                

})}
function showCity(req,res){
    var city=req.body.selectedCity;
    var params=req.body._id;
    Weather.find({"userId":params,"city":city}, function (err, data){

        if(err){
            console.log(err)
        }else{
            console.log(data)
            return res.status(200).send(data);
            
        }

    });
}

module.exports={getCity,showCity};