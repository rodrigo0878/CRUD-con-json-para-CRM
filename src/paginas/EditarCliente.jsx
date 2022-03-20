
import { useEffect, useState,Fragment } from "react";
import { useParams} from "react-router-dom";
import Formulario from '../components/Formulario';
const EditarCliente = () => {

    const [cargando, setCargando] = useState(true)
    const [cliente, setClientes] = useState({})
    const {id} = useParams()
    //console.log(Params)
    //console.log(id)
    

    useEffect(()=>{

       // console.log('desde useeefect')
       
       //console.log(cargando)

       

                const obtenerClientesAPI = async ()=>{

                    try {
                        const  url = `http://localhost:4000/clientes/${id}`
                        const respuesta = await fetch(url)
                        const resultado = await respuesta.json()
                        setClientes(resultado)
                        console.log(resultado)

                        //console.log('desde el fecht')
                    
                    
                    } catch (error) {
                        console.log(error)     
                        console.log('no funciono')               
                    }


                    setTimeout(()=>{
                        setCargando(!cargando)
                    },2000)
                   

                }

                obtenerClientesAPI();
           
          

    },[])

    /*  ternario de una sola salida

    
            {cliente?.nombre && (
                 <Formulario 
                 cliente = {cliente}
                 cargando={cargando}
             />
            )}

     */       
   
    return ( 

        <div>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='p-3'>Edite el formulario para mofificar un cliente</p>

            {cliente?.nombre ? (
                 <Formulario 
                 cliente = {cliente}
                 cargando={cargando}
             />
            ) : <p>cliente no existe</p> 
            } 

           

        </div>
     );
}
 
export default EditarCliente;