const listBebida = [
    { titulo : "limonada en jarra" , descripcion : "" , precio : "$ 3500" },
    { titulo : "limonada en vaso" , descripcion : "" , precio : "$ 2000" },
    { titulo : "agua s/c gas" , descripcion : "" , precio : "$ 1200" },
    { titulo : "agua saborizada" , descripcion : "" , precio : "$ 1400" },
    { titulo : "gaseosa 350 ml" , descripcion : "" , precio : "$ 1500" },
    { titulo : "exprimido de naranja" , descripcion : "" , precio : "$ 2500" },
    { titulo : "licuado de leche" , descripcion : "" , precio : "$ 2500" },
    { titulo : "licuado de agua" , descripcion : "" , precio : "$ 2000" },
    { titulo : "smothies" , descripcion : "" , precio : "$ 2500" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "speed 473 ml" , descripcion : "" , precio : "$ 2200" },
    { titulo : "heineken lata 473 ml" , descripcion : "" , precio : "$ 2400" },
    { titulo : "imperial lata 473 ml" , descripcion : "" , precio : "$ 2200" },
    { titulo : "schneider" , descripcion : "" , precio : "$ 2000" },
    { titulo : "corona 310 ml" , descripcion : "" , precio : "$ 2400" },
    { titulo : "corona 710 ml" , descripcion : "" , precio : "$ 3800" },
    { titulo : "chandon + 2 speed" , descripcion : "" , precio : "$ 16000" },
];

const evento_bebida = document.querySelector('#bebidas');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_bebida(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('bebida');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listBebida.filter( (item =>{
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