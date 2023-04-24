const cartCount = document.getElementById("cart-count");

const discosEnCarrito = localStorage.getItem("carrito");
let count = discosEnCarrito ? JSON.parse(discosEnCarrito).length : 0;
cartCount.innerText = count;

const toastConfig = {
  text: "",
  duration: 3000,
  newWindow: true,
  close: true,
  gravity: "bottom",
  position: "center",
  backgroundColor: "linear-gradient(to right, #000000, #434343)",
  stopOnFocus: true,
};

async function consultarValorUSD() {
  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  try {
    const response = await fetch(url);
    const data = await response.json();
    const dolar = data.find((moneda) => moneda.casa.nombre === "Dolar Oficial");
    const valorUSD = parseFloat(dolar.casa.venta.replace(",", "."));
    return valorUSD;
  } catch (error) {
    console.log(error);
  }
}

async function calcularTotalesCarrito(carrito, valorUSD) {
  let total = 0;
  for (const disco of carrito) {
    const precio = parseFloat(disco.precio);
    const moneda = disco.moneda;
    if (moneda === "USD") {
      total += precio * valorUSD;
    } else {
      total += precio;
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
    let valorUSD;
    try {
      valorUSD = await consultarValorUSD();
    } catch (error) {
      console.error("Error al traer el valor del USD:", error);
      return;
    }
    for (let i = 0; i < carrito.length; i++) {
      const disco = carrito[i];
      carritoComponent.innerHTML += `
                <li class="list-group-item">
                    <div class="d-flex justify-content-between align-items-center">
                        <span>${disco.titulo}</span>
                        <div>
                            ${
                              disco.moneda === "USD"
                                ? `<span class="badge badge-secondary mr-2 mb-2">${
                                    disco.precio
                                  } ${
                                    disco.moneda
                                  }</span><span class="badge badge-primary mr-2 mb-2">$${
                                    disco.precio * valorUSD
                                  } ARS</span>`
                                : `<span class="badge badge-primary mr-2 mb-2">${disco.precio} ${disco.moneda}</span>`
                            }
                            <button class="btn btn-danger btn-sm ml-auto" onclick="eliminarDelCarrito(${i})">Eliminar</button>
                        </div>
                    </div>
                </li>
        `;
    }
    try {
      totalesCarrito = await calcularTotalesCarrito(carrito, valorUSD);
    } catch (error) {
      console.error("Error al calcular el total del carrito:", error);
      return;
    }
    if (totalesCarrito) {
      for (let i = 0; i < totalesCarrito.length; i++) {
        const cuota = totalesCarrito[i];
        carritoComponent.innerHTML += `
                <li class="list-group-item cuotasCarrito">
                    <div class="d-flex justify-content-between align-items-center">
                        ${
                          cuota.cuotas == 1
                            ? `
                        <input type="radio" name="cuotas" value="${
                          cuota.cuotas
                        }" checked>
                        <span class="list-description"><strong>${
                          cuota.cuotas
                        }</strong> cuota de <strong>$${parseFloat(
                                cuota.totalPorCuota.toFixed(2)
                              )} ARS</strong></span>`
                            : `
                        <input type="radio" name="cuotas" value="${
                          cuota.cuotas
                        }">
                        <span class="list-description"><strong>${
                          cuota.cuotas
                        }</strong> cuotas de <strong>$${parseFloat(
                                cuota.totalPorCuota.toFixed(2)
                              )} ARS</strong></span>`
                        }
                        
                        <div>
                            <span class="badge badge-primary mr-2 mb-2">$${parseFloat(
                              cuota.montoTotalConInteres.toFixed(2)
                            )} ARS</span>
                        </div>
                    </div>
                </li>
              </ol>
            
        `;
      }
      carritoComponent.innerHTML += `
      <div class="row mx-auto my-3 d-flex justify-content-center col-12">
        <button class="btn btn-primary mt-2 buyButton" onclick="vaciarCarrito()">Comprar</button>
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
  const precio = precioStr.substring(0, precioStr.length - 4);
  const moneda = precioStr.substring(precioStr.length - 3);
  const disco = { titulo, precio, moneda };
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push(disco);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
  toastConfig.text = "Disco agregado al carrito";
  Toastify(toastConfig).showToast();
}

async function eliminarDelCarrito(index) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContadorCarrito();
  await mostrarElementosDelCarrito();
  toastConfig.text = "Disco eliminado del carrito";
  Toastify(toastConfig).showToast();
}

function vaciarCarrito() {
  localStorage.removeItem("carrito");
  actualizarContadorCarrito();
  mostrarElementosDelCarrito();
  toastConfig.text = "Compra realizada con éxito";
  Toastify(toastConfig).showToast();
}

const carritoComponent = document.getElementById("cartList");

if (carritoComponent) {
  mostrarElementosDelCarrito();
}
