import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

//Crear el context

export const ModalContext = createContext();

const ModalProvider = (props) => {

    //State del Provider
    const [ idreceta, guardarIdReceta ] = useState(null);

    //Guardar información de la Receta

    const [ informacion, guardarReceta ] = useState({

    });

    //Consultar API
    useEffect( () => {

        if( !idreceta ) return;

        const informacionReceta = async () => {

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idreceta}`;
            const resultado = await axios.get(url);

            guardarReceta(resultado.data.drinks[0]);

        }

        informacionReceta();

    }, [idreceta] );

    return ( 
        <ModalContext.Provider
            value={{
                informacion,
                guardarIdReceta,
                guardarReceta
            }}
        >
            {props.children}
        </ModalContext.Provider>
     );
}
 
export default ModalProvider;