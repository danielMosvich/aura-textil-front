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
    const userData = usersSnapshot.data()

    const purchaseHistoryRe = collection(FirebaseDB, `/users/${user.username}/purchaseHistory`)
    const purchaseHistorySnapshot = await getDocs(purchaseHistoryRe)
    const purchaseHistory = purchaseHistorySnapshot.docs.map((doc) => ({
        ...doc.data(),
    }))
    if (userData.password !== user.password) {
        alert("Invalid username or password")
        return
    }
    // console.log(purchaseHistory)
    localStorage.setItem("user", JSON.stringify(userData))
    if (purchaseHistory.length > 0) {
        localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory))
    }
    window.location.href = "/"
}

login_btn.addEventListener("click", validateForm);