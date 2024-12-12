import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"

export async function getProducts() {
    const productsRef = collection(FirebaseDB, "/products")
    const productsSnapshot = await getDocs(productsRef)
    const productsUnfilter = productsSnapshot.docs.map(doc => (
        {
            id: doc.id,
            ...doc.data()
        }
    ))
    const products = productsUnfilter
    return products
}

