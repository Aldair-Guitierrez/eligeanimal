import React, {Fragment} from 'react';


const Boton = () =>{
    const cambiarBoton = selected => ()=>{
        switch(selected){
            case 1:
                document.getElementById("mostrar").src="https://st.depositphotos.com/1594920/1698/i/600/depositphotos_16982455-stock-photo-somali-giraffe-commonly-known-as.jpg";
            break;
            case 2:
                document.getElementById("mostrar").src="https://i.pinimg.com/474x/d0/10/7c/d0107c676a7557e0edc62b832c93233c.jpg";
            break;
            case 3: 
                document.getElementById("mostrar").src="https://s1.1zoom.me/big0/690/Cats_White_background_Glance_Paws_567619_1167x1024.jpg"
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