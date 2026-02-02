import React from 'react'

const ButtonPage = ({children}:{children:React.ReactNode}) => {
  return (
    <button className='bg-black rounded-[50px] px-8 py-2.5 text-white text-[20px] font-medium'>{children}</button>
  )
}

export default ButtonPage