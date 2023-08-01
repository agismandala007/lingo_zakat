'use client'

import Image from 'next/image'
import Link from 'next/link'
import imgLogo from 'public/img/id.png'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className='sticky top-0 h-screen p-4 pt-6 border-r-2 border-gray-100'>
      <div className='w-full h-full'>
        <Link
          href='/'
          className='text-emerald-500 text-2xl font-semibold flex gap-3 items-center'
        >
          <p>Lingo Zakat</p>
          <Image src={imgLogo} width={24} alt='image'/>
        </Link>
      </div>
    </div>
  )
}
