// burger menu navbar

const burgerMenu = document.querySelector(".burger-menu")
const navLinks = document.querySelector(".nav-links")

burgerMenu.addEventListener('click',()=>{
navLinks.classList.toggle("mobile-menu")
})


// pages des projets 

document.addEventListener('DOMContentLoaded', function () {
fetch('data.json')
.then((response) => response.json())
.then((json) => {
    // let data = json;
    data = json;  
    keys = Object.keys(data)
    ProjetsKeys = keys.slice(-6);
    ProjetsKeys.reverse();
    console.log(keys, ProjetsKeys)
    console.log(data);
    let projectContainer = document.querySelector('#projects .projects-container');


    ProjetsKeys.forEach(function (key) {
        let projectElement = document.createElement('div');
        projectElement.classList.add('project-box');
        projectElement.id = key;
        console.log(key);
        console.log(projectElement);

        let projectImage = document.createElement('img');
        projectImage.src = data[key].image;
        projectImage.alt = data[key].title;
        projectImage.style.maxWidth = "100%";
        projectImage.style.width = "100%";
        projectImage.style.height = "100%";
        projectImage.style.objectFit = "cover";

        projectElement.appendChild(projectImage);

        projectElement.addEventListener('click', function () {
            console.log(key);
            window.location.href = "projet.html?id=" + key;
        });

        projectContainer.appendChild(projectElement);
        console.log(projectContainer);
    });
        projectElement.innerHTML += "<p class='img-text'>" + data[key].title + "</p><br>";
        
        projectElement.addEventListener('click', function () {
            console.log(key);
            window.location.href = "projet.html?id=" + key;
        });

        projectContainer.appendChild(projectElement);
        console.log(projectContainer)
    });
});

