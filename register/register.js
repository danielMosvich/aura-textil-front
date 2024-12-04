import { collection, doc, getDocs, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";
import { v4 as uuidv4 } from 'uuid';
const username = document.querySelector("#username");
const password_1 = document.getElementById("password_1");
const password_2 = document.getElementById("password_2");
const register_btn = document.getElementById("register-btn");

async function validateForm() {
    const user = {
        username: username.value.trim(),
        password_1: password_1.value.trim(),
        password_2: password_2.value.trim(),
    }
    if (user.username === "" || user.password_1 === "" || user.password_2 === "") return
    if (user.password_1 !== user.password_2) return

    // // FIREBASE CONTECTION
    const usersRef = collection(FirebaseDB, "/users")
    const usersSnapshot = await getDocs(usersRef)
    const users = usersSnapshot.docs.map((doc) => ({
        ...doc.data(),
    }))
    // console.log(users)
    if (users.some(userSome => user.username === userSome.username)) {
        alert("Username already exists")
        return
    }
    // !start create a new user
    const newUserRef = doc(FirebaseDB, `/users/${user.username}`)
    const newUser = {
        admin: false,
        username: user.username,
        password: user.password_1,
        id: uuidv4(),
        cart: []
    }
    await setDoc(newUserRef, newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
    window.location.href = "/"
}

register_btn.addEventListener("click", validateForm);