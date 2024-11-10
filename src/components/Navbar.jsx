import React from 'react'
import { navLists } from '../constants';
import { appleImg, bagImg, searchImg } from '../utils'

export const Navbar = () => {
    return (
        <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
            <nav className='flex w-full screen-max-width'>
                <img src={appleImg} alt="apple" width={14} height={18} />

                <div className='flex flex-1 justyfy-center max-sm:hidden'>
                    {
                        navLists.map((nav, i) => {
                            return <div key={i} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                                {nav}
                            </div>
                        })
                    }
                </div>

                <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                    <img src={searchImg} alt="search" width={18} height={18} />
                    <img src={bagImg} alt="bag" width={18} height={18} />
                </div>
            </nav>
        </header>
    )
}
