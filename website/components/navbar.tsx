"use client";

import React from 'react'
import Image from 'next/image';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Ghost } from 'lucide-react';
export function Navbar  () {
  return (
    <div className='pt-1 pr-3 pl-1 flex justify-between shadow	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);'>
      <div className='flex justify-between'>
    <Image
    src="/gdsc-logo.svg"
    alt="Logo"
    width={60}
    height={60}
    />
    <h1 className='text-3xl p-3'>GDSC KIIT</h1>
      <h1 className='p-5'>About</h1>
      <h1 className='p-5'>Events</h1>
      <h1 className='p-5'>Blogs</h1>
      <h1 className='p-5'>Team</h1>
      </div>
    <div className='flex justify-between'>
      <div className='p-2'>
      <ModeToggle />
      </div>
      <div className='mt-2'>
      <Button variant={'default'} >Contact Us</Button>
      </div>
      </div>
      </div>
  );
};

