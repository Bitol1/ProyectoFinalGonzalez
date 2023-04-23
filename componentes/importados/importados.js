const previousCalculations =
  JSON.parse(localStorage.getItem("previousCalculations")) || [];

const albumsContainer = document.getElementById("albumsContainer");

const albums = [
  {
    id: "reinassance",
    title: "Beyonce - Reinassance (2022)",
    description:
      "Reinassance es el sexto disco en solitario del argentino Andrés Calamaro, lanzado en formato doble en 1999.",
    price: 20,
    moneda: "USD",
    image:
      "https://cdn.shopify.com/s/files/1/0455/0731/3824/products/100614-a5871f58e44a95fadccf5b049ef1254b_1200x1200_469170ee-c345-4ec7-8079-faee11499278_1200x1200.png",
  },
  {
    id: "redMoonInVenus",
    title: "Kali Uchis - Red moon in Venus (2023)",
    description:
      "Red Moon in Venus es el segundo álbum de estudio del cantante y multinstrumentista argentino Charly García, publicado el 5 de noviembre de 1983 .",
    price: 15,
    moneda: "USD",
    image:
      "https://images.stockx.com/images/Kali-Uchis-Red-Moon-in-Venus-Urban-Outfitters-Exclusive-LP-Vinyl-Salmon.jpg",
  },
  {
    id: "theDarkSideOfTheMoon",
    title: "Pink Floyd - The Dark Side of the Moon (1973)",
    description:
      "The Dark Side of the Moon es el octavo álbum de estudio de la banda británica de rock progresivo Pink Floyd, publicado el 1 de marzo de 1973 por Harvest Records.",
    price: 8,
    moneda: "USD",
    image: "https://www.musik-sammler.de/cover/1083000/1082913_1603736151.jpg",
  },
  {
    id: "randomAccessMemories",
    title: "Daft Punk - Random Access Memories (2013)",
    description:
      "Random Access Memories es el cuarto álbum de estudio de la banda francesa de música electrónica Daft Punk, publicado el 17 de mayo de 2013 por Columbia Records.",
    price: 10,
    moneda: "USD",
    image:
      "https://i.huffpost.com/gen/1052995/thumbs/o-RANDOM-ACCESS-MEMORIES-570.jpg",
  },
  {
    id: "1989",
    title: "Taylor Swift - 1989 (2014)",
    description:
      "1989 es el quinto álbum de estudio de la cantante y compositora estadounidense Taylor Swift, publicado el 27 de octubre de 2014 por Big Machine Records.",
    price: 11,
    moneda: "USD",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_851315-MLA28987346470_122018-W.jpg",
  },
];

<<<<<<< HEAD
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
=======
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
/*
albumsContainer.innerHTML = `
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col">
        <div class="card mx-auto my-4" id="randomAccessMemories">
          <img src="https://i.huffpost.com/gen/1052995/thumbs/o-RANDOM-ACCESS-MEMORIES-570.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Daft Punk - Random Access Memories (2013)</h5>
            <p class="card-text">Random Access Memories es el cuarto y último álbum de estudio del dúo francés Daft Punk. Se publicó oficialmente en 2013.</p>
            <a href="#" class="btn btn-primary addButton" onclick="agregarAlCarrito('randomAccessMemories')">Agregar al carrito</a>
            <span class="price">12.00 USD</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto my-4" id="1989">
          <img src="https://http2.mlstatic.com/D_NQ_NP_851315-MLA28987346470_122018-W.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Taylor Swift - 1989 (2014)</h5>
            <p class="card-text">1989 es el quinto álbum de estudio de la cantante y compositora estadounidense Taylor Swift, lanzado en 2014.</p>
            <a href="#" class="btn btn-primary addButton" onclick="agregarAlCarrito('1989')">Agregar al carrito</a>
            <span class="price">14.00 USD</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto my-4" id="darkSideOfTheMoon">
          <img src="https://www.musik-sammler.de/cover/1083000/1082913_1603736151.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Pink Floyd - The Dark Side of the Moon (1973)</h5>
            <p class="card-text">The Dark Side of the Moon es un álbum conceptual, el octavo de estudio del grupo musical británico de rock progresivo Pink Floyd.</p>
            <a href="#" class="btn btn-primary addButton" onclick="agregarAlCarrito('darkSideOfTheMoon')">Agregar al carrito</a>
            <span class="price">8.00 USD</span>
          </div>
        </div>
      </div>
>>>>>>> a6721fbc2d750fe5e145c3c986228e26bb12aad2
    </div>
  </div>
`;
*/
