function remove() {
  const element = document.getElementById("content");

  element.style.display ="none";
}

function restore() {
    const element = document.getElementById("content");

  element.style.display ="block";
    
  
}

const content = document.getElementById("heading");

content.style.color = "red";


const paragraph = document.getElementById("paragraph2");

paragraph.innerHTML = "Welcome to my site!";


function changetext() {
    const element = document.getElementById("content2");

    savecontent = element.innerHTML;

    const header = document.getElementById("c2-h1");

    header.innerHTML = "My Name is John";

    const paragraph1 = document.getElementById("c2-p1");

    paragraph1.innerHTML = "Welcome to my site!";

    const paragraph2 = document.getElementById("c2-p2");

    paragraph2.innerHTML = "Enjoy and have a nice time!";
    
}

function restoretext() {
    const content2= document.getElementById("content2");

    content2.innerHTML = savecontent;
    
}


