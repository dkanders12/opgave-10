import {
  getProductCategories,
  getProductsByCategory,
} from "./modules/model/dummyjasonLib.js";

import { displayProductInfo } from "./modules/view/viewCode.js";

// Added a reference to the product info element

initApp();

function initApp() {
  // Get the product categories
  getProductCategories().then((categories) => {
    console.log(categories);

    // Get the categoriesNav element

    // Create a button for each category and append it to the categoriesNav
    categories.forEach((category) => {
      let button = document.createElement("button");
      button.textContent = category;
      button.addEventListener("click", () => {
        // Handle button click
        console.log(`Button clicked for category: ${category}`);
        getProductsByCategory(category).then((products) => {
          console.log(products);
          displayProductInfo(products); // Call a function to display product info
        });
      });

      categoriesNav.appendChild(button);
    });
  });
}

// callBack functions remember hoisting to window eks: window._viewCallBacks = { categoriesCallBack,productCardCallback};
