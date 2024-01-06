import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from './components/navbar'
import { Message } from './components/message'

export default function Home() {
  return (
    <>
      <Navbar/>
      <main className='container mx-auto min-h-screen p-2'>
        <h2>Hello world</h2>
        <p>belajar next js</p>
        <div className='space-y-6 bg-slate-950 p-2 rounded-lg'>
          <Message name='Rey' message='Cuy'/>
          <Message name='Rii' message='Lg ap'/>
          <Message name='Z' message='Why'/>
          <Message name='Arr' message='Agus'/>
          <Message name='Agus' message='Alay'/>
        </div>
        <Image className='rounded-full' src={'https://source.unsplash.com/random/500x500'} alt='Image' width={200} height={200}/>
      </main>
    </>
  )
}
