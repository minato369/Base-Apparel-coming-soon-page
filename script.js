console.log("hello");
let email = document.getElementById("email");
let btn = document.getElementById("btn");
let validEmail = false;
email.addEventListener("blur", ()=>{
    let errormsg = document.getElementById("error");
    let errorsvg = document.getElementById("error-svg");
    let str = email.value;
    let regex = /^([_0-9a-zA-z]+)@([a-zA-z]+)\.([a-zA-z])/;
    console.log(regex, str);
    if(!str.match(regex)){
        errormsg.style.visibility = "visible";
        errorsvg.style.visibility = "visible";
        console.log("Email is Not valid")
        validEmail = false;
    }
    else{
        errormsg.style.visibility = "hidden";
        errorsvg.style.visibility = "hidden";
        validEmail = true;
        console.log("Email is valid")
    }
})

btn.addEventListener("click", (e)=>{
    if(validEmail === false){
        e.preventDefault();
    }
    else{
        alert("Successfully Submitted");
    }
})