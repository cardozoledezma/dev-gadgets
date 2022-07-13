//carrousel
const listImg = document.querySelectorAll(".similar-itm");
const numbImg = listImg.length;
const next = document.querySelector(".right");
const prev = document.querySelector(".left");
let count = 0;


function carrouselNext() {
    listImg[count].classList.remove("active");
    if (count < numbImg - 1) {
        count++;
    }
    else {

        count = 0;

    }
    
    listImg[count].classList.add("active");

}



next.addEventListener('click', carrouselNext);

function carrouselPrev() {
    
    listImg[count].classList.remove("active");
    if (count > 0) {
        count--;
    }
    else {

        count = numbImg - 1;

    }

    listImg[count].classList.add("active");

}


prev.addEventListener('click', carrouselPrev);
