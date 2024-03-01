const listCafeteria = [
    { titulo : "cortado(cafeteria)" , descripcion : "" , precio : "$ 1200" },
    { titulo : "pocillo(cafeteria)" , descripcion : "" , precio : "$ 1000" },
    { titulo : "jarrito(cafeteria)" , descripcion : "" , precio : "$ 1200" },
    { titulo : "café doble(cafeteria)" , descripcion : "" , precio : "$ 1400" },
    { titulo : "café con leche(cafeteria)" , descripcion : "" , precio : "$ 1400" },
    { titulo : "café con crema(cafeteria)" , descripcion : "" , precio : "$ 1500" },
    { titulo : "lágrima(cafeteria)" , descripcion : "" , precio : "$ 1300" },
    { titulo : "cappuccino(cafeteria)" , descripcion : "" , precio : "$ 1600" },
    { titulo : "submarino(cafeteria)" , descripcion : "" , precio : "$ 1600" },
    { titulo : "frappuccino(cafeteria)" , descripcion : "" , precio : "$ 1600" },
    { titulo : "iced latte(cafeteria)" , descripcion : "" , precio : "$ 1600" },
    { titulo : "té común(cafeteria)" , descripcion : "" , precio : "$ 600" },
    { titulo : "té de hierbas(cafeteria)" , descripcion : "" , precio : "$ 650" },
    { titulo : "mate cocido(cafeteria)" , descripcion : "" , precio : "$ 600" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "medialuna" , descripcion : "" , precio : "$ 700" },
    { titulo : "2 medialuna con J/Q" , descripcion : "" , precio : "$ 2000" },
    { titulo : "croissant" , descripcion : "" , precio : "$ 1200" },
    { titulo : "croissant con J/Q" , descripcion : "" , precio : "$ 2000" },
    { titulo : "tostado pan de miga" , descripcion : "" , precio : "$ 2500" },
    { titulo : "tostado pan arabe" , descripcion : "" , precio : "$ 2800" },
    { titulo : "tostado pan de campo" , descripcion : "" , precio : "$ 2800" },
    { titulo : "torta individual" , descripcion : "" , precio : "$ 2800" },
    { titulo : "3 tostadas" , descripcion : "queso crema, mermelada y/o manteca" , precio : "$ 2500" },
    { titulo : "pan de queso" , descripcion : "3 unidades" , precio : "$ 1500" },
    { titulo : "huevos revueltos con pan de campo" , descripcion : "" , precio : "$ 3000" },
    { titulo : "avocado toast" , descripcion : "toston de pan de campo, con pasta de palta, huevo revuelto y semillas" , precio : "$ 3500" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "flan casero" , descripcion : "" , precio : "$ 1500" },
    { titulo : "budin de pan" , descripcion : "" , precio : "$ 1800" },
    { titulo : "panqueque" , descripcion : "dulce de leche " , precio : "$ 2500" },
    { titulo : "panqueque" , descripcion : "salsa de frutilla, frutas de estacion y caramelo" , precio : "$ 3000" },
    { titulo : "ensalada de frutas" , descripcion : "" , precio : "$ 2000" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "cafe con leche/te, tostadas con queso crema y mermelada, exprimido natural de naranja o limonada" , descripcion : "" , precio : "$ 5000" },
    { titulo : "cafe con leche/te, pan de campo con huevos revueltos y exprimido natural de naranja o limonada" , descripcion : "" , precio : "$ 6000" },
    { titulo : "cafe con leche/te, tostados de jamon y queso y exprimido natural de naranja o limonada" , descripcion : "" , precio : "$ 5500" },
    { titulo : "2 cafe con leche/te, 2 porciones de tostadas con queso crema y mermelada y 2 exprimidos naturales de naranja o limonada" , descripcion : "" , precio : "$ 6800" },
    { titulo : "2 cafe con leche/te, tostados de jamon y queso, torta individual y 2 exprimidos naturales de naranja o limonada(chicos)" , descripcion : "" , precio : "$ 9000" },
    { titulo : "2 cafe con leche/te, frutas de estacion, 3 unidades de pan de queso y 2 exprimidos naturales de naranja o limonada(chicos)" , descripcion : "" , precio : "$ 6500" },

];

const evento_cafeteria = document.querySelector('#cafe_postre');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_cafeteria(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('cafeteria y postres');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listCafeteria.filter( (item =>{
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