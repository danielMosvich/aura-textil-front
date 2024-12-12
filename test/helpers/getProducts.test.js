import {expect, test} from "vitest"
import { getProducts } from "../../helpers/getProducts"

test('Obtener los elementos desde la base de datos', async () => {
    const products = await getProducts()
    console.log("hay esta cantidad de productos", products.length)
    expect(products.length).toBeGreaterThan(1)
})