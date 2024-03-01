const listOther = [
    { titulo : "tarta de jamon y queso" , descripcion : "porcion de tarta de jamon y queso, tomate y huevo" , precio : "$ 3000" },
    { titulo : "tarta de verdura" , descripcion : "porcion de tarta de espinaca, queso y huevo" , precio : "$ 3000" },
    { titulo : "tartines" , descripcion : "champiñon, pollo y jamon / calabaza y choclo / brocoli / zapallito /integral calabaza y acelga / puerro y pollo / calabaza y queso / jamon y queso / queso y cebolla / capresse / integral zanahoria y verdeo / integral puerro y champiñon." , precio : "$ 2600" },
    { titulo : "porcion de tortilla de papa" , descripcion : "" , precio : "$ 1500" },
    { titulo : "tortilla de papa entera" , descripcion : "" , precio : "$ 3500" },
    { titulo : "wrap" , descripcion : "pollo / peceto / jamon y queso / capresse" , precio : "$ 5500" },
    { titulo : "olivia doble" , descripcion : "doble medallon de carne con lechuga, tomate, queso dambo y cebolla caramelizada" , precio : "$ 6700" },
    { titulo : "notburger cocoliso simple" , descripcion : "medallon a base de plantas con lechuga, tomate y queso" , precio : "$ 5500" },
    { titulo : "gravy" , descripcion : "medallon de carne con lechuga, pepinos agridulces, morrones asados y cheddar" , precio : "$ 6800" },
    { titulo : "castor olivo" , descripcion : "doble medallon de carne con lechuga, tomate, salsa bbc, panceta y cheddar" , precio : "$ 7000" }
];

const evento_other = document.querySelector('#other');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_other(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('otras opciones');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listOther.filter( (item =>{
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
