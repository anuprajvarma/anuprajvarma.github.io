
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let project = document.querySelector(".project");
let blog = document.querySelector(".blog");
let blog_section = document.querySelector(".blog-section");
let closeIcon = document.querySelector(".close-icon");
let menuIcon = document.querySelector(".menu-icon");

home.style.display="block";
about.style.display="none";
project.style.display="none";
blog.style.display="none";
blog_section.style.display="none";

document.querySelector(".home-menu").addEventListener("click",function(){
        home.style.display="block";
        about.style.display="none";
        project.style.display="none";
        blog.style.display="none";
        blog_section.style.display="none";
})
document.querySelector(".about-menu").addEventListener("click",function(){
        home.style.display="none";
        about.style.display="block";
        project.style.display="none";
        blog.style.display="none";
        blog_section.style.display="none"; 
})
document.querySelector(".project-menu").addEventListener("click",function(){
        home.style.display="none";
        about.style.display="none";
        project.style.display="block";
        blog.style.display="none";
        blog_section.style.display="none"; 
})
document.querySelector(".blog-menu").addEventListener("click",function(){
        home.style.display="none";
        about.style.display="none";
        project.style.display="none";
        blog.style.display="block";
        blog_section.style.display="none"; 
})
function menu(){
         document.querySelector("#mynav").style.width="100%";
}