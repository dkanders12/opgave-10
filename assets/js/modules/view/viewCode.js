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

let productInfoElement = "productInfo";
let shoppingListElement = document.getElementById("shoppingList"); // Hent shoppinglisten i HTML
let toggleShoppingListButton = document.getElementById("toggleShoppingList"); // Hent knappen i HTML

let clickedProducts = [];

// Funktion til at vise eller skjule shoppinglisten
function toggleShoppingList() {
  if (
    shoppingListElement.style.display === "none" ||
    shoppingListElement.style.display === ""
  ) {
    shoppingListElement.style.display = "block"; // Vis shoppinglisten
    toggleShoppingListButton.textContent = "Hide Shopping List"; // Opdater knaptekst
  } else {
    shoppingListElement.style.display = "none"; // Skjul shoppinglisten
    toggleShoppingListButton.textContent = "Show Shopping List"; // Opdater knaptekst
  }
}

// Tilknyt klikhåndtereren til knappen
toggleShoppingListButton.addEventListener("click", toggleShoppingList);

// Funktion til at vise produkter og tilføje dem til shoppinglisten
export function displayProductInfo(products) {
  let productInfo = document.getElementById(productInfoElement);
  productInfo.innerHTML = ""; // Clear previous content

  products.forEach((product) => {
    let productItem = document.createElement("div");
    productItem.style.border = "1px solid black";
    productItem.style.padding = "20px";
    productItem.textContent = `Product: ${product.title}, Price: ${product.price}`;
    productInfo.appendChild(productItem);

    let productImage = document.createElement("img");
    productImage.src = product.thumbnail;
    productImage.alt = "Product Image";
    productImage.style.width = "220px";

    // Append the image element to the productItem
    productItem.appendChild(productImage);

    productItem.addEventListener("click", () => {
      // Log the product information to the console
      console.log(product.title);

      // Tilføj det klikkede produkt til arrayet
      clickedProducts.push(product);
      console.log(clickedProducts);

      // Opret et nyt listeitem for hvert produkt og tilføj det til shoppinglisten
      let shoppingItem = document.createElement("li");
      shoppingItem.textContent = `Product: ${product.title}, Price: ${product.price}`;
      shoppingListElement.appendChild(shoppingItem);
    });
  });
}
