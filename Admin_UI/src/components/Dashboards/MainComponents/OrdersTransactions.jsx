import {useState} from 'react'
import { Select,MenuItem } from '@mui/material'
import { Money,ArrowRightAltSharp,Code } from '@mui/icons-material'
import Pic from '../../../assets/DefStudent.jpg'

const OrdersTransactions = () => {
  const [lastOrder,setLastOrder] = useState('7')
  return (
     <section id='orders' className='w-[100%] h-[70vh] md:p-6 p-2 bg-white shadow-md flex flex-col rounded-md gap-6'>
      <h3 className='md:text-xl text-lg' style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Orders & Transactions</h3>
      <div id='info' className='shadow-md p-3 border border-gray-100 rounded-md'>
        <div className="revenueInfo w-[100%] [&>_*]:flex [&>_*]:flex-col [&>_*]:relative [&>_*]:gap-3  flex justify-between mb-3">
          <div className='md:w-[20%] w-[25%] md:p-5 p-2'>
            <p className='text-gray-400 text-[0.8em]' style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Total Revenue</p>
          <p className='md:text-[1.5em] text-xl text-blue-600 ' style={{fontFamily:'sans-serif',fontWeight:'bold'}}>$456,754</p>
          <Code sx={{position:'absolute',padding:'5px', backgroundColor:'#4e77fc',color:'white',top:'30%',left:window.innerWidth>475?'-2%':'-15%'}} className='rounded-full'/>
          </div>
          <div className='md:w-[20%] w-[25%] md:p-5 p-2'>
            <p className='text-gray-400 text-[0.8em]' style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Room Revenue</p>
            <p className='md:text-[1.5em] text-xl text-blue-600' style={{fontFamily:'sans-serif',fontWeight:'bold'}}>5,763</p>
            <Code sx={{position:'absolute',padding:'5px', backgroundColor:'#4e77fc',color:'white',top:'30%',left:window.innerWidth>475?'-2%':'-15%'}} className='rounded-full'/>
          </div>
          <div className='md:w-[20%] w-[25%] md:p-5 p-2'>
  
            <p className='text-gray-400 text-[0.8em]' style={{fontWeight:'bold',fontFamily:'sans-serif'}}>Other Revenue</p>
            <p className='md:text-[1.5em] text-xl text-blue-600' style={{fontFamily:'sans-serif',fontWeight:'bold'}}>35,876</p>
            <Code sx={{position:'absolute',padding:'5px', backgroundColor:'#4e77fc',color:'white',top:'30%',left:window.innerWidth>475?'-2%':'-15%'}} className='rounded-full'/>
          </div>
         <Select className='w-[20%]' value={lastOrder}
         onChange={(e)=>{setLastOrder(e.target.value)}}
         size='small'
         sx={{fontSize:window.innerWidth>475?'0.8em':'0.6em',display:'block',gap:'0',maxHeight:'35px',color:'gray',opacity:'0.8'}}
         >
          <MenuItem value='7' sx={{color:'gray',opacity:'0.8'}}>Last 7 Days</MenuItem>
          <MenuItem value='30' sx={{color:'gray',opacity:'0.8'}}>Last 30 Days</MenuItem>
          <MenuItem value='365' sx={{color:'gray',opacity:'0.8'}}>Last 365 Days</MenuItem>
         </Select>
        </div>
        <div className="viewmore w-[100%] bg-gray-50 flex text-gray-400 p-2 justify-between rounded-md"><p>View Report</p> <ArrowRightAltSharp/></div>
      </div>

      <div id='list' className='flex flex-col md:gap-3 gap-1 overflow-auto'>
        <div className='flex justify-between p-2 bg-orange-50 md:text-sm text-[0.8em] shadow-sm rounded-md [&>_*]:w-[20%] [&>_*]:text-center' style={{fontWeight:'bold',fontFamily:'sans-serif'}}><span>Name</span><span>Purchase Date</span><span>Purchase ID</span><span>Room Catagory</span><span>Paid Amount</span></div>
        <div className='flex justify-between p-2 text-sm border border-gray-200 shadow-sm items-center rounded-md md:[&>_*]:w-[22%] [&>_*]:w-[22%] [&>_*]:text-center'><span className='flex gap-1 justify-center items-center' ><img  src={Pic} alt="profile pic" className='md:h-10 h-7 md:w-10 w-7 rounded-full border border-gray-200' /> <p className='flex flex-col gap-1'><span className='md:text-[1em] text-[0.8em]'>Shreya roy</span>
          <span className='text-[0.8em] text-gray-500'>Student</span>
        </p></span>
        <span className='md:text-[1em] text-[0.8em]'>20 Oct, 2025</span><span className='md:text-[1em] text-[0.8em]'>#1746289</span><span className='md:text-[1em] text-[0.8em]'>Room Catagory 1</span><span className='flex justify-center' ><p className='p-2 md:w-[30%] w-[75%] rounded-md bg-blue-50 text-blue-800 border border-blue-800' style={{fontWeight:'bold'}}>$5,67</p></span></div>
        <div className='flex justify-between p-2 text-sm border border-gray-200 shadow-sm items-center rounded-md [&>_*]:w-[22%] [&>_*]:text-center'><span className='flex gap-2 justify-center' ><img  src={Pic} alt="profile pic" className='h-10 w-10 rounded-full border border-gray-200' /> <p className='flex flex-col gap-1'><span className='md:text-[1em] text-[0.8em]'>Shreya roy</span>
          <span className='text-[0.8em] text-gray-500'>Student</span>
        </p></span>
        <span className='md:text-[1em] text-[0.8em]'>20 Oct, 2025</span><span className='md:text-[1em] text-[0.8em]'>#1746289</span><span className='md:text-[1em] text-[0.8em]'>Room Catagory 1</span><span className='flex justify-center' ><p className='p-2 rounded-md bg-blue-50 text-blue-800 border border-blue-800 md:w-[30%] w-[75%]' style={{fontWeight:'bold'}}>$5,67</p></span></div>
        <div className='flex justify-between p-2 text-sm border border-gray-200 shadow-sm items-center rounded-md [&>_*]:w-[22%] [&>_*]:text-center'><span className='flex gap-2 justify-center' ><img  src={Pic} alt="profile pic" className='h-10 w-10 rounded-full border border-gray-200' /> <p className='flex flex-col gap-1'><span className='md:text-[1em] text-[0.8em]'>Shreya roy</span>
          <span className='text-[0.8em] text-gray-500'>Student</span>
        </p></span>
        <span className='md:text-[1em] text-[0.8em]'>20 Oct, 2025</span><span className='md:text-[1em] text-[0.8em]'>#1746289</span><span className='md:text-[1em] text-[0.8em]'>Room Catagory 1</span><span className='flex justify-center' ><p className='p-2 md:w-[30%] w-[75%] rounded-md bg-blue-50 text-blue-800 border border-blue-800' style={{fontWeight:'bold'}}>$5,67</p></span></div>
      </div>
     </section>
  )
}

export default OrdersTransactions
