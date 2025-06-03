document.addEventListener('DOMContentLoaded',()=>{

    const products = [
      { id: 1, name: "Product1", price: 29.99 },
      { id: 2, name: "Product2", price: 19.99 },
      { id: 3, name: "Product3", price: 59.99 },
    ];

    const cart= JSON.parse(localStorage.getItem("Item"))|| [];

    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotalMessage = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");
     
    //renderCart(cart);

    products.forEach(product=>{
        let productDiv=document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
        <span>${product.name} - $${product.price.toFixed(2)}</span>
        <button data-id="${product.id}"> Add to Cart</button>`;

        productList.appendChild(productDiv);
    })

    renderCart(cart);

    productList.addEventListener('click',(event)=>{
        //if(event.target.matches('button'))
        //OR
        if(event.target.tagName ==="BUTTON"){
          const productId = parseInt(event.target.getAttribute("data-id"));
          const prod = products.find((p) => p.id === productId);
          addToCart(prod);
        }
            
    })

    function saveToLocalStorage(){
        localStorage.setItem("Item",JSON.stringify(cart));
    }

    function addToCart(prod){
        cart.push(prod);
        saveToLocalStorage();
        renderCart(cart);
    }

    function renderCart(cart){
    cartItems.innerText = "";
    if(cart.length>0){
      emptyCartMessage.classList.add("hidden");
      cartTotalMessage.classList.remove("hidden");

      let totalPrice = 0;

      cart.forEach((prod,index) => {
        totalPrice += prod.price;

        const itemDiv = document.createElement("div");
        itemDiv.classList.add("product");
        itemDiv.innerHTML = `
        <span>${prod.name} - $${prod.price.toFixed(2)}</span>
        <button data-index="${index}" style="background-color: red">Remove</button>`;
        cartItems.appendChild(itemDiv); 
        });
      
      totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`;
    }
    else{
        emptyCartMessage.classList.remove("hidden");
        totalPriceDisplay.textContent=`$0.00`;
    }
}

    cartItems.addEventListener("click", (event) => {
      if(event.target.tagName==="BUTTON"){
        const ind=parseInt(event.target.getAttribute("data-index"));
        let Ncart=[];
        for (let i = 0; i < cart.length; i++) {
          if (i !== ind) Ncart.push(cart[i]);
        }
        cart.length=0;
        cart.push(...Ncart);
        saveToLocalStorage();
        renderCart(cart);
      }
    });

    checkOutBtn.addEventListener("click", () => {
        cart.length = 0;
        saveToLocalStorage();
        alert("Checkout Successful");
        renderCart(cart);
    });

})