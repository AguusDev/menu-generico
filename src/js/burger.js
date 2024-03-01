const listBurger = [
    { titulo : "popeye simple" , descripcion : "medallon de carne con cheddar" , precio : "$ 6000" },
    { titulo : "popeye doble" , descripcion : "doble medallon de carne con doble cheddar" , precio : "$ 6500" },
    { titulo : "brutus simple" , descripcion : "medallon de carne con cheddar y bacon" , precio : "$ 6200" },
    { titulo : "brutus doble" , descripcion : "doble medallon de carne con doble cheddar y bacon" , precio : "$ 6700" },
    { titulo : "papá popeye triple" , descripcion : "triple medallon de carne con triple cheddar y bacon" , precio : "$ 7200" },
    { titulo : "olivia" , descripcion : "medallon de carne con lechuga, tomate, queso dambo y cebolla caramelizada" , precio : "$ 6200" },
    { titulo : "olivia doble" , descripcion : "doble medallon de carne con lechuga, tomate, queso dambo y cebolla caramelizada" , precio : "$ 6700" },
    { titulo : "notburger cocoliso simple" , descripcion : "medallon a base de plantas con lechuga, tomate y queso" , precio : "$ 5500" },
    { titulo : "gravy" , descripcion : "medallon de carne con lechuga, pepinos agridulces, morrones asados y cheddar" , precio : "$ 6800" },
    { titulo : "castor olivo" , descripcion : "doble medallon de carne con lechuga, tomate, salsa bbc, panceta y cheddar" , precio : "$ 7000" }
];

const evento_burger = document.querySelector('#burger');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_burger(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('burguer');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listBurger.filter( (item =>{
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



