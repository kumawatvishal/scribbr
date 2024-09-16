const bgWhiteNav = document.querySelector(".bg-white-nav");
const nav = document.querySelector(".header");

document.addEventListener(
    "scroll",
    function(event){
        console.clear();
        console.log(event);
        if(window.scrollY > 60){
            bgWhiteNav.style.opacity = 1;
            nav.style.paddingTop = "14px";
            nav.style.paddingBottom = "14px";
            nav.classList.add("floating-nav");
        }
        else{
            bgWhiteNav.style.opacity = "";
            nav.style.position = "";
            nav.classList.remove("floating-nav");
        }
    }
)