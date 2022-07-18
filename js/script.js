// PICTURES GALLERY

let imgCount = 0;
const picturesList = getPicturesLarge();
manageGalleryHandlers();

function getThumbsElements() {
    return document.querySelectorAll("#thumbs img[data-img-large]");
}

function getPicturesLarge() {
    const list = [];
    getThumbsElements().forEach(img => {
        list.push(img.dataset.imgLarge);
    })
    return list;
}

function manageGalleryHandlers() {
    document.getElementById("picture-prev").addEventListener("click", function(event) {
        imgCount--;
        if (imgCount < 0) {
            imgCount = picturesList.length-1;
        }
        displayPicture(picturesList[imgCount]);
    });

    document.getElementById("picture-next").addEventListener("click", function(event) {
        imgCount++;
        if (imgCount > picturesList.length-1) {
            imgCount = 0;
        }
        displayPicture(picturesList[imgCount]);
    });

    getThumbsElements().forEach(thumb => {
        thumb.addEventListener("mouseover", function(event) {
            const src = event.target.dataset.imgLarge;
            displayPicture(src);
            imgCount = picturesList.indexOf(src);
        })
    });
}

function displayPicture(imgSrc) {
    document.getElementById("picture-main").src = imgSrc;
}
