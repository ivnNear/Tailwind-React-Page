import React from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as MenuItem } from '../../images/icon-menu.svg';
import { ReactComponent as MenuItemClose } from '../../images/icon-close-menu.svg';
import NavItem from '../nav-item';
import NawDrop from '../naw-drop';

import {FEATURES} from './constants'
import {COMPANY} from './constants'
import Button from '../button';
import MobileMenu from '../mobile-menu';

const Header = () => {
  const [open, setOpen] = React.useState(false)

  
  return (
    <header className='flex items-center'>
      <Logo />
      <nav  className='hidden xl:flex space-x-6 ml-8  items-center cursor-pointer'>
        <NavItem text='Features'>
          <NawDrop items={FEATURES}/>
        </NavItem>

        <NavItem text='Company'>
          <NawDrop items={COMPANY} />
        </NavItem>

        <NavItem text='Careers'></NavItem>
        <NavItem text='About'></NavItem>
      </nav>
      
      <div className="hidden xl:flex ml-auto space-x-5">
        <Button >Loggin</Button>
        <Button hasBorder={true} >Register</Button>
        
      </div>
      <div onClick={() => setOpen(!open)} className='flex xl:hidden cursor-pointer ml-auto z-30'>
        {open ? <MenuItemClose /> : <MenuItem />}
      </div>
      <MobileMenu open={open} />
    </header>
  );
};

export default Header;
