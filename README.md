# E-Commerce Shopping Cart

A simple client-side e-commerce shopping cart built using HTML, CSS, and JavaScript. This project allows users to view a list of products, add items to a cart, remove them, and simulate checkout. Cart data is stored using **Local Storage** to ensure persistence across page reloads.

---

## Features

- View list of products with prices  
- Add products to cart  
- Remove items from cart  
- Checkout (clears cart and shows a confirmation)  
- Persistent cart using `localStorage`  
- Dynamic cart total display  

---

## Technologies Used

- **HTML**
- **CSS**
- **Vanilla JavaScript**
- **Local Storage**

---

## How to Use

1. **Clone the repository:**

2. **Open in browser:**
Simply open index.html in your web browser.

3. **Start shopping:**
Click on "Add to Cart" to add items.
View items in the cart section.
Click "Remove" to delete an item.
Click "Checkout" to clear the cart.

## Sample Product List
You can find this list in script.js. Customize as needed:

const products = [
  { id: 1, name: "Product1", price: 29.99 },
  { id: 2, name: "Product2", price: 19.99 },
  { id: 3, name: "Product3", price: 59.99 },
];

