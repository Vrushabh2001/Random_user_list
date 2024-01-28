import logo from './logo.svg';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [num,setNum] = useState(6);
  const [list,setList] = useState([]);
  const url = "https://randomuser.me/api/?results="+num;

  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const res = await axios.get(url);
        setList(res.data.results);
      }
      catch(error){
        console.error('fech error:', error)
      }
    }
    fetchData();
  },[num])


  return (
    <div className='bg-slate-200 h-vh '>
      <h1 className='text-2xl text-center text-blue-500'>Random user list</h1>
      <input placeholder='Enter number' className='border-2 border-black p-2 m-2 rounded-lg shadow-lg' type='number' onChange={(event)=>setNum(event.target.value)}/>
      <div className='sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {list.map((user, index) => (
          <div key={index} className='user-card bg-white p-4 m-2 rounded-lg shadow-2xl'>
            <img src={user.picture.medium} alt='User Thumbnail' className='rounded-full mb-4 mx-auto' />
            <div>
              <p className='text-blue-500 font-semibold'>{user.name.first} {user.name.last}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>City: {user.location.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}

export default App;
