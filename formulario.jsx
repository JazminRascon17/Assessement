import React, {useState} from 'react';
import uniqid from 'uniqid'

export default function Formulario(props) {

    const [Nombre, setNombre] = useState('')
    const [Fecha, setFecha] = useState('')
    const [Descripcion, setDescripcion] = useState('')
    const [Lista, setLista] = useState([])

    const cambiarNombre = (e) => {
        setNombre(e.target.value);
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre:Nombre
        }
        
        setLista([...Lista,nuevoNombre])
        
    }
    const cambiarFecha = (e) => {
       setFecha(e.target.value);
       const nuevoFecha ={
        id:uniqid(),
        tituloFecha:Fecha
       }
       setLista([...Lista,nuevoFecha])
       
       
       
    }
    const cambiarDescripcion = (e) => {
        setDescripcion(e.target.value);
        const nuevoDescripcion ={
            id:uniqid(),
            tituloDescripcion:Descripcion
        }
        setLista([...Lista,nuevoDescripcion])
        
    }
    const enviarDatos = (e) => {
        e.preventDefault();
        console.log(setNombre);


         
    }
    

    return(
        <div> 
            <div className="row">
                <div className="col">
                    <h2>Lista</h2>
                </div>
            <form onSubmit={enviarDatos}>
                
                <h2>Tareas</h2>
                

                <label>Nombre
                <input className="form-control mb-3" type="text" 
                value={Nombre} 
                onChange={cambiarNombre}
                placeholder="Intruduce tu nombre"
                
                />
                
                </label>
                <br/>
                <label> Fecha 
                <input className="form-control mb-3"type="text" 
                     value={Fecha} 
                     onChange={cambiarFecha}
                     placeholder="Intruduce la fecha de entrega"
                     />  
                </label>
                <br/>
                <label> Descripcion 
                    <input className="form-control mb-3" type="text" 
                    value={Descripcion} 
                    onChange={cambiarDescripcion}
                    placeholder="descripcion de la tarea"
                    />

                </label>
                <br/>

                <button type="submit">Guardar</button>

                <ul className="list-group">
                    {
                         Lista.map(item=>
                            <li key={item.id} className="list-group-item"> {item.tituloNombre} </li> 
                            )          
                    }
                    {
                         Lista.map(item=>
                            <li key={item.id} className="list-group-item"> {item.tituloFecha} </li> 
                            )          
                    }
                    {
                         Lista.map(item=>
                            <li key={item.id} className="list-group-item"> {item.tituloDescripcion} </li> 
                            )          
                    }
                </ul>
            </form>
            
            </div>
        </div>
    )
}