import React,{useEffect} from 'react'
import api from './api/students'
function App() {
  const getStudentsdata = async() => {
    const resp = await api.get('/students')
    console.log(resp.data)
    return resp.data;
  }
  useEffect(()=>{
    getStudentsdata()
  },[])
  return (
    <div className="App">
    <h1>Hello React!!</h1>
    </div>
  );
}

export default App;
