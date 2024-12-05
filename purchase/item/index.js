function start() {
    const container = document.querySelector(".catalog")
    const queryParams = new URLSearchParams(window.location.search).get("q")
    const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || []
    if (purchaseHistory.length === 0) {
        window.location.href = "/"
    }
    const item = purchaseHistory.find(item => item.id === queryParams)

    container.innerHTML = `<h1>COMPRAS REALIZADAS</h1>
    <table border>
        <tr>
            <th>Producto</td>
            <th>Precio</td>
            <th>Cantidad</td>
            <th>TOTAL</td>
        </tr>
        ${item.items.map((item, index) => {
        return `<tr>
                <td>
                    <img src="${item.image_url}" width="60" />
                    <p>${item.name}</p>
                </td>
                <td>
                    ${item.price}
                </td>
                <td>
                    ${item.quantity}
                </td>
                <td>
                    ${item.price * item.quantity}
                </td>
            </tr>`
    }
    )}
            <tr>
                <td colspan="3">Total</td>
                <td colspan="1">${item.total}</td>
            </tr>
</table>
    `
}
start()
