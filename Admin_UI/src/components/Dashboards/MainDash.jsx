
import Cards from './MainComponents/Cards'
import Graph from './MainComponents/Graph'
import OrdersTransactions from './MainComponents/OrdersTransactions'
import RoomOccupancy from './MainComponents/RoomOccupancy'

const MainDash = () => {
  return (
    <div className='md:w-[75vw] w-[100vw] flex flex-col md:gap-6 gap-3'>
      <Cards/>
      <div className='w-[100%] flex md:flex-row flex-col justify-between'>
      <Graph/>
      <RoomOccupancy/>
      </div>
      <OrdersTransactions/>
    </div>
  )
}

export default MainDash
