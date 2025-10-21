import { PersonOutlined } from '@mui/icons-material'
import { TextField,InputAdornment } from '@mui/material'
import { DeleteOutline,EditOutlined,Search } from '@mui/icons-material'
import { AdminContext } from '../../context/AdminContext'
import { useContext,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const UsersList = () => {
  const nav=useNavigate()
  const {setSeeProfile,setAddUser,setEditUser,setEditField,totalUsers,setTotalUsers,setCurrentUser,setCurrentEdit} = useContext(AdminContext)
    const token = localStorage.getItem('hotelToken')
    async function findUsers(){
      const response = await fetch('http://localhost:3000/getUsers',{method:"GET",
        headers:{'Authorization':`Bearer ${token}`},
      })
      const res =await response.json()
      if(response.ok)
        setTotalUsers(res.users)
    }
    useEffect(()=>{
      if(!totalUsers)
        findUsers()
    },[])
    const DeleteUsers=async (user)=>{
     const response = await fetch('http://localhost:3000/deleteUser',{method:"POST",headers:{'Authorization':`Bearer ${token}`,'Content-type':'application/json'},body:JSON.stringify({user})})

     const res= await response.json()
     alert(res.message)
     if(response.ok){
      setTotalUsers(prev=>(prev.filter(val=>(val._id!==user._id))))
      setCurrentUser(null)
      setSeeProfile(false)
     }
    }
  return (
    <section id='userList' className='h-[85vh] md:w-[40vw] w-[100vw] bg-white md:p-5 p-2 rounded-md shadow-md flex flex-col gap-6 [&_*]:font-sans'>
     <div className="heading flex gap-5 items-center"><PersonOutlined className='text-orange-300' sx={{fontSize:window.innerWidth>475?'3.2em':'2.3em'}}/> <p className='md:text-[2.5em] text-[1.6em] font-medium'>User Management</p></div>
     <div className="search flex items-center w-[100%] h-[7%] gap-2">
     <TextField sx={{padding:'0'}} className='w-[92%]' placeholder='Search...' slotProps={{input:{endAdornment:(<InputAdornment position='end'>
        <Search sx={{color:'orange', padding:'4px',margin:'0'}} fontSize='large' className='bg-orange-50 rounded-md'/>
      </InputAdornment>)}}}/>
      <div className="box p-[3.7px] px-4 rounded-md hover:bg-orange-50 text-orange-300 text-[2em] border border-orange-300 cursor-pointer" onClick={()=>{setAddUser(true)
        setSeeProfile(false)
        setEditUser(false)
      }}>+</div>
     </div>
     <div className="users flex flex-col gap-3 overflow-auto md:text-sm text-[0.8em]">
         <div className='flex justify-between p-2 bg-orange-50  shadow-sm rounded-md [&>_*]:w-[22%] [&>_*]:text-center' style={{fontWeight:'bold',fontFamily:'sans-serif'}}><span>Name</span><span>Designation</span><span>Role</span><span>Status</span><span>Action Buttons</span></div>

        {totalUsers?.map(val=>(<div key={val._id} onClick={()=>{setSeeProfile(true)
                                   setAddUser(false)
                                   setEditUser(false)
                                   setCurrentUser(val)
                                   nav('#profile')
  }} className='flex justify-between items-center md:p-2 p-1 bg-white  shadow-sm rounded-md [&>_*]:w-[22%] h-[60px] [&>_*]:text-center border border-gray-50 cursor-pointer hover:border-orange-100'><span className='flex flex-col items-center'><p>{val.Name}</p>
         <p className='p-1 px-2 text-[0.7em] bg-gray-50 text-gray-400 font-semibold rounded-full'>{val._id}</p></span>
         <span className='flex flex-wrap gap-1 [&>_*]:rounded-full [&>_*]:p-1 [&>_*]:text-gray-400 [&>_*]:bg-gray-50 [&>_*]:border-gray-100 [&>_*]:border justify-center [&>_*]:text-[0.7em] [&>_*]:font-bold'>
          <p>{val.Designation}</p>
         </span>
         <span className='flex justify-center'><p className='p-1 bg-blue-50 text-blue-600 font-semibold md:text-[0.8em] text-[0.7em] rounded-full md:px-4 px-2'>{val.Role}</p></span>
         <span className='flex justify-center'><p className='p-1 bg-green-50 text-green-600 md:text-none text-[0.7em] font-semibold rounded-full md:px-4 px-2'>Active</p></span>
         <span><EditOutlined onClick={(e)=>{
          e.stopPropagation()
          setEditUser(true)
          setAddUser(false)
          setSeeProfile(false)
          setEditField('all')
          setCurrentEdit(val)
         }}  className='bg-gray-50 md:p-2 p-1 rounded-md shadow-sm md:mr-1 cursor-pointer' sx={{fontSize:window.innerWidth>475?'2.5em':'2em',color:'#b0b0b0'}}/> <DeleteOutline onClick={(e)=>{
          e.stopPropagation()
          DeleteUsers(val)
         }} className='bg-gray-50 md:p-2 p-1 rounded-md shadow-sm cursor-pointer' sx={{fontSize:window.innerWidth>475?'2.5em':'2em',color:'#ffbfba'}}/></span>
         </div>))}
         

     </div>
    </section>
  )
}

export default UsersList
