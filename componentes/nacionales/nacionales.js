const previousCalculations =
  JSON.parse(localStorage.getItem("previousCalculations")) || [];

const albumsContainer = document.getElementById("albumsContainer");

const albums = [
  {
    id: "honestidadBrutal",
    title: "Andrés Calamaro - Honestidad Brutal (1999)",
    description:
      "Honestidad Brutal es el sexto disco en solitario del argentino Andrés Calamaro, lanzado en formato doble en 1999.",
    price: 3000,
    moneda: "ARS",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_803473-MLA51618141433_092022-O.jpg",
  },
  {
    id: "clicsModernos",
    title: "Charly García - Clics Modernos (1983)",
    description:
      "Clics Modernos es el segundo álbum de estudio del cantante y multinstrumentista argentino Charly García, publicado el 5 de noviembre de 1983.",
    price: 2800,
    moneda: "ARS",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_772286-MLA51199011356_082022-O.webp",
  },
  {
    id: "flopaManzaMinimal",
    title: "Flopa Manza Minimal - Flopa Manza Minimal (2002)",
    description:
      "Flopa Manza Minimal es el primer álbum de estudio de la unión argentina entre Flopa, Manza y Minimal. Publicado el 30 de abril de 2002.",
    price: 3200,
    moneda: "ARS",
    image:
      "https://es.rollingstone.com/wp-content/uploads/2023/02/flopa-manza-minimal-vinilo.jpg",
  },
];

albumsContainer.innerHTML = `
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      ${albums
        .map(
          (album) => `
        <div class="col">
          <div class="card mx-auto my-4" id="${album.id}">
            <img src="${album.image}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${album.title}</h5>
              <p class="card-text">${album.description}</p>
              <a href="#" class="btn btn-primary addButton" onclick="agregarAlCarrito('${album.id}')">Agregar al carrito</a>
              <span class="price">${album.price}.00 ${album.moneda}</span>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  </div>
`;
