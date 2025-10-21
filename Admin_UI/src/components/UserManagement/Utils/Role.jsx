import { AdminContext } from '../../../context/AdminContext'
import { useContext } from 'react'
import { EditOutlined } from '@mui/icons-material'
const Role = ({currentUser}) => {
    const {setEditField,setEditUser,setSeeProfile,setCurrentEdit,currentEdit} = useContext(AdminContext)
  return (

    <div id='role' className='p-4 bg-white w-[100%] flex flex-col [&>_*]:w-[95%] [&>_*]:flex gap-3 rounded-2xl shadow-sm'>
            <div className='justify-between'><h3 className='text-xl font-semibold'>Role Details</h3> <EditOutlined onClick={(e)=>{
                e.stopPropagation()
                setEditField('Role')
                setEditUser(true)
                setSeeProfile(false)
                setCurrentEdit(currentUser || currentEdit)
            }} className='bg-gray-50 p-2 rounded-md shadow-sm cursor-pointer' sx={{fontSize:'2em',color:'#b0b0b0'}}/> </div>
            <div className='gap-20'>
                <div className="email">
                    <p className='text-[0.8em] text-gray-400'>Role</p>
                    <p className=''>{currentUser?.Role || currentEdit?.Role}</p>
                </div>
                <div className="number">
                    <p className='text-[0.8em] text-gray-400'>Features Name</p>
                    <p className=''>{currentUser?.Features?.map(val=>(<span className='mr-1' key={val}>{val}</span>)) || currentEdit?.Features?.map(val=>(<span className='mr-1' key={val}>{val}</span>))}</p>
                </div>
            </div>
          </div>
  )
}

export default Role
