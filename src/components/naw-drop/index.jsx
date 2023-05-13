import React from 'react'
import MenuItem from '../menu-item'

const NawDrop = ({items =[]}) => {
    console.log(items);
  return (
    <div className='flex flex-col px-4 py-2 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 z-20'>{items.map((el) => {
        return <MenuItem key={el.text} text={el.text} icon={el.icon}  />
    })}</div>
  )
}

export default NawDrop