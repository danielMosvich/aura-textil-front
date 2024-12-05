import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { updateIconCount } from "./addToCarFunction";
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let cartCount = JSON.parse(localStorage.getItem('cartCount')) || 0;
const container = document.querySelector(".catalog")
const isUserLogin = !!JSON.parse(localStorage.getItem("user"))
const userIcon = document.querySelector(".user-icon")
const logout_btn = document.querySelector("#logout-btn")

// console.log(userLogin)
function calculateCartCount() {
    cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0)
    localStorage.setItem('cartCount', cartCount)
    updateIconCount()
}
async function addToCar(product) {
    if (!isUserLogin) { return window.location.href = "/login/index.html" }
    const existingProduct = cartItems.some(item => item.id === product.id);
    console.log(existingProduct)
    if (existingProduct) {
        cartItems = cartItems.map(item => {
            if (item.id === product.id) {
                item.quantity += 1
            }
            return item
        })
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        calculateCartCount()
        return
    }
    cartItems.push({ ...product, quantity: 1 })
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
    Swal.fire({
        title: '¡Producto añadido al carrito!',
        text: 'El producto ha sido agregado a tu carrito.',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        position: 'top',
        timer: 1500,
        showConfirmButton: false,
        customClass: {
            popup: 'custom-popup'
        },
        background: '#28a745',
        color: '#ffffff',
        timerProgressBar: true,
        imageUrl: product.image, // Mostrar la imagen del producto en la alerta
        imageWidth: 100,
        imageHeight: 100,
        imageAlt: product.name
    });
    calculateCartCount()
}
async function getProducts() {
    const productsRef = collection(FirebaseDB, "/products")
    const productsSnapshot = await getDocs(productsRef)
    const productsUnfilter = productsSnapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    const products = productsUnfilter.filter(product => product.category === window.location.pathname.split("/")[1])
    // console.log(products)
    products.forEach(product => {
        const productElement = document.createElement("div")
        const imgElement = document.createElement("img")
        imgElement.src = product.image_url
        const h3Element = document.createElement("h3")
        const pElement = document.createElement("p")
        const buttonElement = document.createElement("button")
        productElement.classList.add("product")
        h3Element.innerText = product.name
        pElement.innerText = `$${product.price}`
        buttonElement.classList.add("add-to-cart")
        buttonElement.innerText = "Añadir al carrito"
        buttonElement.addEventListener("click", () => { addToCar(product) })

        productElement.appendChild(imgElement)
        productElement.appendChild(h3Element)
        productElement.appendChild(pElement)
        productElement.appendChild(buttonElement)
        // productElement.innerHTML = `
        // <img src="${product.image_url}" alt="${product.name}">
        // <h3>${product.name}</h3>
        // <p>$/${product.price}</p>
        // <button class="add-to-cart" 
        //     data-id="${product.id}" 
        //     data-name="${product.name}" 
        //     data-price="${product.price}" 
        //     data-image="${product.image_url}">Añadir al carrito
        // </button>

        // `
        container.appendChild(productElement)
    })

}
getProducts()

//  HEADER FUNCTIONS
userIcon.addEventListener("click", verifyUserOptions)
// console.log(logout_btn)
function verifyUserOptions() {
    if (!isUserLogin) { return window.location.href = "/login/index.html" }
    const user_option_btn = document.querySelector(".user-options")
    user_option_btn.classList.toggle("active")

}
logout_btn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "/"
})
