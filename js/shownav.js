let shownav = () => {
    let navdisplay = document.getElementById("nav").style.width;

    console.log(navdisplay);

    if(navdisplay == "60%"){
        document.getElementById("nav").style.padding = 0;
        document.getElementById("nav").style.width = 0;
        document.getElementById("nav").style.border ='none'; 
        document.getElementById("bl1").style.width = '100%';
        document.getElementById("bl2").style.transform = 'rotate(0deg)';
        document.getElementById("bl3").style.transform = 'rotate(0deg)';
        document.getElementById("bl3").style.width = '50%';
        document.getElementById("bl2").style.width = '70%';
       
    }
    else{
        document.getElementById("nav").style.padding = '14px';
        document.getElementById("nav").style.width = '60%';
        document.getElementById("nav").style.border ='2px solid var(--greylike)'; 
        document.getElementById("bl1").style.width = '0';
        document.getElementById("bl2").style.transform = 'rotate(-45deg)';
        document.getElementById("bl3").style.transform = 'rotate(45deg)';
        document.getElementById("bl3").style.width = '100%';
        document.getElementById("bl2").style.width = '100%';
    }
}