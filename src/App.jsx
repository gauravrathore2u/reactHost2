import React, { useEffect } from 'react'
import './App.css'
import { setStudents } from '../api';
import DataTable from './DataTable';

function App() {

const onSetData = async()=>{
  const response = await setStudents();
  console.log(response);
}
  return (
   <div>
    
    <h1>This is project 2</h1>
    <button onClick={onSetData}>Hit button</button>

    <div>
      <DataTable/>
    </div>
   </div>
  )
}

export default App
