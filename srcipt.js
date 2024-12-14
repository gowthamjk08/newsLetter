let mail = document.getElementById('email');
let form = document.getElementById('form');
let em = document.getElementById('errorMessage')
form.addEventListener('submit',checkMail);
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkMail(e){

    if(!mailCheck()){
        e.preventDefault();   
    }
}
function mailCheck(){
   let result=true;
    if(mail.value ==''){
        em.style="display:block"
        mail.style = "border:2px solid var(--Tomato);background-color:hsla(4, 100%, 67%, 0.2);color:var(--Tomato)";  
        result= false;
      }
      
      else if(regex.test(mail.value)){
          em.style="display:none"
          mail.style = "border:2px solid green;background-color:hsla(240, 100%, 67%, 0.2);color:green";  
      }
      
      else{
          em.style="display:block"
          mail.style = "border:2px solid var(--Tomato);background-color:hsla(4, 100%, 67%, 0.2);color:var(--Tomato)"; 
          result= false; 
      }
      return result;
}