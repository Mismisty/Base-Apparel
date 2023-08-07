let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let form = id("form"),
    email = id("email"),
    errorMsg = classes("error-msg"),
    iconError = classes("icon-error");

    //errorMsg[0].innerHTML = "iiiookdidii";

    //ADD EVENTLISTENERS

    form.addEventListener("submit", (e)=>{
        e.preventDefault();

        if(email.value.trim() === ""){
            errorMsg[0].innerHTML = "Please provide a valid email";
            iconError[0].style.opacity = "1";
            email.style.border = "2px solid hsl(0, 93%, 68%)";
        }else{
            errorMsg[0].innerHTML = "";
            iconError[0].style.opacity = "0";
            email.style.border = "";
        }
    });