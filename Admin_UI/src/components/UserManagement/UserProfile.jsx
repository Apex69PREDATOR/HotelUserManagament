import { Button } from '@mui/material'
import { CopyAllOutlined } from '@mui/icons-material'
import Role from './Utils/Role'
import Designation from './Utils/Designation'
import Status from './Utils/Status'
import BasicInfo from './Utils/BasicInfo'
import { AdminContext } from '../../context/AdminContext'
import { useContext } from 'react'


const UserProfile = ({currentUser}) => {
    const token = localStorage.getItem('hotelToken')
    const id = currentUser?._id
    const {setTotalUsers,setCurrentUser,setSeeProfile} = useContext(AdminContext)
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
    <div id='profile' className='flex flex-col h-[80vh] md:w-[35vw] w-[100vw] gap-4 [&>_*]:w-[100%] [&>_*]:p-3 [&>_*]:shadow-md [&>_*]:rounded-md justify-center [&_*]:font-sans'>
      <div id='name' className='flex gap-4' style={{boxShadow:'none'}}>
       <img src={currentUser?.Image} alt='pic' className='h-13 w-13 rounded-full'/>
       <div className='flex flex-col gap-2'>
        <span className='text-xl font-medium'>{currentUser?.Name}</span>
        <span className='text-[0.9em] text-gray-400'>{id} <CopyAllOutlined onClick={()=>{
            navigator.clipboard.writeText(id).then(()=>{
                alert('copied!')
            }).catch(()=>{console.log('failed to copy')
            })
        }} fontSize='small' className='cursor-pointer'/></span>
       </div>
      </div>
      <BasicInfo currentUser={currentUser}/>
      <Role currentUser={currentUser}/>
      <Designation currentUser={currentUser}/>
      <Status/>
      <Button onClick={(e)=>{
        e.stopPropagation()
        DeleteUsers(currentUser)}} id='delete' variant='outlined'  sx={{backgroundColor:'white'}} color='error'>Delete this User Profile</Button>
    </div>
  )
}

export default UserProfile
