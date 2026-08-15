function toggleMenu(){document.getElementById("navLinks").classList.toggle("open")}
document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("#year").forEach(e=>e.textContent=new Date().getFullYear())});
function demoSubmit(e){e.preventDefault();const m=e.target.querySelector("small");if(m)m.textContent="Thank you! This front-end demo is ready.";e.target.reset()}
const products=[
 {name:"Classic Sneakers",cat:"fashion",price:2499,icon:"👟"},
 {name:"Smart Watch",cat:"tech",price:3999,icon:"⌚"},
 {name:"Wireless Headphones",cat:"tech",price:2999,icon:"🎧"},
 {name:"Backpack",cat:"lifestyle",price:1499,icon:"🎒"},
 {name:"T-Shirt",cat:"fashion",price:799,icon:"👕"},
 {name:"Desk Lamp",cat:"lifestyle",price:999,icon:"💡"},
 {name:"Laptop Stand",cat:"tech",price:1299,icon:"💻"},
 {name:"Sunglasses",cat:"fashion",price:1199,icon:"🕶️"}
];
let cart=0;
function renderProducts(filter="all"){
 const box=document.getElementById("products"); if(!box)return;
 box.innerHTML=products.filter(p=>filter==="all"||p.cat===filter).map((p,i)=>`
 <article class="product">
   <div class="product-visual">${p.icon}</div>
   <div class="product-body"><small>${p.cat.toUpperCase()}</small><h3>${p.name}</h3>
   <div class="price">₹${p.price.toLocaleString("en-IN")}</div>
   <button class="add" onclick="addToCart()">Add to Cart</button></div>
 </article>`).join("");
}
function filterProducts(cat){renderProducts(cat);document.getElementById("shop")?.scrollIntoView({behavior:"smooth"})}
function addToCart(){cart++;const c=document.getElementById("cartCount");if(c)c.textContent=cart}
renderProducts();
