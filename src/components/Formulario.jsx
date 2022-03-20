import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup'
import Spinner from "../components/spinner";
const Formulario = ({cliente, cargando}) => {

    const navigate = useNavigate()



    // ErrorMessage       <ErrorMessage name="nombre" /> muestra el error sin formateo


    const nuevoClienteScheme = Yup.object().shape({

            nombre:Yup.string()
                    .min(5,'El nombre es muy corto')   
                    .max(30,'El nombre es muy largo') 
                    .required('Nombre del Cliente es Obligatorio'),
            empresa:Yup.string().required('Nombre de la Empresa es Obligatorio'),
            email:Yup.string()
                    .email('Email no Valido')
                    .required('Email del Cliente es Obligatorio'),
            telefono:Yup.number()
                    .positive('Formato de numero invalido')
                    .integer('Formato de numero invalido')
                    .typeError('El numero no es valido')    
                    .required('Telefono del Cliente es Obligatorio'),
            notas:Yup.string().required('Notas del Cliente es Obligatorio'),
          





    })


     const handleSubmit = async(valores)=>{
        //console.log(valores)
        try {

            let respuesta;
            if (cliente.id){
               
                //editar un registro
                const url = `http://localhost:4000/clientes/${cliente.id}`
                  respuesta = await fetch(url,{
                    method:'PUT',
                    body:JSON.stringify(valores),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                
                
               
              
            }else{

                //nuevo registro
                const url = 'http://localhost:4000/clientes'
                  respuesta = await fetch(url,{
                    method:'POST',
                    body:JSON.stringify(valores),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
               
    
    
    


            }

          
             await respuesta.json()
           
            navigate('/clientes')
            
        } catch (error) {
            console.log(error)
            
        }

     }
    return ( 

        cargando ? <Spinner /> : (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
            <h1 className='font-bold text-xl text-gray-600 uppercase  text-center'>
                {cliente.nombre ? 'Editar Cliente' : 'Agregar cliente'}
            </h1>


            <Formik

                initialValues={{
                    nombre: cliente?.nombre ?? "",
                    empresa:cliente?.empresa ?? "",
                    email:cliente?.email ?? "",
                    telefono:cliente?.telefono ?? "",
                    notas:cliente?.notas ?? "",
                }}

                    enableReinitialize={true}

                    onSubmit={async(values,{resetForm})=>{
                        await handleSubmit(values)
                        resetForm()
                    }}

                    validationSchema={nuevoClienteScheme}

                  

                >  

                {(
                    {
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                        /* and other goodies */
                      }
                )=> {
            //console.log(touched)
                    return (
                <Form className='mt-10'>
                    <div className='mb-3'>
                        <label 
                            className='text-gray-800'
                            htmlFor='nombre'
                        >Nombre :</label>
                        <Field 

                            id="nombre"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre del Cliente"
                            name="nombre"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.nombre}
                           
                        />
                        {errors.nombre && touched.nombre && errors.nombre ? (
                            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                                    {errors.nombre}
                            </div>
                         ) : null 
                          
                        }

                     
                        
                    </div>
                    <div className='mb-3'>
                        <label 
                            className='text-gray-800'
                            htmlFor='empresa'
                        >Empresa :</label>
                        <Field 

                            id="empresa"
                            type="text"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Nombre Empresa"
                            name="empresa"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.empresa}
                        />
                         {errors.empresa && touched.empresa && errors.empresa ? (
                            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                                    {errors.empresa}
                            </div>
                         ) : null 
                          
                        }
                    </div>
                    <div className='mb-3'>
                        <label 
                            className='text-gray-800'
                            htmlFor='email'
                        >E-mail :</label>
                        <Field 

                            id="email"
                            type="email"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Email del Cliente"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                           
                        />
                        {errors.email && touched.email && errors.email ? (
                            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                                    {errors.email}
                            </div>
                         ) : null 
                          
                        }
                    </div>
                    <div className='mb-3'>
                        <label 
                            className='text-gray-800'
                            htmlFor='telefono'
                        >Telefono :</label>
                        <Field 

                            id="telefono"
                            type="tel"
                            className="mt-2 block w-full p-3 bg-gray-50"
                            placeholder="Telefono del Cliente"
                            name="telefono"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.telefono}
                           
                        />
                        {errors.telefono && touched.telefono && errors.telefono ? (
                            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                                    {errors.telefono}
                            </div>
                         ) : null 
                          
                        }
                    </div>
                    <div className='mb-3'>
                        <label 
                            className='text-gray-800'
                            htmlFor='notas'
                        >Notas :</label>
                        <Field 
                            as="textarea"
                            id="notas"
                            type="notas"
                            className="mt-2 block w-full p-3 bg-gray-50 h-40"
                            placeholder="Notas de Cliente"
                            name="notas"
                            
                           
                        />
                        {errors.notas && touched.notas && errors.notas ? (
                            <div className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
                                    {errors.notas}
                            </div>
                         ) : null 
                          
                        }
                    </div>

                    <input 
                        type="submit"
                        value={cliente.nombre ? 'Editar Cliente' : 'Agregar cliente'} 
                        className="font-bold text-lg w-full mt-5 bg-blue-800 p-3 text-white uperrcase"
                    />
                </Form>
            )}}
            </Formik>
       
        </div>
        )
     );
}

Formulario.defaultProps= {

    cliente: {},
    cargando : false

}
 
export default Formulario;