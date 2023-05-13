import React from 'react';
import NavItem from '../nav-item';
import { COMPANY, FEATURES } from '../header/constants';
import MenuItem from '../menu-item';
import Button from '../button';

const MobileMenu = ({ open = false }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${
          open ? 'flex' : 'hidden'
        }`}
      ></div>
      <div
        className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${
          open ? 'flex' : 'hidden'
        }`}
      >
        <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
          <NavItem text='Features'>
            <div className='flex-col space-y-5 p-2'>
              {FEATURES.map((el) => {
                return (
                  <MenuItem
                    text={el.text}
                    icon={el.icon}
                  />
                );
              })}
            </div>
          </NavItem>

          <NavItem text='Features'>
            <div className='flex-col space-y-5 p-2'>
              {COMPANY.map((el) => {
                return (
                  <MenuItem
                    text={el.text}
                    icon={el.icon}
                  />
                );
              })}
            </div>
          </NavItem>

          <NavItem text='Careers' />
          <NavItem text='About' />
          <div className='flex flex-col space-y-5'>
            <Button>Login</Button>
            <Button hasBorder={true}>Register</Button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
