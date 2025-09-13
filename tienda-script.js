let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({nombre, precio});
  total += precio;
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  lista.innerHTML = ''; // vaciar lista antes de actualizar
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio}`;
    lista.appendChild(li);
  });
  document.getElementById('total').textContent = total;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
}
