
    var element = document.querySelector(".bars");
    element.onclick = () => {
      var nav = document.querySelector(".navbar");
      if (nav.style.display === "none"){
        nav.style.display="flex";
        nav.style.flexDirection = "column";
      }
      else{
        nav.style.display = "none";
      }
    };

// open preview
var previewContainer = document.querySelector('.product-preview');
var previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = "flex";
        var name=product.getAttribute('data-name');
        previewBox.forEach(preview => {
            var target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

//close preview
previewBox.forEach(close => {
    var closePopUp =close.querySelector('.fa-times');
    closePopUp.onclick =()=>{
        previewContainer.style.display='none';
        close.classList.remove('active');
    };
});

//cart open and close 
const cartBtn = document.getElementById("cart-icon");
let isCartOpen = false;
cartBtn.onclick = () =>{
    var cartSection = document.querySelector('.cart-container');
    if (!isCartOpen){
        cartSection.style.display = "flex";
        isCartOpen = true;
    }
};

const closeBtn = document.getElementById("close-cart");
closeBtn.onclick = () => {
    var cartSection = document.querySelector('.cart-container');
    isCartOpen = false;
    cartSection.style.display = 'none';
};

let total = 0;

var addToCart = document.querySelectorAll('.cart');
addToCart.forEach(product => {
    product.onclick = () => {
        var productBox = product.parentElement.parentElement;
        var price = productBox.querySelector('.price');
        var cartSection = document.querySelector('.cart-container');
        cartSection.style.display= "flex";
        isCartOpen = true;
        var newPrice = price.innerHTML.substring(0, price.innerHTML.indexOf('e'));
        total += Number(newPrice);
        cartSection.querySelector('#total').innerHTML = total;
        
        var newProduct = createProductPage(productBox);
        document.querySelector('#cart').appendChild(newProduct);
    };

});





//create new div element for products added to cart
function createProductPage(product) {
    let productPage = document.createElement('div');
    productPage.id = 'product-page';
    let dataName = product.getAttribute('data-target');
    productPage.setAttribute('data-name',dataName);
    // Add product name
    let productName = document.createElement('h2');
    productName.textContent = product.querySelector('h3').innerHTML;
    productPage.appendChild(productName);

    // Add product image
    let productImage = document.createElement('img');
    productImage.src = product.querySelector('img').src;
    productPage.appendChild(productImage);
   
   
    // Add product price
    let productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.querySelector('.price').innerHTML}`;
    productPage.appendChild(productPrice);

    //Add product  quantity
    let productQuantity = document.createElement('div');
    let quantityText = document.createElement('p');
    quantityText.textContent = 'Quantity :  ';
    productQuantity.appendChild(quantityText);

    let quantityUp = document.createElement('a');
    quantityUp.setAttribute('class','quantity-up');
    quantityUp.href = '#' ;   
    quantityUp.textContent = ' + ';
    productQuantity.appendChild(quantityUp);

    let quantityContex = document.createElement('p');
    quantityContex.id='quantity';
    quantityContex.textContent = '1';
    productQuantity.appendChild(quantityContex);

    let quantityDown = document.createElement('a');
    quantityDown.setAttribute('class','quantityDown');
    quantityDown.href = '#';
    quantityDown.textContent = ' - ';
    productQuantity.appendChild(quantityDown);

    productPage.appendChild(productQuantity);

   
    return productPage;
   }

// add quantinty or remove item with icons + and - 

var plus_pl = document.querySelectorAll(".quantity-up");
plus_pl[0].onclick = () => {alert("Hello up !");};

