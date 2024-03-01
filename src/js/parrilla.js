const listParrilla = [
    { titulo : "chorizo" , descripcion : "" , precio : "$ 1800" },
    { titulo : "morcilla" , descripcion : "" , precio : "$ 1800" },
    { titulo : "choripan" , descripcion : "con papas fritas" , precio : "$ 2800" },
    { titulo : "chinchulines" , descripcion : "(porcion)" , precio : "$ 2800" },
    { titulo : "riñones" , descripcion : "(porcion)" , precio : "$ 3000" },
    { titulo : "combinada" , descripcion : "(chinchulines y riñones)" , precio : "$ 3000" },
    { titulo : "mollejas" , descripcion : "" , precio : "$ 6000" },
    { titulo : "seleccion" , descripcion : "(chinchulin, riñon y molleja)" , precio : "$ 8000" },
    { titulo : "provoleta" , descripcion : "" , precio : "$ 4000" },
    { titulo : "provoleta especial" , descripcion : "" , precio : "$ 4500" },
    { titulo : "asado banderita" , descripcion : "con papas fritas" , precio : "$ 8500" },
    { titulo : "bife de chorizo" , descripcion : "con papas fritas" , precio : "$ 6500" },
    { titulo : "ojo de bife" , descripcion : "con papas fritas" , precio : "$ 8000" },
    { titulo : "bife de lomo" , descripcion : "con papas fritas" , precio : "$ 8500" },
    { titulo : "matambrito de cerdo" , descripcion : "con papas fritas" , precio : "$ 7800" },
    { titulo : "matambrito de carne a la pizza o roquefort" , descripcion : "con papas fritas" , precio : "$ 8000" },
    { titulo : "entraña" , descripcion : "con papas fritas" , precio : "$ 8500" },
    { titulo : "vacio" , descripcion : "con papas fritas" , precio : "$ 9000" },
    { titulo : "pechuga grillada" , descripcion : "con pure mixto" , precio : "$ 7000" },
    { titulo : "1/4 de pollo deshuesado" , descripcion : "con pure mixto" , precio : "$ 6800" },
    { titulo : "pollo al verdeo" , descripcion : "con papas noisette" , precio : "$ 7500" },
    { titulo : "parrilla(para 2 pers.)" , descripcion : "chorizo, morcilla, chinchulin, riñon, tira de asado y vacio, con guarnicion" , precio : "$ 18000" },
    { titulo : "parrilla(para 4 pers.)" , descripcion : "chorizo, morcilla, chinchulin, riñon, tira de asado, vacio y pollo, con guarnicion" , precio : "$ 30000" },
    { titulo : "menu ejecutivo" , descripcion : "sugerencia de parrilla acompañada con papas fritas o ensalada, bebida, cafe o postre" , precio : "$ 8000" }
];

const evento_parrilla = document.querySelector('#parrilla');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_parrilla(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('parrilla');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listParrilla.filter( (item =>{
        cards_container.innerHTML += `
        <div class="card-item">
            <div class="titulo_descripcion-container">
                <h2 class="titulo-card">${item.titulo}</h2>
                <p class="descripcion-card">${item.descripcion} <p>
            </div>
            <p class="precio-card">${item.precio}</p>
            <br>
        </div>
        `;
        vistaMenu.appendChild(cards_container);

    }));
}