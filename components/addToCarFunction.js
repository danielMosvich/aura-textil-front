// // Obtener el contador del carrito desde localStorage (si existe)
export function updateIconCount(){
    const iconCount = document.querySelector('.cart-count')
    iconCount.innerText = localStorage.getItem('cartCount')
    // console.log(iconCount)
}
updateIconCount()
// let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;

// // Obtener los productos del carrito (si existen)
// let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// // Seleccionar todos los botones de añadir al carrito
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Función para actualizar el contador del carrito
// function updateCartCount() {
//     // console.log("UPDATE CAR")
//     // Cargar los productos del carrito desde localStorage
//     cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//     // Recalcular el total de productos en el carrito
//     cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//     // Actualizar el contador en la interfaz
//     const cartCountElement = document.getElementById('cart-count');
//     if (cartCountElement) {
//         cartCountElement.textContent = cartCount;
//     }

//     // Guardar el contador en localStorage
//     localStorage.setItem('cartCount', cartCount);
// }

// // Función para añadir un producto al carrito
// // function addProductToCart(product) {
// //     // Verificar si el producto ya está en el carrito
// //     const existingProduct = cartItems.find(item => item.id === product.id);

// //     if (existingProduct) {
// //         // Incrementar la cantidad si ya existe
// //         existingProduct.quantity++;
// //     } else {
// //         // Añadir el nuevo producto si no existe
// //         cartItems.push(product);
// //     }

// //     // Guardar los productos actualizados en localStorage
// //     localStorage.setItem('cartItems', JSON.stringify(cartItems));

// //     // Actualizar el contador basado en el total de productos (suma de cantidades)
// //     cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
// //     updateCartCount();
// // }

// // Añadir un evento de clic a cada botón de "Añadir al carrito"
// addToCartButtons.forEach((button, index) => {
//     button.addEventListener('click', (event) => {
//         const element = button.parentElement;
//         // console.log(button.parentElement)
//         // const product = {
//         //     id: button.dataset.id,
//         //     name: button.dataset.name,
//         //     image: button.dataset.image,
//         //     price: parseFloat(button.dataset.price),
//         //     quantity: 1
//         // };
//         // !producto por mientras (ya que todos los datos vendran del DB)
//         console.log(element.children)
//         const product = {
//             id: Number(index + 1),
//             name: element.children[1].textContent,
//             image: element.children[0].src,
//             price: Number(element.children[2].textContent.split("$")[1]),
//             quantity: 1
//         }

//         // Añadir el producto al carrito
//         addProductToCart(product);

//         // Mostrar la alerta con SweetAlert2
//         Swal.fire({
//             title: '¡Producto añadido al carrito!',
//             text: 'El producto ha sido agregado a tu carrito.',
//             icon: 'success',
//             confirmButtonText: 'Aceptar',
//             position: 'top',
//             timer: 1500,
//             showConfirmButton: false,
//             customClass: {
//                 popup: 'custom-popup'
//             },
//             background: '#28a745',
//             color: '#ffffff',
//             timerProgressBar: true,
//             imageUrl: product.image, // Mostrar la imagen del producto en la alerta
//             imageWidth: 100,
//             imageHeight: 100,
//             imageAlt: product.name
//         });
//     });
// });

// // Inicializar el contador del carrito en la carga de la página
// updateCartCount();

// // Redirigir al carrito cuando se hace clic en el ícono del carrito de compras
// document.querySelector('.fa-cart-shopping').addEventListener('click', () => {
//     window.location.href = '../carrito/index.html'; // Redirigir a Carrito.html
// });
