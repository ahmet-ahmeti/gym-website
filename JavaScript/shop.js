// SIDEBAR
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const toggle = document.getElementById("toggle-button");
const shopSidebar = document.getElementById("shop-sidebar");
const shopToggle = document.getElementById("shop-button-toggle");



toggle.addEventListener("click", () => {
    if (!(shopSidebar.classList.contains("open"))) { // if the shop sidebar doesnt have the class .open do the toggle
        sidebar.classList.toggle("open"); 
        overlay.classList.toggle("active");
    }
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    shopSidebar.classList.remove("open");
    overlay.classList.remove("active");

});

// SHOP SIDEBAR

shopToggle.addEventListener("click", () => {
    if (!(sidebar.classList.contains("open"))) { // if the regular sidebar doesnt have the class .open do the toggle
        shopSidebar.classList.toggle("open");
        overlay.classList.toggle("active");
    }
});

const cartContainer = document.getElementById("shop-cart-container");
const proteinVanillaButton = document.getElementById("protein-vanilla-button");
const proteinChocolateButton = document.getElementById("protein-chocolate-button");
const proteinRaspberryButton = document.getElementById("protein-raspberry-button");
const massGainerButton = document.getElementById("mass-gainer-button");
const creatineButton = document.getElementById("creatine-button");
const preWorkoutButton = document.getElementById("pre-workout-button");
const omega3Button = document.getElementById("omega3-button");
const bcaaButton = document.getElementById("bcaa-button");
const purchaseButton = document.getElementById("purchase-button");
let cart = [];
const popUp = document.getElementById("cart-full");
const purchaseSuccsesfulPopUp = document.getElementById("purchase-succsesful");

const proteinVanilla = {
    "name" : "Pro Whey Vanilje",
    "price" : "34.99 €",
    "img" : "images/shop-images/ProWheyVanilla.png"
};

const proteinChocolate = {
    "name" : "Pro Whey Çokollatë",
    "price" : "34.99 €",
    "img" : "images/shop-images/ProWheyChocolate.png"
};

const proteinRaspberry = {
    "name" : "Pro Whey Mjedër",
    "price" : "36.99 €",
    "img" : "images/shop-images/ProWheyRaspberry.png"
};

const massGainer = {
    "name" : "Mass Gainer",
    "price" : "44.99 €",
    "img" : "images/shop-images/MassGainer.png"
};

const creatine = {
    "name" : "Kreatinë",
    "price" : "24.99 €",
    "img" : "images/shop-images/Creatine.png"
};

const preWorkout = {
    "name" : "Pre Workout",
    "price" : "29.99 €",
    "img" : "images/shop-images/PreWorkout.png"
};

const omega3 = {
    "name" : "Omega 3",
    "price" : "18.99 €",
    "img" : "images/shop-images/Omega3.png"
};

const bcaa = {
    "name" : "BCAA Kompleks",
    "price" : "27.99 €",
    "img" : "images/shop-images/BCAA.png"
};

function renderCart() {
    cartContainer.innerHTML = ""; // Function to loop through the array and for each elemnt in the array adds the html seen below

    cart.forEach((item, i) => {
        cartContainer.innerHTML += `
            <div class="shop-cart-item">
                <div class="shop-cart-img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="shop-cart-bottom">
                    <div class="shop-cart-text">
                        <p class="shop-cart-price">${item.price}</p>
                        <p class="shop-cart-name">${item.name}</p>
                    </div>
                    <div class="remove-button">
                        <button onclick="removeFromCart(${i})">x</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function removeFromCart(i) { // function to remove element from array and calls renderCart again
    cart.splice(i, 1);
    renderCart();
}

proteinVanillaButton.addEventListener("click", () => { // Adds obj to array and calls renderCart also checks if there is space for item
    if (cart.length < 4) {
        cart.push(proteinVanilla);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

proteinChocolateButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(proteinChocolate);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);        
    }
});

proteinRaspberryButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(proteinRaspberry);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

massGainerButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(massGainer);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

creatineButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(creatine);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

preWorkoutButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(preWorkout);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

omega3Button.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(omega3);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

bcaaButton.addEventListener("click", () => {
    if (cart.length < 4) {
        cart.push(bcaa);
        renderCart();
    }
    else {
        popUp.classList.add("slide");
        setTimeout(() => {
            popUp.classList.remove("slide");
        }, 3000);
    }
});

purchaseButton.addEventListener("click", () => {
    if (cart.length > 0) {
        purchaseSuccsesfulPopUp.classList.add("slide");
        setTimeout(() => {
            purchaseSuccsesfulPopUp.classList.remove("slide");
        }, 3000);
        cart = [];
        renderCart();
    }
});