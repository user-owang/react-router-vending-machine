import { useState } from 'react'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'

function Item({itemName}){
  let img_url = ""
  if (itemName === "Cheetos"){
    img_url = "https://m.media-amazon.com/images/I/815uaAqc9aL.jpg"
  } else if (itemName === "Doritos"){
    img_url = "https://i5.walmartimages.com/seo/Doritos-Spicy-Sweet-Chili-Flavored-Tortilla-Chips-9-75-oz-Bag_f4514460-f7b0-436c-8505-07a0f3899862_1.b242b63beb566425a9b43db0126252eb.jpeg"
  } else if (itemName === "Mountain Dew"){
    img_url = "https://m.media-amazon.com/images/I/51nQ2G6UCwL._AC_UF894,1000_QL80_.jpg"
  }
  return(
    <>
      <h1>You've selected {itemName}</h1>
      <Link to="/">Back to vending machine home</Link>
      <img src={img_url} alt={itemName} />
    </>
  )
}

export default Item