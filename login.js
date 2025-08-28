let form=document.querySelector('form');
let mail=document.getElementById('user');
let pass=document.getElementById('pass1');

let mailError=document.getElementById('userError');
let passError=document.getElementById('pass1Error');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    mailError.textContent="";
    passError.textContent="";

let isValid=true;

let mailValue1=mail.value.trim();
if(!mailValue1)
{
    mailError.textContent='can not be empty'
    isValid=false;
}
else if(!/^[a-zA-Z0-9._%+]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(mailValue1))
{
    mailError.textContent="enter valid email ID";
    isValid=false;
}

 let passValue1=pass.value.trim();
if(!passValue1)
{
    passError.textContent="can not be empty";
    isValid=false;
}
else if(!/(?=.*[A-Z])/.test(passValue1))
{
    passError.textContent="need uppercase";
    isValid=false;
}
else if(!/(?=.*[a-z])/.test(passValue1))
{
    passError.textContent="need lowercase";
    isValid=false;

}
else if(!/(?=.*[0-9])/.test(passValue1))
{
    passError.textContent="need numbers";
    isValid=false;

}
else if(!/(?=.*[@#$&])/.test(passValue1))
{
    passError.textContent="need one special characters"
    isValid=false;
}

let user=JSON.parse(localStorage.getItem('signupData'))
if(!user)
{
    alert('user not found!')
}
if(mailValue1===user.EmailID && passValue1===user.password)
{
    alert("login succesfull");
    window.location.href="homepage1.html"
}
else{
    alert("Invalid credentials");
}
})