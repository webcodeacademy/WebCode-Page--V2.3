let navelements = ["კურსის დეტალები", "შეფასებები", "რეგისტრაცია", "მასტერკლასი", "პროექტები", "კონტაქტი"];

let navlinks = ["webdev.html", "index.html#studentsrevievs", "register.html", "masteclass.html", "students.html", "contact.html"];

let nel = navelements.length;

let navtext = '<ul class="flex">';
for(i=0; i<nel; i++){
    navtext += '<li><a href="' + navlinks[i] + '">'+navelements[i]+'</li>'; 
};

navtext+="</ul>";

document.getElementById("nav").innerHTML = navtext;