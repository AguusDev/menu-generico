const listEntrada = [
    { titulo : "sudestada" , descripcion : "porcion de papas fritas o batatas fritas" , precio : "$ 3500" },
    { titulo : "sudestada full" , descripcion : "porcion de papas fritas con cheddar, bacon y verdeo" , precio : "$ 4000" },
    { titulo : "sudestada provenzal" , descripcion : "porcion de papas fritas o batatas fritas con ajo y perejil" , precio : "$ 3800" },
    { titulo : "island" , descripcion : "6 fingers de pollo con salsa cheddas y barbacoa acompañado con papas fritas" , precio : "$ 7000" },
    { titulo : "ancla" , descripcion : "6 bastones de muzzarella acompañadas de salsa cheddar, barbacoa con papas fritas" , precio : "$ 6800" },
    { titulo : "río" , descripcion : "porcion de aros de cebolla" , precio : "$ 4000" },
    { titulo : "pilon" , descripcion : "pancho aleman" , precio : "$ 1700" },
    { titulo : "amadeus" , descripcion : "pancho aleman con jamon y queso" , precio : "$ 2000" },
    { titulo : "amarra" , descripcion : "jamon cocido, jamon crudo, queso tybo, queso sardo, salame, aceitunas, roquuefort, mani, berenjenas" , precio : "$ 8000" },
    { titulo : "del arca" , descripcion : "fingers de pollo, bastones de muzzarella, salchichas alemanas y papas fritas" , precio : "$ 9500" },
    { titulo : "del arca full" , descripcion : "fingers de pollo, bastones de muzzarella, salchichas alemanas, aros de cebolla y papas fritas" , precio : "$ 10500" }
];

const evento_entrada = document.querySelector('#entrada_picada');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_entrada(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('entrada y picadas');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listEntrada.filter( (item =>{
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
