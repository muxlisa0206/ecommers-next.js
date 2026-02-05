import Link from 'next/link'
import React from 'react'

const ButtonPage = ({children}:{children:React.ReactNode}) => {
  return (
    <Link href={"/category"}>
      <button className='bg-black rounded-[50px] px-8 py-2.5 text-white text-[20px] font-medium cursor-pointer'>{children}</button>
    </Link>
)
}

export default ButtonPage