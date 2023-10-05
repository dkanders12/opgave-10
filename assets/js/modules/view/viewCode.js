/*  product data structure reference
brand: "Huawei"
category: "smartphones"
description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK."
discountPercentage:10.58
id: 5
images: ['https://i.dummyjson.com/data/products/5/1.jpg', 'https://i.dummyjson.com/data/products/5/2.jpg', 'https://i.dummyjson.com/data/products/5/3.jpg']
price: 499
rating: 4.09
stock: 32
thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg"
title: "Huawei P30" 
*/
let categoriesDisplayElement = "categoriesNav";
let productDisplayElement = "productDisplay";
let productInfoElement = "productInfo";

let categoriesNav = document.getElementById(categoriesDisplayElement);

export function displayProductInfo(products) {
  let productInfo = document.getElementById(productInfoElement);
  productInfo.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    let productItem = document.createElement("div");
    productItem.textContent = `Product: ${product.title}, image s Price: ${product.price}`;
    productInfo.appendChild(productItem);
    let productImage = document.createElement("img");
    productImage.src = product.thumbnail;
    productImage.alt = "Product Image";

    // Append the image element to the productItem
    productItem.appendChild(productImage);
  });
}
