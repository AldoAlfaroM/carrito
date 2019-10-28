const CAR_PRODUCTOS = "cartProductsId";

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
});

function getProductDb() {
    const url = "../dbProducts.json";

    return fetch(url).then(response => {
        return response.json();        
    }).then(result => {
        return result;
    }).catch(err => {
        console.log(err);
    });
}

async function loadProducts(){
    console.log("funcion loadProducts ejecutada correctamente");
    const products = await getProductDb();

    let html = "";
    products.forEach(product => {
        // console.log(product);
        html += `        
            <div class="col-3 product-container">
                <div class="card product">
                    <img 
                        src="${product.image}"
                        class="card-img-top"
                        alt="${product.name}"
                    />
                    <div class="cart-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.extraInfo}</p>
                        <p class="card-text">${product.price} $ / unidad</p>
                        <button type="button" class="btn btn-primary btn-cart" onClick=(addProductCart(${product.idProduct}))>Añadir al carrito</button>
                    </div>
                </div>
            </div>
            `;
    });

    document.getElementsByClassName("products")[0].innerHTML = html;
    //console.log(html);
}

function openCloseCart(){
    const containerCart = document.getElementsByClassName("cart-products")[0];

    containerCart.classList.forEach(item => {
        if(item === "hidden") {
            containerCart.classList.remove("hidden");
            containerCart.classList.add("active");
        }
        if(item === "active") {
            containerCart.classList.remove("active");
            containerCart.classList.add("hidden");
        }
    });
}

function addProductCart(){
    console.log("añadiendo el producto con el ID" + idProduct);
}