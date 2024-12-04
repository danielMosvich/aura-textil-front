import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

const username = document.querySelector("#username");
const password = document.getElementById("password");
const login_btn = document.getElementById("login_btn");

async function validateForm() {
    console.log("hola")
    const user = {
        username: username.value.trim(),
        password: password.value.trim(),
    }
    if (user.username === "" || user.password === "") return
    // FIREBASE CONTECTION
    const usersRef = doc(FirebaseDB, `/users/${user.username}`)
    const usersSnapshot = await getDoc(usersRef)
    const data = usersSnapshot.data()
    if (data.password !== user.password) {
        alert("Invalid username or password")
        return
    }
    localStorage.setItem("user", JSON.stringify(data))
    window.location.href = "/"
}

login_btn.addEventListener("click", validateForm);