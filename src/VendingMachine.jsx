import {useState} from "react"
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function VendingMachine(){
  return(
    <>
      <h1>Vending machine options</h1>
      <ul>
        <li><Link to="/cheetos">Cheetos</Link></li>
        <li><Link to="/doritos">Doritos</Link></li>
        <li><Link to="/mtndew">Mountain Dew</Link></li>
      </ul>
    </>
  )
}
export default VendingMachine