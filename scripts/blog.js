// Footer Input line Function 
var inputElement = document.getElementById("myInput");

inputElement.addEventListener("mouseenter", function() {
  this.style.borderBottom = "1px solid black";
});

inputElement.addEventListener("mouseleave", function() {
  this.style.borderBottom = "none";
});

// Blog images card function 1
const allImages = document.querySelector(".allImages")
function generateProduct(product){
    const imagess = document.createElement("div");
    imagess.innerHTML = `<div class="imagess">
    <img src="./image/images/${product.image}" />
    <span> <span class="title">${product.title}</span></span>
    <span class="alt-text">
    <span> <span class="info">${product.info}</span></span>
    <span><span class="date">${product.date}</span></span>
    </span>
</div>`;
   return imagess;  
}
for (const product of products) {
    const generatedPost = generateProduct(product);
    allImages.appendChild(generatedPost);
  }
// Blog images card function 2
  const allImages2 = document.querySelector(".allImages2")
  function generateProduct(product){
    const images1 = document.createElement("div");
    images1.innerHTML = `<div class="images1">
    <img src="./image/images/${product.image}" />
    <span> <span class="title">${product.title}</span></span>
    <span class="alt-text">
    <span> <span class="info">${product.info}</span></span>
    <span><span class="date">${product.date}</span></span>
    </span>
</div>`;
   return images1;  
}
for (const product of product1) {
    const generatedPost = generateProduct(product);
    allImages2.appendChild(generatedPost);
  }

// Blog images card function 3
  const allImages3 = document.querySelector(".allImages3")
  function generateProduct(product){
    const images2 = document.createElement("div");
    images2.innerHTML = `<div class="images2">
    <img src="./image/images/${product.image}" />
    <span> <span class="title">${product.title}</span></span>
    <span class="alt-text">
    <span> <span class="info">${product.info}</span></span>
    <span><span class="date">${product.date}</span></span>
    </span>
</div>`;
   return images2;  
}
for (const product of product2) {
    const generatedPost = generateProduct(product);
    allImages3.appendChild(generatedPost);
  }

// DropDown Language 

const mediaIcons = document.querySelector(".socialmediaIcons").querySelectorAll("i")
const options = document.querySelector("#dropdownLanguage")
const optionUsd = document.querySelector("#valueLanguage")
const language = document.querySelector(".languageDropdown")
const value = document.querySelector(".valueDropdown")
const engOption = document.querySelector("#enOptions")
const usdOption = document.querySelector("#usdOptions")

//Menu Options
const homeBtn = document.querySelector('#homeBtn');
const homeDropdown = document.querySelector('.home-dropdown');
const homeIcon = document.querySelector('#homeIcon');
const shopBtn = document.querySelector('#shopBtn');
const shopDropdown = document.querySelector('.shop-dropdown');
const shopIcon = document.querySelector('#shopIcon');
const iconsBtn = document.querySelector('#iconsBtn');
const iconsDropdown = document.querySelector('.icons-dropdown');
const iconsIcon = document.querySelector('#iconsIcon');
const pagesBtn = document.querySelector('#pagesBtn');
const pagesDropdown = document.querySelector('.pages-dropdown');
const pagesIcon = document.querySelector('#pagesIcon');
const docsBtn = document.querySelector('#docsBtn');
const docsDropdown = document.querySelector('.docs-dropdown');
const docsIcon = document.querySelector('#docsIcon');
const searchArea = document.querySelector('#searchbutton');

//Dropdown Language Active Function
mediaIcons.forEach(function(btn) {
  btn.addEventListener('click', function() {
  activeMenu(btn, "activeIcon");
  });
});

searchArea.addEventListener('click', function() {
  activeMenu(searchArea, "lineBlack");
});

options.addEventListener('click', function() {
  makeactiveDrop(engOption,options , language);
});

optionUsd.addEventListener('click', function() {
  makeactiveDrop(usdOption, optionUsd, value);
});




// Menu Options Active Function
homeBtn.addEventListener('click', () => {
    toggleDropdown(homeBtn, homeDropdown, homeIcon)
})

shopBtn.addEventListener('click', () => {
    toggleDropdown(shopBtn, shopDropdown, shopIcon)
})

iconsBtn.addEventListener('click', () => {
    toggleDropdown(iconsBtn, iconsDropdown, iconsIcon)
})

pagesBtn.addEventListener('click', () => {
    toggleDropdown(pagesBtn, pagesDropdown, pagesIcon)
})
docsBtn.addEventListener('click', () => {
    toggleDropdown(docsBtn, docsDropdown, docsIcon)
})


function toggleDropdown(btn,dropdown ,icon) {
    dropdown.classList.toggle('showmenus');
    icon.classList.toggle('Rotate')
    document.addEventListener('click', function (event) {
        if (!btn.contains(event.target)) {
            dropdown.classList.remove('showmenus');
            dropdown.style.cursor = "default"
            icon.classList.remove('Rotate')
        }
    })
}

function activeMenu(Element, active) {
    if (Element.classList.contains(active)) {
        Element.classList.remove(active);
    } else {
        Element.classList.add(active);
    }
    document.addEventListener('click', (event) => {
        if (!Element.contains(event.target)) {
            Element.classList.remove(active)
        }
    })
}

function makeactiveDrop(Element, container, showmenus) {
    if (Element.classList.contains("Rotate")) {
        Element.classList.remove("Rotate");
        showmenus.classList.remove("DropAnimate");

    } else {
        Element.classList.add("Rotate");
        showmenus.style.visibility = "visible";
        showmenus.classList.add("DropAnimate");
        showmenus.style.pointerEvents = "";
    }
    document.addEventListener('click', (event) => {
        if (!container.contains(event.target)) {
            Element.classList.remove("Rotate")
            showmenus.style.pointerEvents = "none";
            showmenus.classList.remove("DropAnimate");
        }
    })
}

// simpleParallax
var image = document.querySelector('.mainPiece').querySelector('.thumbnail');
new simpleParallax(image, {
	scale: 1.5,
    delay:1.1,
    overflow:true,
    transition:'cubic-bezier(0,0,0,1)'
});


const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productsDOM = document.querySelector('.products-center');

let cart = [];
let buttonsDOM = [];

class Products {
  async getProducts() {
    try {
      const response = await fetch('./assets/json/products.json');
      const data = await response.json();
      const products = data.items.map(item => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

class UI {
  displayProducts(products) {
    let result = '';
    products.forEach(product => {
      result += `
        <article class="product">
          <div class="img-container">
            <img src=${product.image} alt="" class="product-img">
            <button class="bag-btn" data-id=${product.id}>
              <i class="fas fa-shopping-cart"></i>
              add to cart
            </button>

          </div>
          <h3>${product.title}</h3>
          <h5>$${product.price}</h5>
        </article>
      `;
    });
    productsDOM.innerHTML = result;
  }

  getBagButtons() {
    const buttons = [...document.querySelectorAll('.bag-btn')];
    buttonsDOM = buttons;
    buttons.forEach(button => {
      const id = button.dataset.id;
      const inCart = cart.find(item => item.id === id);
      
      if (inCart) {
        button.innerText = 'In Cart';
        button.disabled = true;
      } else {
        button.addEventListener('click', event => {
          event.target.innerText = 'In Cart';
          event.target.disabled = true;
          const cartItem = { ...Storage.getProduct(id), amount: 1 };
          cart = [...cart, cartItem];
          Storage.saveCart(cart);
          this.setCartValues(cart);
          this.addCartItem(cartItem);
          this.showCart();
        });
        
      }
    });
  }

  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;
    cart.forEach(item => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const div = document.createElement('div');
    div.classList.add('cart-item');
    div.innerHTML = `
      <img src=${item.image} alt="">
      <div>
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id=${item.id}>X</span>
      </div>
      <div>
        <i class="fas fa-chevron-up" data-id=${item.id}></i>
        <p class="item-amount">${item.amount}</p>
        <i class="fas fa-chevron-down" data-id=${item.id}></i>
      </div>
    `;
    cartContent.appendChild(div);
  }

  showCart() {
    cartOverlay.classList.add('transparentBcg');
    cartDOM.classList.add('showCart');
  }
  
  hideCart() {
    cartOverlay.classList.remove('transparentBcg');
    cartDOM.classList.remove('showCart');
  }

  setupApp() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    cartBtn.addEventListener('click', this.showCart);
    closeCartBtn.addEventListener('click', this.hideCart);
  }

  populateCart(cart) {
    cart.forEach(item => this.addCartItem(item));
  }

  cartLogic() {
    clearCartBtn.addEventListener('click', () => {
      this.clearCart();
    });

    cartContent.addEventListener('click', event => {
      if (event.target.classList.contains('remove-item')) {
        const removeItem = event.target;
        const id = removeItem.dataset.id;
        this.removeItem(id);
        cartContent.removeChild(removeItem.parentElement.parentElement);
      } else if (event.target.classList.contains('fa-chevron-up')) {
        const increaseAmount = event.target;
        const id = increaseAmount.dataset.id;
        const tempItem = cart.find(item => item.id === id);
        tempItem.amount++;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        increaseAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains('fa-chevron-down')) {
        const decreaseAmount = event.target;
        const id = decreaseAmount.dataset.id;
        const tempItem = cart.find(item => item.id === id);
        tempItem.amount--;
        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          decreaseAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          this.removeItem(id);
          cartContent.removeChild(decreaseAmount.parentElement.parentElement);
        }
      }
    });
  }

  clearCart() {
    const cartItems = cart.map(item => item.id);
    cartItems.forEach(id => this.removeItem(id));
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }

  removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);
    const button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }

  getSingleButton(id) {
    return buttonsDOM.find(button => button.dataset.id === id);
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem('products', JSON.stringify(products));
  }

  static getProduct(id) {
    const products = JSON.parse(localStorage.getItem('products'));
    return products.find(product => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  static getCart() {
    return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const products = new Products();
  const ui = new UI();

  ui.setupApp();

  products
    .getProducts()
    .then(products => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});

