import { Person2Outlined,RoomOutlined,SensorOccupiedOutlined,MoneyOffOutlined } from "@mui/icons-material"

const Cards = () => {
  return (
    <section id='cards' className='flex flex-wrap w-[100%] md:justify-between gap-2 md:gap-0 justify-evenly'>
        <div className="cards md:w-[23%] w-[42%] flex flex-col md:gap-8 gap-6 relative bg-white rounded-md md:p-5 p-2 shadow-md">
            <p className="text-gray-400">Total Bookings</p>
            <p style={{fontSize:'1.6em',fontWeight:'bold',color:'orange'}}>6059</p>
            <Person2Outlined sx={{position:'absolute', top:"40px",right:'5%',color:'gray',padding:'2px'}} className="border border-gray-300 rounded" fontSize="large"/>
        </div>
        <div className="cards md:w-[23%] w-[42%] flex flex-col md:gap-8 gap-6 relative bg-white rounded-md md:p-5 p-2 shadow-md">
            <p className="text-gray-400">Total Rooms</p>
            <p style={{fontSize:'1.6em',fontWeight:'bold',color:'orange'}}>6059</p>
            <RoomOutlined sx={{position:'absolute', top:"40px",right:'5%',color:'gray',padding:'2px'}} className="border border-gray-300 rounded" fontSize="large"/>

            </div>
        <div className="cards md:w-[23%] w-[42%] flex flex-col md:gap-8 gap-6 relative bg-white rounded-md md:p-5 p-2 shadow-md">
            <p className="text-gray-400">Overall Occupancy Rate</p>
            <p style={{fontSize:'1.6em',fontWeight:'bold',color:'orange'}}>6059</p>
            <SensorOccupiedOutlined sx={{position:'absolute', top:"40px",right:'5%',color:'gray',padding:'2px'}} className="border border-gray-300 rounded" fontSize="large"/>
            </div>
        <div className="cards md:w-[23%] w-[42%] flex flex-col md:gap-8 gap-6 relative bg-white rounded-md md:p-5 p-2 shadow-md">
            <p className="text-gray-400">Total Transaction</p>
            <p style={{fontSize:'1.6em',fontWeight:'bold',color:'orange'}}>6059</p>
            <MoneyOffOutlined sx={{position:'absolute', top:"40px",right:'5%',color:'gray',padding:'2px'}} className="border border-gray-300 rounded" fontSize="large"/>
            </div>
    </section>
  )
}

export default Cards
