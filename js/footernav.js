let fnavelements = ["კურსის დეტალები", "შეფასებები", "რეგისტრაცია", "მასტერკლასი", "პროექტები", "კონტაქტი"];

let fnavlinks = ["webdev.html", "index.html#studentsrevievs", "register.html", "masteclass.html", "students.html", "contact.html"];

let fnel = fnavelements.length;

let fnavtext = '<ul>';
for(i=0; i<fnel; i++){
    fnavtext += '<li><a href="' + fnavlinks[i] + '">'+fnavelements[i]+'</li>'; 
};

fnavtext+="</ul>";

document.getElementById("footernav").innerHTML = fnavtext;