import React from 'react'

const Header = () => {
    return (
        <div className='absolute top-0 w-screen px-8 pt-3 pb-1 bg-gradient-to-b from-black via-black/70 to-transparent h-28 z-10'>
            <img
                className='w-72'  // or set it as 'w-[36rem]' for custom sizing
                src="./images/cmp-logo.png"
                alt="logo"
            />
        </div>
    )
}

export default Header