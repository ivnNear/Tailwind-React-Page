import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUp } from '../../images/icon-arrow-up.svg';

const NavItem = ({ text = '', children }) => {
  const [open, setOpen] = React.useState('');
  
  return (
    <div className='relative'>
      <div className='flex space-x-2  items-center'>
        <span onClick={() => children && setOpen(text !== open ? text : '')} className='text-medium-gray hover:text-almost-black'>{text}</span>

                      {/* Стрелка вниз/вверх */}
        {children && open !== text && <ArrowDown />}
        {children && open === text && <ArrowUp />}


      </div>
      {/* отображение выпадающего списка(NavDrop) */}
      {open && children }
    </div>
  );
};

export default NavItem;
