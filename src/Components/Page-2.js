import React, { useContext } from 'react'
import { DataContext } from './Provider/Provider';

const Page2 = () => {
  const {state} = useContext(DataContext);
  return (
    <div>
        <h1>Page 2</h1>
        {JSON.stringify(state, null, 2)}
    </div>
  );
}

export default Page2