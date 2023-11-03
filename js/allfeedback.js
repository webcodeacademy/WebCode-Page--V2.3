let showallfeedbacks = () =>{

    let a = document.getElementById("studentsthoughtshidden").style.display;
    console.log(a);

    if(a== "" || a=="none"){
        document.getElementById("studentsthoughtshidden").style.display = "block";
    }
    else{
        document.getElementById("studentsthoughtshidden").style.display="flex";
    }
    
}