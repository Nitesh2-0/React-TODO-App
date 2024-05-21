import React from 'react'
import AddToTask from './components1/AddToTask';
import ShowHead from './components1/ShowHead';
import ProgressMap from './components1/ProgressMap';


const Left = () => {

  return (
    <div className='w-[100%] md:h-full h-auto flex flex-col p-5 relative bg-stone-800 md:bg-stone-900'>
      <ShowHead  />
      <ProgressMap />
      <AddToTask />
    </div>
  )
}

export default Left
