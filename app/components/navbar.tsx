'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navbar() {
  const pathname = usePathname()
 
  return (
    <nav className='bg-gray-950'>
      <div className='container mx-auto p-2 flex items-center justify-between'>
        <div>
          <Link href='/'>Rehanaf_</Link>
        </div>
        <ul className='text-sky-400 flex p-2'>
          <li>
            <Link className={`px-6 py-1 rounded-full ${pathname === '/' ? 'bg-sky-400 text-white' : ''}`} href='/'>
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`px-6 py-1 rounded-full ${pathname === '/about' ? 'bg-sky-400 text-white' : ''}`}
              href='/about'
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}