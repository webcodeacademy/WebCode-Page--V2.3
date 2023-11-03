let burgerbutton = () => {
    let headerheight = document.getElementById("header").style.height;
    console.log(headerheight);
    if (headerheight == "460px"){
       document.getElementById("header").style.height = '80px'; 
    }
    else{
        document.getElementById("header").style.height = '460px';
    }
    
}