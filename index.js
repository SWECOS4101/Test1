import { products } from './mock/data/products.js';

const productListContainer = document.getElementById('product-list-container');

if (productListContainer) {
    products.forEach(product => {
        const productHTML = `
            <div style="border: 1px solid #ccc; padding: 16px; margin: 8px;" class="product-cart">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
            </div>
        `;
        productListContainer.innerHTML += productHTML;
    });
}