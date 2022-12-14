// Element definition
const menuElement = document.querySelector(".menu-btn");
const sidebarElement = document.querySelector("#randevu-sidebar");
const containerSidebarElement = document.querySelector(".container-sidebar");
const menuCloseElement = document.querySelector(".menu-close");
const mainElement = document.querySelector("main");


 console.log(sidebarElement);


eventListeners();
function eventListeners(){
   menuCloseElement.addEventListener("click",menuElementClick)
   menuElement.addEventListener("click",menuElementClick); 
   menuElement.addEventListener("mouseover",menuElementHover);

}

console
function menuElementClick(e){
 //console.log(e);

 // Şuanda direkt kaldırıyor. Daha sonra ilgilen.
    if(sidebarElement.style.width == "0px"){
        sidebarElement.style.width = "200px";
        sidebarElement.parentElement.style.width="200px";
        sidebarElement.style.display = "block"
        mainElement.style.marginLeft = "210px"
        mainElement.style.marginRight = "10px"
    }else{
        sidebarElement.style.width = "0px";
        sidebarElement.style.display = "none";
        mainElement.style.marginLeft = "10px"
        mainElement.style.marginRight = "10px"
        
    }  
    
  e.preventDefault();
}    

function menuElementHover(e){

    // Değiştirilicek 
    if(sidebarElement.style.width == "0px"){
        sidebarElement.style.width = "200px";
        sidebarElement.parentElement.style.width="200px";
        sidebarElement.style.display = "block"
        mainElement.style.marginLeft = "210px"
        mainElement.style.marginRight = "10px"
    }else{
        sidebarElement.style.width = "0px";
        sidebarElement.style.display = "none";
        mainElement.style.marginLeft = "10px"
        mainElement.style.marginRight = "10px"
        
    } 


    e.preventDefault();
}

