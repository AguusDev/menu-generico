const listAcompaniamento = [
    { titulo : "nana" , descripcion : "ensalada de lechuga, tomate, zanahoria y pollo crocante con hiervas" , precio : "$ 4500" },
    { titulo : "bruja de mar" , descripcion : "ensalada de arroz, atun, huevo, zanahoria y lechuga" , precio : "$ 5000" },
    { titulo : "cesar" , descripcion : "mezcla de hojas verdes, crutones, queso parmesano, aderezo cesar y pollo grille" , precio : "$ 4500" },
    { titulo : "arca salad" , descripcion : "ensaladda 3 gustos a eleccion" , precio : "$ 3200" },
    { titulo : "arca salad especial" , descripcion : "3 gustos a eleccion, pollo, atun, parmesano, jamon y queso, tomate, lechuga, rucula y zanahoria" , precio : "$ 3500" },
    { titulo : "pure de papa/calabaza(guarnicion)" , descripcion : "" , precio : "$ 2500" },
    { titulo : "pure mixto" , descripcion : "" , precio : "$ 2800" },
    { titulo : "huevo frito(2)" , descripcion : "" , precio : "$ 1800" }
];

const evento_ensalada = document.querySelector('#ensalada_guar');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_ensalada(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('ensalada y guarnicion');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listAcompaniamento.filter( (item =>{
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
