const previousCalculations =
  JSON.parse(localStorage.getItem("previousCalculations")) || [];

const albumsContainer = document.getElementById("albumsContainer");

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
const album = [
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

>>>>>>> c4daf604ac1ed331a9850887453ed0c3d3c862dc
>>>>>>> 24f8860d6aae20f9a48786013ae85cff43ddda3d
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24f8860d6aae20f9a48786013ae85cff43ddda3d
  {
    id: "damn",
    title: "Kendrick Lamar - Damn (2017)",
    description:
      "Damn es el cuarto álbum de estudio del rapero estadounidense Kendrick Lamar. Fue lanzado el 14 de abril de 2017, por Top Dawg Entertainment, Aftermath Entertainment y Interscope Records.",
    price: 12,
    moneda: "USD",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_786397-MLA50571827137_072022-W.jpg",
  },
<<<<<<< HEAD
=======
=======
>>>>>>> c4daf604ac1ed331a9850887453ed0c3d3c862dc
>>>>>>> 24f8860d6aae20f9a48786013ae85cff43ddda3d
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
