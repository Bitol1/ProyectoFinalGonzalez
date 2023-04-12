const cartCount = document.getElementById("cart-count");

const discosEnCarrito = localStorage.getItem("carrito");
let count = discosEnCarrito ? JSON.parse(discosEnCarrito).length : 0;
cartCount.innerText = count;

async function calcularTotalesCarrito(carrito) {
  let total = 0;
  for (const disco of carrito) {
    const precio = parseFloat(
      disco.precio.substring(0, disco.precio.length - 4)
    );
    const moneda = disco.precio.substring(disco.precio.length - 3);
    if (moneda === "USD") {
      const valorUSD = await consultarValorUSD();
      total = precio * valorUSD;
    } else {
      total = precio;
    }
  }
  const financiacion = new Financiacion(total);
  return financiacion.calcularTotalesPorNumeroDeCuotas();
}

async function mostrarElementosDelCarrito() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  let totalesCarrito;
  if (carrito.length === 0) {
    carritoComponent.innerHTML = `
            <div class="alert alert-warning" role="alert">
                El carrito está vacío
            </div>
            `;
  } else {
    carritoComponent.innerHTML = `
            <ol class="list-group list-group-flush">
            `;
    for (let i = 0; i < carrito.length; i++) {
      const disco = carrito[i];
      carritoComponent.innerHTML += `
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>${disco.titulo}</span>
                        <div>
                            <span class="badge badge-primary mr-2 mb-2">${disco.precio}</span>
                            <button class="btn btn-danger btn-sm ml-auto" onclick="eliminarDelCarrito(${i})">Eliminar</button>
                        </div>
                    </div>
                </li>
        `;
    }
    try {
      totalesCarrito = await calcularTotalesCarrito(carrito);
      console.log(totalesCarrito);
    } catch (error) {
      console.error("Error calculating cart totals:", error);
      return;
    }
    if (totalesCarrito) {
      for (let i = 0; i < totalesCarrito.length; i++) {
        const cuota = totalesCarrito[i];
        carritoComponent.innerHTML += `
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>${cuota.cuotas} cuotas de $${cuota.totalPorCuota}</span>
                        <div>
                            <span class="badge badge-primary mr-2 mb-2">$${cuota.montoTotalConInteres}</span>
                        </div>
                    </div>
                </li>
                
        `;
      }
      carritoComponent.innerHTML += `
      <div class="row mx-auto my-3 d-flex justify-content-center col-12">
        <button class="btn btn-primary mt-2 buyButton">Comprar</button>
      </div>`;
    }
  }
}

function actualizarContadorCarrito() {
  const discosEnCarrito = localStorage.getItem("carrito");
  const count = discosEnCarrito ? JSON.parse(discosEnCarrito).length : 0;
  cartCount.innerText = count;
}

function agregarAlCarrito(id) {
  const discoSeleccionado = document.getElementById(id);

  const titulo = discoSeleccionado.querySelector(".card-title").textContent;
  const precioStr = discoSeleccionado.querySelector(".price").textContent;
  console.log(precioStr);
  const precio = precioStr.substring(0, precioStr.length - 4);
  console.log(precio);
  const moneda = precioStr.substring(precioStr.length - 3);
  console.log(moneda);
  const disco = { titulo, precio, moneda };
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(disco);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
}

async function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
  await mostrarElementosDelCarrito();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarContadorCarrito();
  mostrarElementosDelCarrito();
}

const carritoComponent = document.getElementById("cartList");

if (carritoComponent) {
  mostrarElementosDelCarrito();
}
