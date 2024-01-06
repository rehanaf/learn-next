import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className='container mx-auto min-h-screen'>
        <h2>About Me Bro</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, veritatis dolorum ipsam quam accusantium facilis expedita modi et quia blanditiis laborum, esse eius asperiores adipisci. Magnam consequatur sit sed autem?</p>
      </main>
    </>
  )
}
