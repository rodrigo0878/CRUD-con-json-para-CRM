import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Layout from './layout/Layout'
import Inicio from './paginas/Inicio'

import EditarCliente from './paginas/EditarCliente'
import NuevoCliente from './paginas/NuevoCliente'
import VerCliente from './paginas/verCliente'


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
        
            
              <Route path="/clientes" element={<Layout />} >
                    <Route index element={<Inicio />}/>
                    <Route path="/clientes/nuevo" element={<NuevoCliente />} />
                    <Route path="/clientes/editar/:id" element={<EditarCliente />} />
                    <Route path=":id" element={<VerCliente />} />
               
              </Route>
                  

              
             
        </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
