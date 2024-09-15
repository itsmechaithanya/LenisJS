import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

function App() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }); 

  useGSAP(()=>{
    document.querySelectorAll(".elem").forEach(elem => {
      let img = elem.querySelector("img")
      let tl = gsap.timeline()
  
      let xTransform = gsap.utils.random(-100,100);
  
      
      tl
        .set(img,{
          transformOrigin:`${xTransform < 0 ? 0 : "100%" }`,
        }, "start")
        .to(img, {
          scale: 0,
          ease: "none",
          scrollTrigger: {
            trigger:img,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }, "start")
        .to(img, {
          xPercent: xTransform,
          ease: "power4.easeInOut",
          scrollTrigger: {
            trigger:img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        })
      })
  })

  return (
    <>
      <div className="w-full bg-black">
        <div className='grid grid-cols-8 grid-rows-20 gap-2'>
          <div className='elem' style={{ '--r': 7, '--c': 3 }}><img src="/img1.jpg" alt="img1" /></div>
          <div className='elem' style={{ '--r': 12, '--c': 6 }}><img src="/img2.jpg" alt="img2" /></div>
          <div className='elem' style={{ '--r': 3, '--c': 8 }}><img src="/img3.jpg" alt="img3" /></div>
          <div className='elem' style={{ '--r': 9, '--c': 2 }}><img src="/img4.jpg" alt="img4" /></div>
          <div className='elem' style={{ '--r': 15, '--c': 5 }}><img src="/img5.jpg" alt="img5" /></div>
          <div className='elem' style={{ '--r': 1, '--c': 7 }}><img src="/img6.jpg" alt="img6" /></div>
          <div className='elem' style={{ '--r': 13, '--c': 1 }}><img src="/img7.jpg" alt="img7" /></div>
          <div className='elem' style={{ '--r': 5, '--c': 4 }}><img src="/img8.jpg" alt="img8" /></div>
          <div className='elem' style={{ '--r': 11, '--c': 8 }}><img src="/img9.jpg" alt="img9" /></div>
          <div className='elem' style={{ '--r': 2, '--c': 3 }}><img src="/img10.jpg" alt="img10" /></div>
          <div className='elem' style={{ '--r': 14, '--c': 6 }}><img src="/img11.jpg" alt="img11" /></div>
          <div className='elem' style={{ '--r': 8, '--c': 1 }}><img src="/img12.jpg" alt="img12" /></div>
          <div className='elem' style={{ '--r': 10, '--c': 7 }}><img src="/img13.jpg" alt="img13" /></div>
          <div className='elem' style={{ '--r': 4, '--c': 5 }}><img src="/img14.jpg" alt="img14" /></div>
          <div className='elem' style={{ '--r': 6, '--c': 2 }}><img src="/img15.jpg" alt="img15" /></div>
          <div className='elem' style={{ '--r': 15, '--c': 4 }}><img src="/img16.jpg" alt="img16" /></div>
          <div className='elem' style={{ '--r': 6, '--c': 8 }}><img src="/img17.jpg" alt="img17" /></div>
          <div className='elem' style={{ '--r': 13, '--c': 3 }}><img src="/img18.jpg" alt="img18" /></div>
          <div className='elem' style={{ '--r': 11, '--c': 5 }}><img src="/img19.jpg" alt="img19" /></div>
          <div className='elem' style={{ '--r': 14, '--c': 7 }}><img src="/img20.jpg" alt="img20" /></div>
        </div>
        <div className='h-screen w-screen fixed top-0 left-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-8xl mb-1 font-bold uppercase'>Thomas Vance <sup className='font-light'>®</sup></h1>
          <h2 className='text-4xl '>並外れたファッション</h2>
        </div>
        <div className=' w-screen h-screen flex relative z-[99] bg-[#D1D1D1] items-center justify-center text-white'>
          <p className=' text-5xl w-3/4 text-black leading-[4.5vw] font-medium'>From the dawn of civilisation onwards crowds have always undergone the influence of illusions. It is to the creators of illusions that they have raised more temples, statues, and altars than to any other class of men. Whether it be the religious illusions of the past or the philosophical and social illusions of the present, these formidable sovereign powers have always been the masters of destiny. <sup>®</sup></p>
        </div>
      </div>
    </>
  )
}

export default App
