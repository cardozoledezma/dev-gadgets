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


// ADD TO CART


manageAddToCart();

function manageAddToCart() {
    document.getElementById("add-cta").addEventListener("click", addQuantityToCart);
    document.getElementById("add-qty").addEventListener("keypress", function(event) {
        if (isNaN(parseInt(event.key))) {
            event.preventDefault();
        }
    });
}

function addQuantityToCart() {
    let qty = getQuantity();
    if (qty > 99) qty = "99+";
    updateCartQuantity(qty);
    disableCta(this);
}

function updateCartQuantity(quantity) {
    document.getElementById("cart-nb").innerText = quantity;
}

function getQuantity() {
    const qty = parseInt(document.getElementById("add-qty").value);
    return isNaN(qty) || qty < 1 ? 1 : qty;
}

function disableCta(button) {
    button.classList.add("added");
    button.removeEventListener("click", addQuantityToCart);
    button.innerText = "Déjà au panier";
}