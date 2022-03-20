import { useNavigate } from "react-router-dom";

const Cliente= ({cliente, handleEliminar})=> {


    const navigate = useNavigate()
    const {nombre, empresa, email,telefono, id} = cliente;
  return (
   <tr className="border hover:bg-gray-100">
       <td className='p-3'>{nombre}</td>
       <td className='p-3'>
        <p><span className="text-gray-800 uppercase font-bold">Email:</span> {email}</p>
        <p><span className="text-gray-800 uppercase font-bold">Telefono:</span> {telefono}</p>
       </td>
      
    
       <td className='p-3'>{empresa}</td>
       <td className='p-3'>

       <button 

                className="bg-yellow-600 hover:bg-yellow-700 rounded block w-full text-white p-2 m-2 uppercase font-bold text-xs" 
                type="button" onClick={()=> navigate(`/clientes/${id}`)}>Ver</button>


            <button 
            
                className="bg-blue-600 hover:bg-blue-700 block w-full rounded text-white p-2 m-2 uppercase font-bold text-xs" 
                type="button" onClick={()=> navigate(`/clientes/editar/${id}`)}>Editar</button>
            <button 

                className="bg-red-600 hover:bg-red-700 block w-full rounded text-white p-2 m-2 uppercase font-bold text-xs" 
                type="button"
                onClick={()=> handleEliminar(id)}
                >Eliminar</button>

       </td>

   </tr>

    

  )
}

export default Cliente