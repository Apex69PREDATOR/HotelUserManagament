import React from 'react'

const Designation = ({currentUser,currentEdit}) => {
  return (
    <div id='designation' className='flex flex-col items-center gap-2 py-8 bg-white rounded-2xl shadow-sm'>
        <p className='text-[0.8em] text-gray-400'>Designation</p>
                <span className='text-lg font-semibold'>{currentUser?.Designation || currentEdit?.Designation}</span>
      </div>
  )
}

export default Designation
