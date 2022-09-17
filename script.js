console.log("Test1")

function showHome(){

    document.getElementById('home').style.display ='block';
    document.getElementById('sign-up-id').style.display ='none';
    document.getElementById('log-in-id').style.display ='none';

    document.getElementById('home-link').classList.add('active');
    document.getElementById('signuplink').classList.remove('active');
    document.getElementById('loginlink').classList.remove('active');

}


function showSignUp(){
    document.getElementById('home').style.display ='none';
    document.getElementById('sign-up-id').style.display ='block';
    document.getElementById('log-in-id').style.display ='none';

    document.getElementById('home-link').classList.remove('active');
    document.getElementById('signuplink').classList.add('active');
    document.getElementById('loginlink').classList.remove('active');

}

function showLogIn(){
    document.getElementById('home').style.display ='none';
    document.getElementById('sign-up-id').style.display ='none';
    document.getElementById('log-in-id').style.display ='block';


    document.getElementById('home-link').classList.remove('active');
    document.getElementById('signuplink').classList.remove('active');
    document.getElementById('loginlink').classList.add('active');
}


let firstNameCondition = false;
let lastNameCondition = false;
let userNameCondition  = false;
let cityNameCondition = false;
let stateNameCondition = false;
let zipCondition = false;
let tNc = false;

// ----------------------

function firstNameCheck(){
    let firstName = document.getElementById("firstNameId").value;
    console.log(firstName);

    if(firstName.length >= 2)
    {
        document.getElementById("valid-feedback-firstNameId").style.display = 'block';
        document.getElementById("invalid-feedback-firstNameId").style.display = 'none';
        firstNameCondition = true;
    }
    else
    {
        document.getElementById("valid-feedback-firstNameId").style.display = 'none';
        document.getElementById("invalid-feedback-firstNameId").style.display = 'block'; 
        firstNameCondition = false;
    }
}



function lastNameCheck(){
    let lastName = document.getElementById("lastNameId").value;
    console.log(lastName);

    if(lastName.length >= 2)
    {
        document.getElementById("valid-feedback-lastNameId").style.display = 'block';
        document.getElementById("invalid-feedback-lastNameId").style.display = 'none';
        lastNameCondition = true;
    }
    else
    {
        document.getElementById("valid-feedback-lastNameId").style.display = 'none';
        document.getElementById("invalid-feedback-lastNameId").style.display = 'block';
        lastNameCondition = false; 
    }
}


function emailCheck()
{
    let emailAddress = document.getElementById("emailId").value;
    console.log(emailAddress);

// if(user.length >=2 )
//     { 
//         // console.log('First Name is Valid');
//         document.getElementById('first-name-valid').style.display = 'block'
//         document.getElementById('first-name-invalid').style.display = 'none';
//         userNameCondition = true;
//     }
//     else
//     {
//     document.getElementById('first-name-invalid').style.display = 'block'
//     document.getElementById('first-name-valid').style.display = 'none';
//     userNameCondition = false;
//     }
// }


let firstChar  = emailAddress.charAt(0);
let atCondition = false;
let lastTwoCondition = false;

if((firstChar >= 'a' && firstChar <='z') || firstChar >= 'A' && firstChar <= 'Z')
    atCondition = true;

let indexOfDot = emailAddress.lastIndexOf('.');

let afterDotSubstring  = emailAddress.substr(indexOfDot);
if(afterDotSubstring.length>=3)
    lastTwoCondition= true;

    // console.log(indexOfDot);
    // console.log(afterDotSubstring);
    // console.log(lastTwoCondition)

if(emailAddress.includes('@') && emailAddress.includes('.') && atCondition && lastTwoCondition)
{
    document.getElementById('valid-feedback-emailId').style.display = 'block'
    document.getElementById('invalid-feedback-emailId').style.display = 'none'
    userNameCondition = true;
}
else
{
document.getElementById('invalid-feedback-emailId').style.display = 'block'
document.getElementById('valid-feedback-emailId').style.display = 'none';
userNameCondition = false;
}


}



let firstName;
let lastName;
let userName;
let phoneNumber;
let p1;
let p2;


let users_DB=[];


function checkPass1Pass2Match(){

    firstName = document.getElementById('firstNameId').value;
   console.log(firstName);

    lastName = document.getElementById('lastNameId').value;
   console.log(lastName);

    userName = document.getElementById('emailId').value;
   console.log(userName);

   phoneNumber = document.getElementById('pNo').value;
   console.log(phoneNumber);


   console.log('inside');
   p1 = document.getElementById('pass1').value;
   console.log(p1);

    p2 = document.getElementById('pass2').value;
   console.log(p2);

   if(p1==p2)
      alert("Password's match. SignUp Done")
   else
       alert('Passwords dont match');

console.log(firstNameCondition);
console.log(lastNameCondition)
console.log(userNameCondition)
console.log(p1==p2)

      if( firstNameCondition && lastNameCondition  && userNameCondition  && p1==p2)
      {

    let  userDetails = { 
        firstName,
        lastName,
        userName,
        phoneNumber,
        p1

    } 
    users_DB.push(userDetails);
    alert('User Details Saved');
    console.log(users_DB);
}
}

function loginCheck(){
    
    let lEmail = document.getElementById('lEMailId').value;
    let lp1 = document.getElementById('lp1Id').value;

    //check if lEmail exists
    //if yes, then check lp1 matches saved password

    if(users_DB.find(user => user.userName === lEmail && user.p1 ===lp1))
         alert('Log In Success');
     else
     alert('Log In Failed');




}