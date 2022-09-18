 const navbar= document.querySelector('.nav-bar');

 window.onscroll= ()=>{
    if(window.scrollY>200){
       navbar.style.backgroundColor='#0f1030';
    }else{
        navbar.style.backgroundColor='transparent';
    }
 }
