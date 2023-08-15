// Create an empty array to represent the cart
let cart = [];

// Function to handle adding items to the cart
function addToCart(productId, productName, productPrice, productImage) {
    cart.push({
        id: productId,
        name: productName,
        price: productPrice,
        image: productImage,
    });
    updateCartUI();
}

// Function to update the cart section in the UI
function updateCartUI() {
    const cartSection = document.querySelector("#cart-section");
    cartSection.innerHTML = ""; // Clear the existing cart items

    let total = 0;
    for (const item of cart) {
    total += item.price;
    //Adds items to cart section
    cartSection.innerHTML += `
        <div class="row align-items-center">
            <div class="col-md-2 d-flex justify-content-center">
                <div>
                <img src="${item.image}" alt="Product Image" style="width: 100px; height: 100px;">
            </div>
        </div>
        <div class="col-md-2 d-flex justify-content-center">
            <div>
                <p class="small text-muted p-2">Name</p>
                <p class="lead fw-normal">${item.name}</p>
            </div>
        </div>
        <div class="col-md-2 d-flex justify-content-center">
            <div>
                <p class="small text-muted p-2">Price</p>
                <p class="lead fw-normal">$${item.price}</p>
            </div>
        </div>
        </div>
    `;
    }
    // Update the total price
    const totalSection = document.querySelector("#cart-total");
    totalSection.textContent = `$${total}`;
}
    
// Attach click event listeners to the "Add to cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productId = button.getAttribute("data-product-id");
        const productName = button.parentNode.querySelector(".card-title").textContent;
        const productPrice = parseFloat(button.parentNode.querySelector(".card-subtitle").textContent.replace("$", ""));
        const productImage = button.getAttribute("data-product-image"); // Get the product image URL
        addToCart(productId, productName, productPrice, productImage);
    });
});