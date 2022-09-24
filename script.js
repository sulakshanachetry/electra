 const navbar= document.querySelector('.nav-bar');

 window.onscroll= ()=>{
    if(window.scrollY>200){
       navbar.style.backgroundColor='#0f1030';
    }else{
        navbar.style.backgroundColor='transparent';
    }
 }


 let answers=document.querySelectorAll(".box-item");
 answers.forEach((event)=>{
    event.addEventListener('click',()=>{
       if(event.classList.contains("active")){
          event.classList.remove("active");
       }
       else{
          event.classList.add("active");
       }
    })
 })
