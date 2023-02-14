// Const
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const myOrder = document.querySelector('#shoppingCardD');
const cardContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector('#productDetail');
const btnCloseDetail = document.querySelector('.product-detail-close')

// Events Listener
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleShoppingCart);
btnCloseDetail.addEventListener('click', closeProductImgDetail)


// Functions
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    myOrder.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    myOrder.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
function toggleShoppingCart(){
    myOrder.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
    // Toogles


    // open and close detail
function openProductImgDetail(){
    productDetailContainer.classList.remove('inactive');
    myOrder.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function closeProductImgDetail(){
    productDetailContainer.classList.add('inactive');
}

// Products list
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'TV',
    price: 400,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop',
    price: 700,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProduct(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductImgDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
         
        const productInfoFigure = document.createElement('figure');
        
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCard);
        
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardContainer.appendChild(productCard);
    }
}
renderProduct(productList);