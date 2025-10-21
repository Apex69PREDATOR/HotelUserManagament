import {useContext} from 'react'
import logo from "../assets/nav_logo.jpg"
import { AdminContext } from '../context/AdminContext'
import { PersonOutline,DashboardCustomizeOutlined } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
    const {currentNav,setCurrentNav} = useContext(AdminContext)
  return (
    <nav className='md:w-[13vw] md:h-[80vh] w-[100vw] md:mt-0 mt-16 h-[25vh] bg-white shadow-md flex flex-col gap-4 rounded p-2'>
      <div className="logo w-[100%] h-[60%] md:h-[30%] flex items-center justify-center border-b border-gray-300">
       <img src={logo} alt="Hotel logo" className='w-[55%] md:h-[67%] h-[85%]' />
      </div>
      <div className='flex md:flex-col gap-4'>
        <p className={`p-2 px-5 ${currentNav==='Dashboard'?'bg-orange-50 text-orange-400':'bg-white text-gray-400'} hover:bg-orange-50 rounded-full cursor-pointer`} onClick={()=>{setCurrentNav('Dashboard')
          navigate('/')
        }}> <DashboardCustomizeOutlined/> Dashboard</p>
        <p className={`p-2 px-2 ${currentNav==='Management'?'bg-orange-50 text-orange-400':'bg-white text-gray-400'} hover:bg-orange-50 rounded-full cursor-pointer`} onClick={()=>{setCurrentNav('Management')
          navigate('/management')
        }}> <PersonOutline/>  User Management</p>
      </div>
    </nav>
  )
}

export default Nav
