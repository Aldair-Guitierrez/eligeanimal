import React, {Fragment} from 'react';


const Boton = () =>{
    const cambiarBoton = selected => ()=>{
        switch(selected){
            case 1:
                document.getElementById("mostrar").src="https://w7.pngwing.com/pngs/50/72/png-transparent-giraffe-northern-giraffe-neck-zoo-animal-giraffe-game-mammal-animals-thumbnail.png";
            break;
            case 2:
                document.getElementById("mostrar").src="https://i.pinimg.com/474x/d0/10/7c/d0107c676a7557e0edc62b832c93233c.jpg";
            break;
            case 3: 
                document.getElementById("mostrar").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJuAOR_8sLOxpwLpqpYkYJJCf80s8QX3ztxQ&usqp=CAU"
            break;
            case 4: 
                document.getElementById("mostrar").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSL76eT6fBrO_10D4eiia0aGkQ1MXF_yFFlg&usqp=CAU";
            break;
            case 5:
                document.getElementById("mostrar").src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV3YkMQ89XEsEBJ4tqZfu6ND6sXTx2XysgdQ&usqp=CAU";
            break;
        }
    }

    return(
        <Fragment>
            <center>
            <div>
            <button  type="button"  onClick={cambiarBoton(1)}>Jirafa</button>
            <button  type="button"  onClick={cambiarBoton(2)}>Zorro</button>
            <button  type="button"  onClick={cambiarBoton(3)}>Gato</button>
            <button  type="button"  onClick={cambiarBoton(4)}>Llama</button>
            <button  type="button"  onClick={cambiarBoton(5)}>Venado</button>
            
            <hr size="10" width="700px"></hr>
            <img id="mostrar"></img>
            </div>
            </center>
        </Fragment>
    );
}

export default Boton;