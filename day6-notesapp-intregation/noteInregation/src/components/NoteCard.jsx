import React from 'react'

const NoteCard = ({notes,deleteNote,noteForUpdate}) => {
  return (
    <div className='w-[30%] border border-white p-4 rounded-xl flex flex-col gap-3'>
      <h1>{notes.title}</h1>
      <p className='text-xs'>{notes.description}</p>
      <div className='flex justify-between '>
        <button onClick={()=>noteForUpdate(notes)} className='p-2 bg-yellow-600 text-white rounded'>Updata</button>
        <button onClick={()=>deleteNote(notes._id)} className='p-2 bg-red-500 text-white rounded'>Delete</button>
      </div>
    </div>
  )
}

export default NoteCard
