import { useEffect, useState,Fragment } from "react";
import { useParams} from "react-router-dom";
import Spinner from "../components/spinner";



const VerCliente = () => {
    

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
                        //console.log(resultado)

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
   

       

   
    return ( 

            cargando ? <Spinner /> :  
            Object.keys(cliente).length === 0 ? 
            <p>no hay resultados</p> :
            (
           



     <Fragment>   

    <div>

       



            

            <>
                { cliente.nombre && (
                <p className="text-4xl">
                    <span className="text-gray-700 uppercase font-bold">
                        Cliente : 
                    </span>
                    {cliente.nombre}
                </p>
                )}
                <hr />
                <br />

                {cliente.empresa && (
                <p className="text-2xl">
                    <span className="text-gray-500 uppercase font-bold">
                        Empresa : 
                    </span>
                    {cliente.empresa}
                
                </p>

                )}

                {cliente.email && (
                <p className="text-2xl">
                    <span className="text-gray-500 uppercase font-bold">
                        Email : 
                    </span>
                    {cliente.email}
                    
                </p>
                )}

                {cliente.telefono && (
                <p className="text-2xl">
                    <span className="text-gray-500 uppercase font-bold">
                        Telefono : 
                    </span>
                    {cliente.telefono}
                    
                </p>

                )}

                {cliente.notas && (    
                <p className="text-2xl">
                    <span className="text-gray-500 uppercase font-bold">
                        Notas : 
                    </span>
                    {cliente.notas}
                </p>
                )}
                 </>
        
       
    
    </div>

    </Fragment>
    )
     );
}
 
export default VerCliente;