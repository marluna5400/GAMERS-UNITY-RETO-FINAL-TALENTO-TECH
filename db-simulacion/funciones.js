
// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas en el localStorage
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();
}

// Devolver la lista de banners almacenados en el localStorage
function obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}
//Devolver la lista de productoss almacenados en el localstorage
function  obtenerProductos(categoria = "todos") {
    const map = obtenerMap("productos");
    //return map.values
    let productos = []; 
    if(categoria == null || categoria === "todos") {
       productos = map.values();
    } else {
            productos = map.values().filter(prod => prod.categoria === categoria);
    }
    return productos;
}

//  Funciones para la manipulacion del carrito de compras

// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}


// Mostrar los productos añadidos al carrito de compras

function mostrarCarrito() {
        const carrito = obtenerCarrito();
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = "";
        let precio = 0;
 
        carrito.forEach((producto,index) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between mb-2';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center ">
                    <div class="row">
                        <h6 class="my-0">${producto.nombre}</h6>
                        <small>${producto.precio}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto(${index})" >
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
            carritoContainer.appendChild(li);
            precio += producto.precio;
        });
        const totalElement = document.getElementById('total');
        totalElement.textContent = precio.toFixed(2);
}


// Agregar producto al carrito de compras
function agregarProducto(producto, actualizarCarrito = true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    if(actualizarCarrito == true) {
        mostrarCarrito();
    }

}
 
// Eliminar un producto del carrito de compras
function eliminarProducto(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
 
// Vaciar el carrito de compras
function vaciarCarrito() {
    let carrito = [];
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

//Obtener PRODUCTO POR CODIGO
function obtenerProductoPorCodigo(codigoProducto) {
    const productos = obtenerMap("productos");
    const respuesta = productos.get(codigoProducto);
    if (!respuesta) {
         throw  new Error(`No se encontró el producto con el código: ${codigoProducto}`)
    }
    return respuesta;
}
