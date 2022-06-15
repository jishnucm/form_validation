var counter = 0
function validation() {


    var a = localStorage.getItem("email")
    var b = localStorage.getItem("password")
    console.log(a)
    console.log(b)


    s = 1;
    var email_form = /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/;
    check = 1;
    login_email = document.getElementById("user_email").value;
    user_pass = document.getElementById("user_password").value;
    if (login_email == "") {
        document.getElementById("email_span1").innerHTML = "enter email";
        document.getElementById("email_span1").style.color = "red";
        document.getElementById("user_email").style.border = "5px solid red";
        s = 0;
    }
    else {
        document.getElementById("email_span1").innerHTML = "";
        document.getElementById("user_email").style.border = "5px solid green";
        s = 1;

        if (login_email.match(email_form)) {
            document.getElementById("email_span1").innerHTML = "";
            document.getElementById("user_email").style.border = "5px solid green";
            s = 1;


        }
        else {
            document.getElementById("email_span1").innerHTML = "enter valid email";
            document.getElementById("email_span1").style.color = "red";
            document.getElementById("user_email").style.border = "5px solid red";
            s = 0;

        }
    }

    if (user_pass == "") {
        document.getElementById("login_pass").innerHTML = "enter a password";
        document.getElementById("login_pass").style.color = "red";
        document.getElementById("user_password").style.border = "5px solid red";
        s = 0;

    }
    else {

        document.getElementById("login_pass").innerHTML = "";
        document.getElementById("user_password").style.border = "5px solid green";
        e = 1;


    }



    // if (login_email == a) {

    //     if (user_pass == b) {
    //        s = 1
    //     }

    //     else {

            
    //         console.log('not ')
    //         alert("invalid username or password");
    //         document.getElementById("user_password").style.border = "5px solid red";
    //         document.getElementById("user_email").style.border = "5px solid red";
    //         s = 0
    //         counter ++
    //         console.log(counter)
            
    //     }

    // }

    // if(counter==3){
    //     alert("maximum attempt exceeded")

    //     document.getElementById("mybtn").disabled=true
    // }









    if (s == 0) {
        return false;
    }


}