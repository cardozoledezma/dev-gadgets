// PICTURE GALLERY

const mainPicture = document.getElementById("picture-main");
const buttonPrev = document.getElementById("picture-prev");
const buttonNext = document.getElementById("picture-next");

function getPicturesLarge() {
    const list = [];
    document.querySelectorAll("#thumbs img[data-img-large]").forEach(img => {
        list.push(img.dataset.imgLarge);
    })
    return list;
}

const picturesList = getPicturesLarge();

console.log(picturesList);