import { Button } from '@/components/ui/button'
import { Balloon, Cake, Flower2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF0F5] via-white to-[#FFF0F5] flex items-center justify-center p-6">

      <div className=' absolute top-5 left-9 '> <Cake className=' size-32 text-rose-200 ' /></div>
      <div className=' absolute bottom-10 right-13 ' ><Balloon className=' size-32 text-rose-200 ' /></div>

      <div className=' absolute top-1/4 left-1/4 '><Sparkles className=' size-8 text-rose-200 ' /></div>
      <div className=' absolute top-1/3 right-1/3 '><Sparkles className=' size-8 text-rose-200 ' /></div>
      <div className=' absolute bottom-1/4 left-1/3 '><Sparkles className=' size-8 text-rose-200 ' /></div>
      <div className=' absolute bottom-1/3 right-1/4 '><Sparkles className=' size-8 text-rose-200 ' /></div>
      <div className=' absolute top-1/2 left-1/2 '><Sparkles className=' size-8 text-rose-100 ' /></div>
      <div className=' absolute bottom-10 left-9 '><Flower2  className=' size-8 text-rose-100 ' /></div>

      <div className=' text-center z-90'>

      <h1 className=' text-[3rem] font-bold'>Happy Birthday <span className=' text-rose-400 '>Rimaas!</span></h1>
      <p className=' text-sm text-slate-600 font-semibold '>Maanata waa <span className=' text-rose-500  underline '>13-January-2026</span> waana maalin aad iigu weyn aniga ahaan <br /> waxaan kuu haya gifts badan hadii aad daneeneso halkan taabo <a href="/login" className=' text-rose-500'>"click me"</a>  </p>
      <Link href={"/login"}>
        <Button variant="outline" className=' mt-4 bg-rose-50 text-rose-600 hover:text-rose-700/75 hover:bg-rose-100/50 transition-all duration-200  ' >Click Me</Button>
      </Link>
      
      </div>

    </div>
  )
}

export default page
