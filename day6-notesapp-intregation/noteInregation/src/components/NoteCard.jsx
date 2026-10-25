import React from 'react'

const NoteCard = () => {
  return (
    <div className='w-[30%] border-white p-4 rounded-xl'>
      <h1>Title</h1>
      <p>Description</p>
      <div className='flex justify-between '>
        <button className='p-2 bg-yellow-600 text-white '>Updata</button>
        <button className='p-2 bg-red-500 text-white'>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
