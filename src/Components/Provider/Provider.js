import React, { createContext, useState } from 'react';

export const Datos = {
    nombre: "Alejandro",
    apellido: "Santanach",
    edad: 36
  }

export const DataContext = createContext();

const DataProvider = ({children}) => {
  
  const [state, setState] = useState(Datos);
  return (
    <DataContext.Provider value = {{state, setState}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;
