import React,{useState, useEffect} from 'react'
import Cliente from '../components/Cliente'
const Inicio = () => {

    const [clientes,setClientes] = useState([])


    useEffect(()=>{
        const obtenerClientesAPI = async ()=>{
            try {
                const  url = 'http://localhost:4000/clientes'
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setClientes(resultado)
                //resultadoarray={setClientes}
            } catch (error) {
                console.log(error)                    
            }
        }

        obtenerClientesAPI()
    },[])
    

    const handleEliminar = async id => {

        // funcion para confirmar de javascript para borrar
        const eliminar = confirm('¿Deseas eliminar el cliente')

        if(eliminar){
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url,{
                  method:'DELETE',
              })

              //sirve para recargar la pagina
              //location.reload()

              //vamos a filtrar un arreglo nuevo sin mutarlo con .filter
              const arrayClientes = clientes.filter(cliente => cliente.id !== id)

              //le paamos el arreglo con set clientes
              setClientes(arrayClientes)

              await respuesta.json()
            } catch (error) {
                
            }

        }
       
       
    
     
            console.log(`eliminando... ${id}`)

    }
 
    return ( 

       



        <div>
             <div>
            <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
            <p className='p-3'>Administra tu Clientes</p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                       
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map(cliente => (
                            <Cliente 
                                key={cliente.id}
                                cliente={cliente}
                                handleEliminar={handleEliminar}

                            
                            />
                    ))}
                </tbody>

            </table>

            
        </div>
        </div>
     );
}
 
export default Inicio;