import { Select,MenuItem } from "@mui/material"
import { useState } from "react"

const RoomOccupancy = () => {
    const [currentYear,setCurrentYear] = useState('Monthly')
  return (
    <div id="occupancy" className="w-[100%] rounded-md p-5  bg-white shadow-md">
      <div className="head flex w-[100%] justify-between md:mb-4 mb-2">
        <h3 style={{fontFamily:'sans-serif',fontWeight:'bold'}}>Room Occupancy</h3>
         <Select color="gray" size='small' sx={{color:'gray'}} value={currentYear}
         onChange={(e)=>{setCurrentYear(e.target.value)}}
         >
          <MenuItem sx={{color:'gray'}} value='Monthly'>Monthly</MenuItem>
          <MenuItem sx={{color:'gray'}} value='2024'>2024</MenuItem>
          <MenuItem sx={{color:'gray'}} value='2023'>2023</MenuItem>
         </Select>
      </div>
      <ul className="flex flex-col gap-3 w-[100%] [&>_*]:rounded-md">
        <li className="flex p-3 w-[100%] justify-between bg-orange-50 shadow-sm border border-gray-200 text-sm [&>_*]:w-[30%]" style={{fontWeight:'600',fontFamily:'sans-serif'}}><span>Room Catagory</span> <span>Total Count</span> <span>Occupancy Rate</span></li>
        <li className="flex p-3 w-[100%] gap-2 shadow-sm border border-gray-200 text-sm [&>_*]:w-[30%] [&>_*]:text-center hover:border-orange-300"><span >2 BHK Double Bed</span> <span>34</span> <span>60%</span></li>
        <li className="flex p-3 w-[100%] gap-2 shadow-sm border border-gray-200 text-sm [&>_*]:w-[30%] [&>_*]:text-center hover:border-orange-300"><span >4 BHK Single Bed</span> <span>52</span> <span>60%</span></li>
        <li className="flex p-3 w-[100%] gap-2 shadow-sm border border-gray-200 text-sm [&>_*]:w-[30%] [&>_*]:text-center hover:border-orange-300"><span >3 BHK Single Bed</span> <span>43</span> <span>60%</span></li>
        <li className="flex p-3 w-[100%] gap-2 shadow-sm border border-gray-200 text-sm [&>_*]:w-[30%] [&>_*]:text-center hover:border-orange-300"><span >2 BHK Double Bed</span> <span>53</span> <span>60%</span></li>
      </ul>
    </div>
  )
}

export default RoomOccupancy
