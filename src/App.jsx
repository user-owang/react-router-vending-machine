import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import VendingMachine from "./VendingMachine.jsx"
import Item from "./Item.jsx"


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/cheetos" element={<Item itemName="Cheetos"/>} />
          <Route path="/doritos" element={<Item itemName="Doritos"/>} />
          <Route path="/mtndew" element={<Item itemName="Mountain Dew"/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
