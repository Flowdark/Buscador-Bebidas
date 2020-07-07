import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../Context/CategoriasContext';
import { RecetasContext } from '../Context/RecetasContext';

const Formulario = () => {

    const { categorias } = useContext( CategoriasContext );

    const [ busqueda, guardarBusqueda ] = useState({
        nombre: "",
        categoria: ""
    });

    const { buscarRecetas, guardarConsultar } = useContext(RecetasContext);

    const obtenerDatosReceta = e => {
        e.preventDefault();

        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })

    }

    return ( 
        <form className="col-12"
            onSubmit={ e => {
                e.preventDefault();
                buscarRecetas(busqueda)
                guardarConsultar(true);
            } }
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o Ingredientes</legend>
            </fieldset>

            <div className="row">
                <div className="col-md-4">
                    <input 
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">Selecciona Categoria</option>
                        { categorias.map( categoria => (
                            <option key={categoria.strCategory} 
                                    value={categoria.strCategory}
                            >{categoria.strCategory}
                            </option>
                        ) ) }
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit"
                        value="Buscar Recetas"
                        className="btn btn-block btn-primary"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Formulario;