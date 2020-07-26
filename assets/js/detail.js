var dateControl = document.querySelector('input[type="date"]');
dateControl.addEventListener('click', handleClickLisetner);
function handleClickLisetner (e) {
    
    console.log(e);
    //console.log(e.target.value);
    //console.log(e.target);
   /* e.target.style.color="red";
    if(e.target.checked==false){
        
    }*/
    if(e.target.classList.value =="fa fa-times"){
        e.target.classList.remove("fa");
        e.target.classList.remove("fa-times");
    }
    else if(e.target.classList.value==""){
        e.target.classList.add("fa");
        e.target.classList.add("fa-check");
    }
    else if(e.target.classList.value =="fa fa-check"){
        e.target.classList.remove("fa-check");
        e.target.classList.add("fa-times");
    }
   
   /* e.target.classList.add("fa");
    e.target.classList.add("fa-check");
    e.target.classList.add("fa-times");*/
}