const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive"); // Si esta cerrado el carrito de compras

    if (!isAsideClose) {
        aside.classList.add("inactive"); // Cerrar el carrito de compras
    }

    desktopMenu.classList.toggle("inactive"); // Para activar la clase inactive del desktop-menu
}
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains("inactive"); // Si esta cerrado el carrito de compras

    if (!isAsideClose) {
        aside.classList.add("inactive"); // Cerrar el carrito de compras
    }

    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive"); // Si esta cerrado el menu mobile
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); // Si esta cerrado el menu desktop
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive"); // Cerrar el mobile menu
    }
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add("inactive"); // Cerrar el desktop menu
    }

    aside.classList.toggle("inactive");
}

const producList = []; // Lista de productos
producList.push({
    name: "Camisa manga corta",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/camisa1.png?raw=true"
});
producList.push({
    name: "Camisa básica",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/camisa2.png?raw=true"
});
producList.push({
    name: "Camisa básica",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/camisa3.png?raw=true"
});
producList.push({
    name: "Camisa manga corta",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/camisa4.png?raw=true"
});
producList.push({
    name: "Chamarra bomber",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/chamarra1.png?raw=true"
});
producList.push({
    name: "Chamarra bomber",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/chamarra2.png?raw=true"
});
producList.push({
    name: "Chamarra tipo aviador",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/chamarra3.png?raw=true"
});
producList.push({
    name: "Chamarra aviador antelina",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/chamarra4.png?raw=true"
});
producList.push({
    name: "Playera manga corta",
    price: 239.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/playera1.png?raw=true"
});
producList.push({
    name: "Playera manga corta",
    price: 239.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/playera2.png?raw=true"
});
producList.push({
    name: "Playera manga corta",
    price: 239.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/playera3.png?raw=true"
});
producList.push({
    name: "Playera manga corta",
    price: 239.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/playera4.png?raw=true"
});
producList.push({
    name: "Sudadera Coca-Cola",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/sudadera1.png?raw=true"
});
producList.push({
    name: "Sudadera cuello redondo",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/sudadera2.png?raw=true"
});
producList.push({
    name: "Sudadera AC/DC",
    price: 499.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/sudadera3.png?raw=true"
});
producList.push({
    name: "Sudadera cuello redondo",
    price: 299.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/sudadera4.png?raw=true"
});
producList.push({
    name: "Tenis casual básicos",
    price: 399.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/tenis1.png?raw=true"
});
producList.push({
    name: "Tenis casual básicos",
    price: 399.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/tenis2.png?raw=true"
});
producList.push({
    name: "Tenis casual básicos",
    price: 399.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/tenis3.png?raw=true"
});
producList.push({
    name: "Tenis casual básicos",
    price: 399.00,
    image: "https://github.com/euss99/Tienda-online/blob/main/imagenes/productos/tenis4.png?raw=true"
});

/* <div class="product-card">
    <img src="./imagenes/productos/camisa1.png" alt="" class="product">
    <div class="product-info">
        <div>
            <p>$299.00</p>
            <p>Camisa manga corta</p> 
        </div>
        <figure>
        <img src="./imagenes/icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */

// Generando los productos en JS 
function renderProducts(array) {
    // Generando cada prodcuto de nuestro HTML pero en JS.
    for (product of array) {
        // product = {name, price, image} -> product.name, product.price, product.image
    
        // Generando las etiquetas, del HTML en JS
        const productCard = document.createElement("div");
        productCard.classList.add("product-card") // Agregandole una clase.
    
        const imgProduct = document.createElement("img"); // Imagen
        imgProduct.setAttribute("src", product.image); // Agregandole un "src" y su imagen.
    
        const productInfo = document.createElement("div"); 
        productInfo.classList.add("product-info");
        
        const productInfoDiv = document.createElement("div");
        const productPrice = document.createElement("p"); // Precio
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p"); // Nombre
        productName.innerText = product.name;
        
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./imagenes/icons/bt_add_to_cart.svg");
    
        // Maquetando nuestro HTML desde JS, generando que el div con la clase "product-card" tendta como hijo la imagen con clase "product" y el div con clase "product-info".
    
        cardsContainer.appendChild(productCard);
        
        productCard.appendChild(imgProduct);
        productCard.appendChild(productInfo);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        productInfoFigure.appendChild(productImgCart);
    }
}
// Llamando la función con el array donde tenemos la información de los productos "productList".
renderProducts(producList);