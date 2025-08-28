let form=document.querySelector('form');
let firstName=document.getElementById('fName');
let lastName=document.getElementById('lName');
let password=document.getElementById('pass');
let cPassword=document.getElementById('cPass');
let mailID=document.getElementById('mail');
let number=document.getElementById('num');

let fError=document.getElementById('firstError');
console.log(fError);

let lError=document.getElementById('lastError');
let passError=document.getElementById('passError');
let cPassError=document.getElementById('cPassError');
let numError=document.getElementById('numError');
let mailError=document.getElementById('mailError')

form.addEventListener('submit',(e)=>{
 e.preventDefault();
 
 fError.textContent="";
 lError.textContent="";
 passError.textContent="";
 cPassError.textContent="";
 numError.textContent="";
 mailError.textContent="";

 let isValid=true;

 let usernameValue=firstName.value.trim();
 if(!usernameValue)
 {
    fError.textContent="firstname can not be empty";
    isValid=false;
    
 }
 else if(usernameValue.length<3)
 {
    fError.textContent="can not be less than 3 characters"
    isValid=false;
 }
 else if(usernameValue.length>15)
 {
    fError.textContent="can not exceed more than 15"
    isValid=false;
 }
 else if(!/(?=.*[A-Z])(?=.*[a-z])/.test(usernameValue))
 {
    fError.textContent="must be uppercasr,lowercase"
    isValid=false;
 }

let usernameValue1=lastName.value.trim();
if(!usernameValue1)
{
    lError.textContent="lastname can not be empty";
    isValid=false;
}
else if(usernameValue1.length<3){
    lError.textContent="can not be less than 2 characters";
}
else if(usernameValue1.length>10){
    lError.textContent="can bot excced more than 10";
}

 let passValue=password.value.trim();
if(!passValue)
{
    passError.textContent="can not be empty";
    isValid=false;
}
else if(passValue.length<3)
{
    passError.textContent='passwaord should not be less than 3';
    isValid=false;
}
else if(passValue.length>10)
{
    passError.textContent='password should not exceed 15 characters'
    isValid=false;
}
else if(!/(?=.*[A-Z])/.test(passValue))
{
    passError.textContent="need uppercase";
    isValid=false;
}
else if(!/(?=.*[a-z])/.test(passValue))
{
    passError.textContent="need lowercase";
    isValid=false;

}
else if(!/(?=.*[0-9])/.test(passValue))
{
    passError.textContent="need numbers";
    isValid=false;

}
else if(!/(?=.*[@#$&])/.test(passValue))
{
    passError.textContent="need one special characters"
    isValid=false;

}

let confirmValue=cPassword.value.trim();
if(!confirmValue)
{
    cPassError.textContent='can not be empty'
    isValid=false;
}
else if(passValue!==confirmValue)
{
    cPassError.textContent='password should match'
    isValid=false;
}
let numValue=number.value.trim();
if(!numValue)
{
    numError.textContent='can not be empty'
}
else if(!/(^\d{10}$)/.test(numValue))
{
    numError.textContent='enter valid number'
    isValid=false;
}
let mailValue=mailID.value.trim();
if(!mailValue)
{
    mailError.textContent='can not be empty'
    isValid=false;
}
else if(!/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(mailValue))
{
    mailError.textContent="enter valid email ID";
    isValid=false;
}
if (isValid) 
{
    let userData={
        firstName:usernameValue,
        lastName:usernameValue1,
        password:passValue,
        confirmPassword:confirmValue,
        number:numValue,
        EmailID:mailValue
    }
    localStorage.setItem('signupData',JSON.stringify(userData));
    alert('signup successfull👍');
    window.location.href='login.html'
}
})