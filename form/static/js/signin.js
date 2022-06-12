function validate(){
    e=1
    fname1=0
    var b= /^[a-zA-Z]+$/;
    var email_form= /^([a-zA-z0-9\._]+)@([a-zA-z0-9])+.([a-z]+)(.[a-z]+)?$/
    
     console.log("hai")
        fname=document.getElementById("fname").value
        lname=document.getElementById("lname").value
        user_email=document.getElementById("email").value
        phone=document.getElementById("phone").value
        pass1=document.getElementById("password1").value
        pass2=document.getElementById("password2").value
        
    
        if(fname==""){
            document.getElementById("fname_span").innerHTML="enter first name"
            document.getElementById("fname_span").style.color="red"
            document.getElementById("fname").style.border="5px solid red"
           
            // return false
            e=0
        
            
        }
        
      
        else if(fname.length<3){
            document.getElementById("fname_span").innerHTML="enter atleast 3 character"
            document.getElementById("fname_span").style.color="red"
            document.getElementById("fname").style.border="5px solid red"
            e=0

        }
      
     
        else{
            document.getElementById("fname").style.border="5px solid green"
            document.getElementById("fname_span").innerHTML=""
            e=1

              if(fname.match(b)){
                document.getElementById("fname").style.border="5px solid green"
                document.getElementById("fname_span").innerHTML=""
                e=1
            }
           else{
    
                document.getElementById("fname_span").innerHTML="special character does not allowed"
                document.getElementById("fname_span").style.color="red"
                document.getElementById("fname").style.border="5px solid red"
                e=0
    
            }

        }

      

       

        if(lname.match(b)){
            document.getElementById("lname").style.border="5px solid green"
            document.getElementById("lname_span").innerHTML=""
            e=1
           
        }
        else if(lname==""){

            document.getElementById("lname_span").innerHTML=""
            e=1
        }
        else{
            document.getElementById("lname_span").innerHTML="special character does not allowed"
            document.getElementById("lname_span").style.color="red"
            document.getElementById("lname").style.border="5px solid red"
            e=0
        }
      
        if(user_email==""){
            document.getElementById("email_span").innerHTML="enter email"
            document.getElementById("email_span").style.color="red"
            document.getElementById("email").style.border="5px solid red"
            e=0
        }
        else{
            document.getElementById("email_span").innerHTML=""
            document.getElementById("email").style.border="5px solid green"
            e=1

            if(user_email.match(email_form)){
                document.getElementById("email_span").innerHTML=""
                document.getElementById("email").style.border="5px solid green"
                e=1

                localStorage.setItem("email",user_email)
              
              
               
            
            }
            else{
                document.getElementById("email_span").innerHTML="enter valid email"
                document.getElementById("email_span").style.color="red"
                document.getElementById("email").style.border="5px solid red"
                e=0
               
            }
        }
        
      
         if(phone==""){
            document.getElementById("ph_span").innerHTML="enter phone number"
            document.getElementById("ph_span").style.color="red"
            document.getElementById("phone").style.border="5px solid red"
            e=0

        }
    
        else if(phone.length!=10){
            document.getElementById("ph_span").innerHTML="phone number must be 10 character"
            document.getElementById("ph_span").style.color="red"
            document.getElementById("phone").style.border="5px solid red"
            e=0


        }
      
        else{
            document.getElementById("ph_span").innerHTML=""
            document.getElementById("phone").style.border="5px solid green"
            e=1


        }
    

        if(pass1==""){
            document.getElementById("passwordsp1").innerHTML="enter a password"
            document.getElementById("passwordsp1").style.color="red"
            document.getElementById("password1").style.border="5px solid red"
            e=0

        }
       
       else if(pass1.length<8){
            document.getElementById("passwordsp1").innerHTML="atleast 8 character"
            document.getElementById("passwordsp1").style.color="red"
            document.getElementById("password1").style.border="5px solid red"
            e=0

        }
        else{
            document.getElementById("passwordsp1").innerHTML=""
            document.getElementById("password1").style.border="5px solid green"
            e=1
            if(pass1.match(/[!\@\#\$\%\&\*\(\)\_\+\=\?\<\>\.\,]/)){
                document.getElementById("passwordsp1").innerHTML=""
                document.getElementById("password1").style.border="5px solid green"
                e=1
            }
            else{
                document.getElementById("passwordsp1").innerHTML="use one special character"
                document.getElementById("passwordsp1").style.color="red"
                document.getElementById("password1").style.border="5px solid red"
                e=0
    
    
            }
        }

        
       if(pass2==""){
        document.getElementById("passwordsp2").innerHTML="enter a password"
        document.getElementById("passwordsp2").style.color="red"
        document.getElementById("password2").style.border="5px solid red"
        e=0

       }
       else{
        document.getElementById("passwordsp2").innerHTML=""
        // document.getElementById("password2").style.border="5px solid green"
        e=1
       

            if(pass1==pass2){
                document.getElementById("passwordsp2").innerHTML=""
                document.getElementById("password2").style.border="5px solid green"
                document.getElementById("password1").style.border="5px solid green"
                e=1
              localStorage.setItem("password",pass1)
                
           
               
            
        
            }
            else{
        
                document.getElementById("passwordsp2").innerHTML="password are not equal"
                document.getElementById("password2").style.border="5px solid red"
                e=0
            }
      
    }

       
  
      


  
        if(e==0){
            return false
        }

        console.log(user_name)
    }
