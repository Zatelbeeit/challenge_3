var topnav = document.getElementsByTagName("ul")[0];
var menubtn = document.getElementsByTagName("i")[0];

menubtn.addEventListener("click",function(){

    console.log(topnav.style.display); 
    if (topnav.style.display !="block"){
        topnav.style.display = "block";
    }
    else {
        topnav.style.display = "none";
    }
    
});