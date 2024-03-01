const listFood = [
    { titulo : "suprema" , descripcion : "acompañado con guarnicion" , precio : "$ 6000" },
    { titulo : "suprema a caballo" , descripcion : "dos huevos fritos con guarnicion" , precio : "$ 6300" },
    { titulo : "suprema napolitana" , descripcion : "con jamon y queso, salsa de tomate y guarnicion" , precio : "$ 6500" },
    { titulo : "milanesa" , descripcion : "con guarnicion" , precio : "$ 6300" },
    { titulo : "milanesa a caballo" , descripcion : "acompañado con dos huevos fritos y guarnicion" , precio : "$ 6700" },
    { titulo : "milanesa napolitana" , descripcion : "con jamon y queso, salsa de tomate con guarnicion" , precio : "$ 7000" },
    { titulo : "lomito" , descripcion : "con guarnicion" , precio : "$ 7000" },
    { titulo : "bondiola" , descripcion : "con guarnicion" , precio : "$ 6800" },
    { titulo : "pechuga grille" , descripcion : "con guarnicion" , precio : "$ 7000" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "filet de merluza" , descripcion : "con guarnicion" , precio : "$ 6500" },
    { titulo : "filet a la romana" , descripcion : "acompañado con bouquet de rucula, parmesano o papas noisette" , precio : "$ 6800" },
    { titulo : "filet al roquefort" , descripcion : "acompañado con bouquet de rucula, parmesano o papas noisette" , precio : "$ 7000" },
    { titulo : "pipa" , descripcion : "porcion de rabas, con dos salsas" , precio : "$ 7500" },
    { titulo : "pipa a la provenzal" , descripcion : "porcion de rabas con perejil y ajo, con dos salsas" , precio : "$ 8000" },
    { titulo : "barco" , descripcion : "porcion de langostinos rebozados, con dos salsas" , precio : "$ 8000" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "menu tarta" , descripcion : "porcion de tarta o tartin con mix de hojas verdes, bebida, cafe o postre" , precio : "$ 5000" },
    { titulo : "popeyito(infantil)" , descripcion : "hamburgesa con queso" , precio : "$ 4500" },
    { titulo : "anclita(infantil)" , descripcion : "6 fingers de pollo y salsa a eleccion(cheddar o bacon)" , precio : "$ 4500" },
    { titulo : "papeyito(infantil)" , descripcion : "milanesa de ternera" , precio : "$ 8000" },
];


const evento_food = document.querySelector('#food');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_food(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('food');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);

    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listFood.filter( (item =>{
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

