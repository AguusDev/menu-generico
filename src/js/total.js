import {filtro_pizza} from "./pizza_emp.js";
import {filtro_burger} from "./burger.js";
import { filtro_food } from "./food.js";
import { filtro_parrilla } from "./parrilla.js";
import { filtro_sandwiches } from "./sandwiches.js";
import { filtro_other } from "./other.js";
import { filtro_ensalada } from "./ensalada_guar.js";
import { filtro_entrada } from "./entrada.js";
import { filtro_bebida } from "./bebida.js";
import { filtro_bebidaAlc } from "./bebidaAlcoholica.js";
import { filtro_cafeteria } from "./cafe_postre.js";


const itemMenu = document.querySelectorAll("button");

itemMenu.forEach( item => {
    item.addEventListener("click", ()=> {
        preViewDelete()
        if (item.id == "pizza_emp"){
            filtro_pizza()
        }
        else if(item.id == "burger"){
            filtro_burger()
        }else if(item.id == "food"){
            filtro_food()
        }
        else if(item.id == "parrilla"){
            filtro_parrilla()
        }
        else if(item.id == "sandwiches"){
            filtro_sandwiches()
        }
        else if(item.id == "other"){
            filtro_other()
        }
        else if(item.id == "ensalada_guar"){
            filtro_ensalada()
        }
        else if(item.id == "entrada_picada"){
            filtro_entrada()
        }
        else if(item.id == "bebidas"){
            filtro_bebida()
        }
        else if(item.id == "bebida_alc"){
            filtro_bebidaAlc()
        }
        else if(item.id == "cafe_postre"){
            filtro_cafeteria()
        }
    })
})

const preViewDelete = () =>{
    let vistaMenu = document.querySelector('#vista-menu').innerHTML = "";
}