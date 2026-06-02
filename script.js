 var MenuItems = document.getElementById("MenuItems");

    MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight == "0px") {
        MenuItems.style.maxHeight = "300px";
    }
    else {
        MenuItems.style.maxHeight = "0px";
    }
}

/* =========================
   CHATBOT VARIABLES
========================= */

let chatBox;
let chatMessages;
let typing;
let userInput;

/* =========================
   LOAD AFTER PAGE READY
========================= */
window.addEventListener("DOMContentLoaded", () => {

    chatBox =
    document.getElementById("chatBox");

    chatMessages =
    document.getElementById("chatMessages");

    typing =
    document.getElementById("typing");

    userInput =
    document.getElementById("userInput");

    /* ENTER KEY SUPPORT */

    if(userInput){

        userInput.addEventListener(
            "keypress",
            function(e){

                if(e.key === "Enter"){

                    sendMessage();
                }
            }
        );
    }

    /* LOAD SAVED CHAT */

    loadChat();

});

/* =========================
   TOGGLE CHAT
========================= */

function toggleChat(){

    if(!chatBox) return;

    if(chatBox.style.display === "flex"){

        chatBox.style.display = "none";

    }else{

        chatBox.style.display = "flex";

        scrollBottom();
    }
}

/* =========================
   ADD MESSAGE
========================= */

function addMessage(message, sender){

    if(!chatMessages) return;

    const msg =
    document.createElement("div");

    msg.classList.add(
        sender === "bot"
        ? "bot-message"
        : "user-message"
    );

    msg.innerHTML = message;

    chatMessages.appendChild(msg);

    scrollBottom();

    saveChat();
}

/* =========================
   SCROLL TO BOTTOM
========================= */

function scrollBottom(){

    if(chatMessages){

        chatMessages.scrollTop =
        chatMessages.scrollHeight;
    }
}

/* =========================
   BOT REPLIES
========================= */

function botReply(text){

    if(!typing) return;

    typing.style.display = "block";

    setTimeout(() => {

        typing.style.display = "none";

        let reply = "";

        text = text.toLowerCase();

        /* GREETING */

        if(
            text.includes("hello") ||
            text.includes("hi")
        ){

            reply =
            "👋 Hello there! Welcome to our store.";

        }

        /* PRODUCTS */

        else if(
            text.includes("product") ||
            text.includes("shop")
        ){

            reply =
            "🛍️ We offer electronics, fashion, gaming accessories, shoes, phones, and more.";
        }

        /* TRACK ORDER */

        else if(
            text.includes("track") ||
            text.includes("order")
        ){

            reply =
            "📦 Please enter your Order ID to track your package.";
        }

        /* DELIVERY */

        else if(
            text.includes("delivery") ||
            text.includes("shipping")
        ){

            reply =
            "🚚 Delivery usually takes 2-5 business days.";
        }

        /* PAYMENT */

        else if(
            text.includes("payment") ||
            text.includes("pay")
        ){

            reply =
            "💳 We accept Visa, Mastercard, PayPal, Opay, and bank transfer.";
        }

        /* DISCOUNT */

        else if(
            text.includes("discount") ||
            text.includes("promo")
        ){

            reply =
            "🔥 Use code <b>SHOP10</b> to get 10% OFF.";
        }

        /* CONTACT */

        else if(
            text.includes("contact") ||
            text.includes("email")
        ){

            reply =
            "📧 Contact us at: yusufbarau05@gmail.com";
        }

        /* THANK YOU */

        else if(
            text.includes("thanks") ||
            text.includes("thank you")
        ){

            reply =
            "😊 You're welcome. Happy shopping!";
        }

        /* RETURN POLICY */

        else if(
            text.includes("return")
        ){

            reply =
            "🔄 Products can be returned within 7 days after delivery.";
        }

        /* OPENING HOURS */

        else if(
            text.includes("open") ||
            text.includes("hours")
        ){

            reply =
            "🕒 We are available 24/7 online.";
        }

        /* DEFAULT */

        else{

            reply =
            "🤖 I understand. Our support team will assist you shortly.";
        }

        addMessage(reply,"bot");

    },1200);
}

/* =========================
   SEND MESSAGE
========================= */

function sendMessage(){

    if(!userInput) return;

    const text =
    userInput.value.trim();

    if(text === "") return;

    addMessage(text,"user");

    botReply(text);

    userInput.value = "";
}

/* =========================
   QUICK REPLY
========================= */

function quickReply(text){

    addMessage(text,"user");

    botReply(text);
}

/* =========================
   CLEAR CHAT
========================= */

function clearChat(){

    if(!chatMessages) return;

    chatMessages.innerHTML = `

        <div class="bot-message">

            👋 Chat cleared successfully.

        </div>

    `;

    localStorage.removeItem("chatHistory");
}

/* =========================
   SAVE CHAT
========================= */

function saveChat(){

    if(!chatMessages) return;

    localStorage.setItem(
        "chatHistory",
        chatMessages.innerHTML
    );
}

/* =========================
   LOAD CHAT
========================= */

function loadChat(){

    if(!chatMessages) return;

    const saved =
    localStorage.getItem("chatHistory");

    if(saved){

        chatMessages.innerHTML = saved;
    }
}

/* =========================
   AUTO OPEN CHAT
========================= */

setTimeout(() => {

    if(chatBox){

        chatBox.style.display = "flex";
    }

},3000);

/* =========================
   ONLINE STATUS EFFECT
========================= */

setInterval(() => {

    const status =
    document.getElementById("status");

    if(status){

        status.innerHTML =
        "🟢 Online";
    }

}, 1000);



var LoginForm = document.getElementById('LoginForm');
    var RegForm = document.getElementById('RegForm');
    var Indicator = document.getElementById('Indicator');



function Register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function Login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

// --------------------menu toggle------------------
//     var MenuItems = document.getElementById("MenuItems");

// MenuItems.style.maxHeight = "0px";
// MenuItems.style.display = "block";

//     function menutoggle(){
//         if(MenuItems.style.maxHeight == "0px"){
//             MenuItems.style.maxHeight = "300px";
            
//         }
//         else{
//             MenuItems.style.maxHeight = "0px";
//         }
//     }
   
// ---------------------product gallery------------------
    var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");
    
    SmallImg[0].onclick = function(){
        ProductImg.src = SmallImg[0].src;
}
    SmallImg[1].onclick = function(){
        ProductImg.src = SmallImg[1].src;
}   
    SmallImg[2].onclick = function(){
        ProductImg.src = SmallImg[2].src;
}
    SmallImg[3].onclick = function(){
        ProductImg.src = SmallImg[3].src;
}

// ----------------------cart-------------------
var CartIcon = document.getElementById("CartIcon");
var Cart = document.getElementById("Cart");
var CloseCart = document.getElementById("CloseCart");

CartIcon.onclick = function(){
    Cart.classList.add("active");
}
CloseCart.onclick = function(){
    Cart.classList.remove("active");
}

// ----------------------------add to cart-------------------

if (document.readyState == "loading")
{
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

function ready(){
    var RemoveCartButtons = document.getElementsByClassName("cart-remove");
    console.log(RemoveCartButtons); 
    for (var i = 0; i < RemoveCartButtons.length; i++)
    {
        var button = RemoveCartButtons[i];
        button.addEventListener("click", removeCartItem);
    }
    var QuantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < QuantityInputs.length; i++)
    {
        var input = QuantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }
    var AddCart = document.getElementsByClassName("add-cart");
    for (var i = 0; i < AddCart.length; i++)
    {
        var button = AddCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("btn-buy")[0].addEventListener("click", buyButtonClicked);
}

function buyButtonClicked()
{
    alert("Your order is placed");  
    var cartContent = document.getElementsByClassName("cart-content")[0];
    while (cartContent.hasChildNodes())
    {
        cartContent.removeChild(cartContent.firstChild);
    }

    updatetotal();
}   
function removeCartItem(event)
{
    var buttonClicked = event.target;   
    buttonClicked.parentElement.remove();
    updatetotal();
}
function quantityChanged(event)
{
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0)
    {
        input.value = 1;
    }
    updatetotal();
}
function addCartClicked(event)
{
    var button = event.target;  
    var shopProducts = button.parentElement;    
    var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updatetotal();
}
function addProductToCart(title, price, productImg)
{
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++)
    {
        if (cartItemsNames[i].innerText == title)
        {
            alert("You have already added this item to cart");
            return;
        }
    }
    var cartBoxContent = `
        <img src="${productImg}" alt="" class="cart-img">
        <div class="detail-box">
            <div class="cart-product-title">${title}</div>
            <div class="cart-price">${price}</div>
            <input type="number" value="1" class="cart-quantity">
        </div>
        <!-- Remove Cart -->
        <i class='bx bxs-trash-alt cart-remove'></i>`;
    cartShopBox.innerHTML = cartBoxContent; 
    cartItems.append(cartShopBox);
    cartShopBox.getElementsByClassName("cart-remove")[0].addEventListener("click", removeCartItem);
    cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change", quantityChanged);
}
function updatetotal()
{
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++)
    {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
