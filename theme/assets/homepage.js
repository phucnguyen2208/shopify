
// Add cart
async function addItemCart(id,quantity) {
    fetch('/cart/add.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:id,
            quantity:quantity
        })
    })
    .then(res => {
        return res.json();
    })
    //popup
    .then(data => popupAddCart(data))
    .then(async function(){
        //update cart
        document.getElementById("cartcount").innerHTML = (await updateCart()).item_count;
    })
    .catch((error) => {

    });
};

async function updateCart() {
    return fetch('/cart.js')
    .then( res => res.json() )
    .then( data => data );
}

// Popup Add to Cart

async function popupAddCart(data) {
    const popup = document.querySelector("#popup");
    console.log(data);

    const {
        image,
        product_title
    } = data;

    let productTitle = document.querySelector('[data-title-product]'),
        productImage = document.querySelector('[data-image-product]');

    productImage.src = image;
    productTitle.innerHTML = product_title;

}


async function updatePopup() {
    return fetch()
}



// Popup Open
function popupOpen() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
};
// Popup Close
function popupClose() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
};

let cont = document.querySelector(".continue");
cont.addEventListener('click',function(){
    popupClose();
});



// Nav menu
function navMenu() {
    let menu = document.querySelector('.btmenu');
    let nav = document.querySelector('.nav');
    menu.addEventListener('click', function() {
        this.classList.toggle('clicked');
        nav.classList.toggle('active')
    })
}
navMenu();

// back to top
var backTop = document.querySelector('#backToTop');
backTop.addEventListener('click', function () {
    window.scrollBy({
        top: -document.body.offsetHeight,
        behavior: 'smooth'
    });
});