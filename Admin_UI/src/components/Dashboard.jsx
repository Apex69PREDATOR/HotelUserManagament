import Nav from './Nav'
import Searchbar from './searchbar'
import { Outlet } from 'react-router-dom'
import AdminRootContext from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Dashboard = () => {
  const nav= useNavigate()
  const token = localStorage.getItem('hotelToken')
  const validateToken=async ()=>{
       const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/check`,{method:"GET",headers:{
        'Authorization' : `Bearer ${token}`
       }})
      //  const res  =  await response.json()

       if(!response.ok)
        nav('/login')
  }
  useEffect(()=>{
    validateToken()
  },[])
  return (
    <AdminRootContext>
    <div className='flex md:flex-row flex-col md:p-4 p-0 gap-6'>
      <Nav/>
      <Searchbar/>
      <main className='md:mt-[10vh]'>
      <Outlet/>
      </main>
    </div>
    </AdminRootContext>
  )
}

export default Dashboard
