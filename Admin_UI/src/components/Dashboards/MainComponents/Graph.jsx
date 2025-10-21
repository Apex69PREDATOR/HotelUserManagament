import {LineChart,XAxis,YAxis,Tooltip, CartesianGrid, Line,ResponsiveContainer } from 'recharts'
import { Select,MenuItem } from '@mui/material'
import { useState } from 'react'
const Graph = () => {
   const [selectedYear,setSelectedYear] = useState('2025')
   const data = [
    {month:'Jan', revenue:0},
    {month:'Feb', revenue:22000.50},
    {month:'Mar', revenue:5023},
    {month:'Apr', revenue:8000},
    {month:'May', revenue:4532.69},
    {month:'Jun', revenue:25870},
    {month:'Jul', revenue:21000},
    {month:'Aug', revenue:3000},
    {month:'Sep', revenue:9000},
    {month:'Oct', revenue:2477},
    {month:'Nov', revenue:22000},
    {month:'Dec', revenue:18000}
  ]
  return ( 
    <div className='bg-white md:p-3 p-1 rounded-md  w-[100%] gap-3 flex flex-col'>
     <div className="heading w-[100%] flex justify-between">
      <h3 style={{fontWeight:'bold',fontSize:'1.1em',fontFamily:'sans-serif'}}>Collection of Rooms</h3>
      <Select
      value={selectedYear}
      onChange={(e)=>{setSelectedYear(e.target.value)}}
      size='small'
      color='gray'
      sx={{color:'gray'}}
      >
        <MenuItem sx={{color:'gray'}} value='2023'>2023</MenuItem>
        <MenuItem sx={{color:'gray'}} value='2024'>2024</MenuItem>
        <MenuItem sx={{color:'gray'}} value='2025'>2025</MenuItem>
      </Select>
     </div>
     <ResponsiveContainer width="100%" height={300}>
    <LineChart width={"100%"}  margin={0} height={300} data={data}>
      <CartesianGrid srokeDasharray="3 3" vertical={false}/>
      <XAxis dataKey={"month"} tick={{fill:'#a8a8a8',opacity:'0.8'}} tickLine={false}/>
      <YAxis tick={{fill:'#a8a8a8',opacity:'0.8'}} tickLine={false} tickFormatter={(value)=>`${(value/1000).toFixed(0)}k`} 
       domain={[0,60000]} ticks={[0,10000,20000,30000,40000,50000,60000]}/>
      <Tooltip labelStyle={{fontWeight:'bold',color:'black'}} formatter={(value)=>`${(value/1000).toFixed(2)}k$`}/>
      <Line type={"monotone"} dataKey={"revenue"} stroke="#f5d32eff" dot={{ r: 0 }} strokeWidth={2}/>
    </LineChart>
    </ResponsiveContainer>
    </div>
  )
}

export default Graph
