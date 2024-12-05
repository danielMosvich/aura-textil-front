function start() {
    const purchaseHistory = JSON.parse(localStorage.getItem("purchaseHistory")) || []
    const container = document.querySelector(".catalog")
    purchaseHistory.forEach((item) => {
        const product = document.createElement("div")
        product.classList.add("product")
        product.innerHTML = `
        <a href="/purchase/item/index.html?q=${item.id}">
            <h3>${item.name}</h3>
            <h4>${item.id}</h4>
            <p>date: ${item.created_at}</p>
            <p>${item.items.length} productos</p>
            <p>total: s/${item.total} PEN</p>
        </a>
        `
        container.appendChild(product)
    })
}
start()