
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
    .then(async function(){

        document.getElementById("cartcount").innerHTML = (await updateCart()).item_count;
    })
    .catch((error) => {

    });
};


async function updateCart() {
    return fetch('/cart.js')
    .then(response =>
        response.json()
    )
    .then( data => data );
}





// Nav menu

function navMenu() {
    let menu = document.querySelector('.btmenu');
    let nav = document.getElementsByClassName('nav');
    console.log(menu);
    menu.addEventListener('click', function() {
        this.classList.toggle('clicked');
    })
}

navMenu()
