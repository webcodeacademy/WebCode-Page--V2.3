let showtheme = (a) => {
    
    let height = document.getElementById(a).style.height;
    console.log(height);

    if(height == "" || height == '0px'){
        document.getElementById(a).style.height = '300px';

    }
    else{
        document.getElementById(a).style.height = '0px';
    }
}