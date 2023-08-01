const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");

//Modal function

const openModal=()=>{
    console.log("Modal is open");
    modal.classList.add("active");//The classList property returns the CSS classnames of an element.
    overlay.classList.add("overlayactive");
};

const closeModal=()=>{
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive")
};