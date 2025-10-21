import { EditOutlined } from '@mui/icons-material'
import { AdminContext } from '../../../context/AdminContext'
import { useContext } from 'react'

const BasicInfo = ({currentUser}) => {
    const {setEditField,setEditUser,setSeeProfile,setCurrentEdit,currentEdit} = useContext(AdminContext)
  return (
    <div id='info' className='p-4 bg-white w-[100%] flex gap-3 flex-col [&>_*]:w-[95%] [&>_*]:flex rounded-2xl shadow-sm'>
            <div className='justify-between'><h3 className='text-xl font-semibold'>Basic Info</h3><EditOutlined onClick={(e)=>{
                e.stopPropagation()
                setEditField('BasicInfo')
                setEditUser(true)
                setSeeProfile(false)
                setCurrentEdit(currentUser || currentEdit)
            }} className='bg-gray-50 p-2 rounded-md shadow-sm cursor-pointer' sx={{fontSize:'2em',color:'#b0b0b0'}}/> </div>
            <div className='gap-20'>
                <div className="email">
                    <p className='text-[0.8em] text-gray-400 mb-1'>Email Address</p>
                    <p>{currentUser?.Email || currentEdit?.Email}</p>
                </div>
                <div className="number">
                    <p className='text-[0.8em] text-gray-400 mb-1'>Mobile Number</p>
                    <p className=''>{currentUser?.Number || currentEdit?.Number}</p>
                </div>
            </div>
            <p className='flex-col'>
              <span className='text-gray-400 text-[0.8em] mb-1'>Address</span>
              <span className=''>
                {currentUser?.Address || currentEdit?.Address}
              </span>
            </p>
          </div>
  )
}

export default BasicInfo
