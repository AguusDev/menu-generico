const listPizza = [
    { titulo : "muzzarella" , descripcion : "" , precio : "$ 6000" },
    { titulo : "muzzarella y jamón" , descripcion : "" , precio : "$ 6500" },
    { titulo : "jamón y morrón" , descripcion : "" , precio : "$ 6800" },
    { titulo : "jamon y huevo" , descripcion : "" , precio : "$ 6500" },
    { titulo : "primavera" , descripcion : "" , precio : "$ 7000" },
    { titulo : "fugazzeta" , descripcion : "" , precio : "$ 6800" },
    { titulo : "fugazzeta rellena" , descripcion : "" , precio : "$ 7500" },
    { titulo : "calabresa" , descripcion : "" , precio : "$ 7000" },
    { titulo : "panceta y verdeo" , descripcion : "" , precio : "$ 7200" },
    { titulo : "rucula y parmesano" , descripcion : "" , precio : "$ 6800" },
    { titulo : "jamon crudo" , descripcion : "" , precio : "$ 7500" },
    { titulo : "napolitana" , descripcion : "" , precio : "$ 6500" },
    { titulo : "napolitana y jamon" , descripcion : "" , precio : "$ 6800" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "empanadas c/u" , descripcion : "pollo - carne suave - j/q - cebolla y queso - caprese - verdura - roquefort y muzzarella" , precio : "$ 1200" },
];
const evento_pizza = document.querySelector('#pizza_emp');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_pizza(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('pizzas y empanadas');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);

    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listPizza.filter( (item =>{
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