const previousCalculations =
  JSON.parse(localStorage.getItem("previousCalculations")) || [];

const albumsContainer = document.getElementById("albumsContainer");

albumsContainer.innerHTML = `
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col">
        <div class="card mx-auto my-4" id="randomAccessMemories">
          <img src="https://i.huffpost.com/gen/1052995/thumbs/o-RANDOM-ACCESS-MEMORIES-570.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Daft Punk - Random Access Memories (2013)</h5>
            <p class="card-text">Random Access Memories es el cuarto y último álbum de estudio del dúo francés Daft Punk. Se publicó oficialmente en 2013.</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('randomAccessMemories')">Agregar al carrito</a>
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
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('1989')">Agregar al carrito</a>
            <span class="price">14.00 USD</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto my-4" id="darkSideOfTheMoon">
          <img src="https://www.musik-sammler.de/cover/1083000/1082913_1603736151.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Pink Floyd - The Dark Side of the Moon (1973)</h5>
            <p class="card-text">The Dark Side of the Moon es un álbum conceptual, el octavo de estudio del grupo musical británico de rock progresivo Pink Floyd. Fue lanzado en 1973.</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('darkSideOfTheMoon')">Agregar al carrito</a>
            <span class="price">8.00 USD</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
