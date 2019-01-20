module.exports=function dataEntryControl(res,name, surname, userName, email, password){

    const emailRegex = require('email-regex');
    
    var passDataControl=false;

    var variablesPassed=0;

    var onlyLetters= new RegExp("^[a-zA-Z]+$");

    var lettersAndHyphen= new RegExp("[a-zA-Z\-]+");

    var passwordRegex= new RegExp("/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/");
 
    if(name && (name.length>0 && name.length<10)&&name.match(onlyLetters)){
        variablesPassed++;
    }
    if(surname && (surname.length>0 && surname.length<20)&& surname.match(lettersAndHyphen)){
        variablesPassed++;
    }
    if(userName && !userName=="" && (userName.length<25)){
        variablesPassed++;
    }
    //to check if the email has a valid format, I use the dependency email-regex
    if(emailRegex().test(email)){
        variablesPassed++;
    }

    if(password  && password.match(passwordRegex)){
        variablesPassed++;
    }

    //TODO have to be changed to 5 once can pass regex
    if(variablesPassed==4){
        passDataControl=true;
    }
    return passDataControl;
}