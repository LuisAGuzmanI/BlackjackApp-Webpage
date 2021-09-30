const body = document.body;

const crearHtml = () => {
    
    const html = `
    <h1 class="mt-5" align="center"> Blackjack Game </h1>
    <p class="mt-2" align="center"> ¿Tan solo que no tienes con quien jugar 21? Te tenemos cubierto. </p>
    <hr>

    <div>

    <div class="text-center">
      <div class="my-3 py-3">
        <h2 class="display-5">El clásico juego de cartas</h2>
        <p class="lead">Ahora siempre en tu bolsillo</p>
        <img src="../assets/img/screenshot-1.jpg" width="530" height="400"></img>
      </div>
    </div>
    
    <div class="text-center">
      <div class="my-3 p-3">
        <h2 class="display-5">Prueba tu suerte</h2>
        <p class="lead">Especialmente si estás pensando en ir al casino</p>
        <img src="../assets/img/screenshot-2.jpg" width="530" height="400"></img>
      </div>
    </div>

    <div class="text-center">
      <div class="my-3 py-3">
        <h2 class="display-5">21!</h2>
        <p class="lead">El dulce sabor de ese golpe de suerte</p>
        <img src="../assets/img/screenshot-3.jpg" width="530" height="400"></img>
      </div>
    </div>

    <div class="text-center">
      <div class="my-3 p-3">
        <h2 class="display-5">Intenta de nuevo</h2>
        <p class="lead">A veces hay que saber haceptar la derrota</p>
        <img src="../assets/img/screenshot-4.jpg" width="530" height="400"></img>
      </div>
    </div>
    
    <div class="text-center">
      <div class="my-3 p-3">
        <h2 class="display-5">Descargala ya!</h2>
        <p class="lead">Disponible en Android</p>
        <img src="../assets/img/qr.png" width="400" height="400"></img>
      </div>
    </div>

    </div>

    <footer class="text-muted py-5">
        <div class="container">
            <p class="float-end mb-1">
                <a href="https://github.com/LuisAGuzmanI/webpack-starter">Webpage GitHub Repository</a>
            </p>
            <p class="mb-1">Esta pagina web fue hecha para el segundo día del evento 3THONS de la SAITC</p>
        </div>
    </footer>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.appendChild( div );    
}


export const init_ = async() => {
    crearHtml();

}

