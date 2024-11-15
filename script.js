const form = document.getElementById('myform');
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const message = document.getElementById("message");
const ra1 = document.getElementById("ra1");
const ra2 = document.getElementById("ra2");
const checkbox = document.getElementById("checkbox");
const errerMessages = document.querySelectorAll('.errorMessage');


function validate(event){
    event.preventDefault(); 
    let isValid = true; 

    if(fname.value == ""){
        errerMessages[0].style.display =  "block";
        fname.style.borderColor = "var(--Red)"
        isValid = false;
    }else{
        errerMessages[0].style.display =  "";
        fname.style.borderColor = ""
    }
    if(lname.value == ""){
        errerMessages[1].style.display =  "block";
        lname.style.borderColor = "var(--Red)"
        isValid = false;
    }else{
        errerMessages[1].style.display =  "";
        lname.style.borderColor = ""
    }
    if(email.value == ""){
        errerMessages[2].style.display =  "block";
        email.style.borderColor = "var(--Red)"
        isValid = false;
    }else{
        errerMessages[2].style.display =  "";
        email.style.borderColor = ""
    }
    if(ra1.checked == false && ra2.checked == false){
        errerMessages[3].style.display =  "block";
        isValid = false;
    }
    else{
        errerMessages[3].style.display =  "";
    }
    if(message.value == ""){
        errerMessages[4].style.display =  "block";
        message.style.borderColor = "var(--Red)"
        isValid = false;
    }else{
        errerMessages[4].style.display =  "";
        message.style.borderColor = "";
    }
    if(checkbox.checked == false){
        errerMessages[5].style.display =  "block";
        isValid = false;
    }else{
        errerMessages[5].style.display =  "";
    }
    if(isValid){
        const popup = document.querySelector('.popUp');

        popup.style.display = "flex";
        popup.style.opacity = 1;
        setTimeout(()=>{
            popup.style.display = "";
            popup.style.opacity = 0;

            event.target.submit();
        },2000);
    }
    return false;
}


function delay(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, 2000);
    })
}