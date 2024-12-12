import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { setProducts } from "./setProducts";
import { getProducts } from "./getProducts";
import { updateIconCount } from "./updateIconCount";


const isUserLogin = !!JSON.parse(localStorage.getItem("user"))
const userIcon = document.querySelector(".user-icon")
const logout_btn = document.querySelector("#logout-btn")
async function init() {
    updateIconCount()
    const products = await getProducts()
    const productsFilter = products.filter(product => product.category === window.location.pathname.split("/")[1])
    setProducts(productsFilter)
}
init()

//  HEADER FUNCTIONS
userIcon.addEventListener("click", verifyUserOptions)
function verifyUserOptions() {
    if (!isUserLogin) { return window.location.href = "/login/index.html" }
    const user_option_btn = document.querySelector(".user-options")
    user_option_btn.classList.toggle("active")

}
logout_btn.addEventListener("click", () => {
    localStorage.clear()
    window.location.href = "/"
})
