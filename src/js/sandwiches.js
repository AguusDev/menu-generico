const listSandwiches = [
    { titulo : "sandwich de suprema" , descripcion : "" , precio : "$ 6500" },
    { titulo : "sandwich de suprema completo" , descripcion : "jamon, queso, lechuga, tomate y huevo" , precio : "$ 7000" },
    { titulo : "sandwich de milanesa" , descripcion : "" , precio : "$ 6800" },
    { titulo : "sandwich de milanesa completo" , descripcion : "jamon, queso, lechuga, tomate y huevo" , precio : "$ 7200" },
    { titulo : "sandwich de lomito" , descripcion : "" , precio : "$ 7200" },
    { titulo : "sandwich de lomito completo" , descripcion : "jamon, queso, lechuga, tomate y huevo" , precio : "$ 7500" },
    { titulo : "sandwich de bondiola" , descripcion : "" , precio : "$ 7000" },
    { titulo : "sandwich de bondiola completo" , descripcion : "jamon, queso, lechuga, tomate y huevo" , precio : "$ 7300" },
    { titulo : "sandwich de lomo argento" , descripcion : "lechuga, cebolla y salsa alioli" , precio : "$ 7300" },
    { titulo : "sandwich de lomo en fuego" , descripcion : "lechuga criolla, tomate, jalapeños, salsa picante" , precio : "$ 7500" },
    { titulo : "sandwich bondiola americana" , descripcion : "lechuga criolla, queso cheddar, huevo revuelto y cebolla caramelizada" , precio : "$ 7000" },
    { titulo : "sandwich del arca" , descripcion : "lechuga, queso, huevo, cebolla y morrones asados" , precio : "$ 7200" },
    { titulo : "sandwiches vegies" , descripcion : "queso, ciboulette, vegetales asados, lechuga morada y aceite de hierbas" , precio : "$ 5500" },
];

const evento_sandwich = document.querySelector('#sandwiches');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_sandwiches(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('sandwiches');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listSandwiches.filter( (item =>{
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