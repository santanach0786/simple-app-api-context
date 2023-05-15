import React, { useContext } from 'react'
import { DataContext, Datos } from "./Provider/Provider";

const datos = {
    nombre: "Yarelis",
    edad: "Lopez",
    edad: 27
}

const Button = () => {
  const { setState } = useContext(DataContext);
  return (
    <button className='btn btn-primary'
            onClick={()=>setState(datos)}>Change Props</button>
  )
}

export default Button