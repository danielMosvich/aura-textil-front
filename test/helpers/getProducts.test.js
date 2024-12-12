import {expect, test} from "vitest"
import { getProducts } from "../../helpers/getProducts"
// import {calculateCartCount} from "../../helpers/getProducts"
test('calcular el contador del carrito', async () => {
    const products = await getProducts()
    expect(products.length).toBeGreaterThan(1)
})