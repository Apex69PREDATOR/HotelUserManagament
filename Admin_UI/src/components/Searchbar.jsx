import {TextField,InputAdornment} from '@mui/material'
import { Search } from '@mui/icons-material'
import adminpic from '../assets/adminpic.webp'
const Searchbar = () => {
  return (
    <div id='search' className='md:w-[75vw] w-[99vw] flex justify-between p-2 fixed md:top-3 top-1  md:left-60 left-0 shadow-md rounded-md bg-white z-3'>
      <TextField type="text" placeholder="Search..." className='w-[60%]  border border-gray-300 rounded' size='small' slotProps={{input:{endAdornment:(<InputAdornment position='end'>
        <Search sx={{color:'orange', padding:'5px'}} fontSize='large' className='bg-orange-50 rounded-md'/>
      </InputAdornment>)}}}/>
      <div id='admin-button' className='h-10 w-10'>
        <img src={adminpic} alt="profile" className='h-[100%] cursor-pointer w-[100%] rounded-full border border-gray-300' />
      </div>
    </div>
  )
}

export default Searchbar
