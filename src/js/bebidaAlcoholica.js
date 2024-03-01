const listBebidaAlc = [
    { titulo : "benjamin (vinos)" , descripcion : "" , precio : "$ 9500" },
    { titulo : "callia (vinos)" , descripcion : "" , precio : "$ 7000" },
    { titulo : "nieto senetiner (vinos)" , descripcion : "" , precio : "$ 13000" },
    { titulo : "portillo (vinos)" , descripcion : "" , precio : "$ 9500" },
    { titulo : "cafayate (vinos)" , descripcion : "" , precio : "$ 7500" },
    { titulo : "cosecha tardia (vinos)" , descripcion : "" , precio : "$ 8000" },
    { titulo : "perro callejero (vinos)" , descripcion : "" , precio : "$ 8000" },
    { titulo : "trumpeter (vinos)" , descripcion : "" , precio : "$ 18000" },
    { titulo : "rutini (vinos)" , descripcion : "" , precio : "$ 18000" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "garibaldi" , descripcion : "campari, jugo de naranja exprimido, rodaja de naranja" , precio : "$ 2500" },
    { titulo : "fernet" , descripcion : "coca-cola" , precio : "$ 2600" },
    { titulo : "margarita" , descripcion : "tequila blanco, hesperidina, limon y almibar" , precio : "$ 2700" },
    { titulo : "daiquiri frozen" , descripcion : "ron, almibar, limon, maracuya / durazno / frutilla" , precio : "$ 2700" },
    { titulo : "negroni" , descripcion : "gin artesanal, capari, vermouth" , precio : "$ 2600" },
    { titulo : "cosmopolitan" , descripcion : "vodka, licor de naranja, cascara de limon, jugo de arandano y jugo de limon" , precio : "$ 2800" },
    { titulo : "mojito" , descripcion : "ron blanco, agua con gas, jugo de lima y menta" , precio : "$ 2600" },
    { titulo : "penicillin" , descripcion : "whisky, jugo de limon, miel y jengibre" , precio : "$ 2900" },
    { titulo : "caipiraña" , descripcion : "cachaca, lima macerada y gaseosa lima" , precio : "$ 2600" },
    { titulo : "caipiroska" , descripcion : "vodka, lima macerada y gaseosa lima" , precio : "$ 2600" },
    { titulo : "caipirissima" , descripcion : "ron, lima macerada y gaseosa lima" , precio : "$ 2800" },
    { titulo : "manhattan" , descripcion : "whisky, martini rojo" , precio : "$ 2800" },
    { titulo : "na" , descripcion : "whisky, acido citrico de manzana verde, miel y clara de huevo" , precio : "$ 2600" },
    { titulo : "apple martini" , descripcion : "vodka, licor de manzana y zumo de manzana" , precio : "$ 2600" },
    { titulo : "martini dry" , descripcion : "ginebra, vermut blanco, limon y aceitunas" , precio : "$ 2800" },
    { titulo : "cuba libre" , descripcion : "ron blanco, gaseosa coca-cola y jugo de lima" , precio : "$ 2500" },
    { titulo : "mai tai" , descripcion : "ron, zumo de lima, licor, granadina, piña y cerezas" , precio : "$ 2600" },
    { titulo : "gin tonic" , descripcion : "" , precio : "$ 2300" },
    { titulo : "gancia batido" , descripcion : "gancia y jugo de limon" , precio : "$ 2300" },
    { titulo : "whiscola" , descripcion : "whisky y coca-cola" , precio : "$ 2600" },
    { titulo : "destornillador" , descripcion : "vodka y jugo de naranja" , precio : "$ 2300" },
    { titulo : "aperol" , descripcion : "aperol y jugo de naranja" , precio : "$ 2600" },
    { titulo : "whisky" , descripcion : "medida de whisky" , precio : "$ 2500" },
    { titulo : "tequila" , descripcion : "medida de tequila" , precio : "$ 2300" },
    { titulo : "" , descripcion : "" , precio : "" },
    { titulo : "isabella(de autor)" , descripcion : "gin con flores, almibar de rosas, jugo de pomelo, acido citrico de frutilla y agua tonica" , precio : "$ 2700" },
    { titulo : "antony(de autor)" , descripcion : "gin, con jugo de lima, limon, jugo de pomelo, acido citrico de mango-maracuya y agua tonica" , precio : "$ 2700" },
    { titulo : "kendall(de autor)" , descripcion : "gin, acido citrico de frutilla, almibar de uva y agua tonica" , precio : "$ 2700" },
    { titulo : "matheo(de autor)" , descripcion : "gin, acido citrico de mandarina, jugo de naranja y agua tonica" , precio : "$ 2700" },
    { titulo : "malena(de autor)" , descripcion : "gin, acido citrico de uva, ajugo de pomelo, jugo de naranja y agua tonica" , precio : "$ 2700" },
    { titulo : "olivia(de autor)" , descripcion : "gin, acido citrico de menta, jengibre, limon, apio y agua tonica" , precio : "$ 2700" },
];

const evento_bebidaAlc = document.querySelector('#bebida_alc');
let vistaMenu = document.querySelector('#vista-menu');

export function filtro_bebidaAlc(){

    let titulo_stock = document.createElement('H2');
    let contenido_titulo = document.createTextNode('bebidas con alcohol');
    titulo_stock.classList.add('titulo-menu')
    titulo_stock.appendChild(contenido_titulo);
    vistaMenu.appendChild(titulo_stock);
    
    let cards_container = document.createElement('DIV');
    cards_container.classList.add('cards-container');

    listBebidaAlc.filter( (item =>{
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