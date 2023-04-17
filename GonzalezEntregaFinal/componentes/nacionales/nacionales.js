const previousCalculations =
  JSON.parse(localStorage.getItem("previousCalculations")) || [];

const albumsContainer = document.getElementById("albumsContainer");

albumsContainer.innerHTML = `
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3">
      <div class="col">
        <div class="card mx-auto my-4" id="honestidadBrutal">
          <img src="https://http2.mlstatic.com/D_NQ_NP_803473-MLA51618141433_092022-O.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Andrés Calamaro - Honestidad Brutal (1999)</h5>
            <p class="card-text">Honestidad Brutal es el sexto disco en solitario del argentino Andrés Calamaro, lanzado en formato doble en 1999.</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('honestidadBrutal')">Agregar al carrito</a>
            <span class="price">2800.00 ARS</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto my-4" id="clicsModernos">
          <img src="https://http2.mlstatic.com/D_NQ_NP_772286-MLA51199011356_082022-O.webp" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Charly García - Clics Modernos (1983)</h5>
            <p class="card-text">Clics Modernos es el segundo álbum de estudio del cantante y multinstrumentista argentino Charly García, publicado el 5 de noviembre de 1983.</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('clicsModernos')">Agregar al carrito</a>
            <span class="price">3500.00 ARS</span>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mx-auto my-4" id="pianoBar">
          <img src="https://http2.mlstatic.com/D_NQ_NP_894746-MLA43183820790_082020-O.jpg" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Charly García - Piano Bar (1984)</h5>
            <p class="card-text">Piano Bar es el tercer álbum de estudio en solitario del músico argentino Charly García, editado en 1984.</p>
            <a href="#" class="btn btn-primary" onclick="agregarAlCarrito('pianoBar')">Agregar al carrito</a>
            <span class="price">3200.00 ARS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
