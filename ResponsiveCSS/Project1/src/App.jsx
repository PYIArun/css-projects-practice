import React from 'react'
import './App.css'
import { MdOutlineSearch } from "react-icons/md";
import { HiOutlineArrowRight } from "react-icons/hi2";
const App = () => {
  return (
    <div className='main bg-[#ffffff] min-h-screen w-screen p-[0.1px] relative'>

      <div className="nav flex justify-between items-center mt-[40px] h-[10vh] w-full border-black border-b-[2px] border-t-[2px]">
            <h1 className='premier tracking-[-3px] text-[40px] font-semibold w-[30%] h-[100%] flex justify-center items-center'>premier</h1>
            <h2 className='text-[17px]  w-[10%] border-r-[2px] border-black h-[100%] flex items-center justify-center'>Models</h2>
            <h2 className='text-[17px]  w-[30%] border-r-[2px] border-black h-[100%] flex items-center justify-center'>Woman/Man</h2>
            <h2 className='text-[17px]  w-[30%] border-r-[2px] border-black h-[100%] flex items-center justify-center'>Agency/Blog/Information</h2>
            <h2 className='w-[12%] border-r-[2px] border-black h-[100%] flex items-center justify-center text-[30px] '><MdOutlineSearch /></h2>
      </div>

      <div className='h-[90vh] w-full py-[4vw] px-[8vw] relative'>
        <div className=" h-full w-full relative">
            <video autoPlay loop muted src="./video.mp4" className='w-full h-full object-cover'></video>
            <div className='text-white px-[3vw] py-[1vw] h-[50%] absolute w-full bottom-0'>

              <div className="content1 flex items-center justify-between mb-[2.4vw] ">
                <h1 className=' text-[3.8vw] tracking-wide leading-[3.6vw] font-semibold'>Photography <br/>and films</h1>
                <h2 className=' text-[1vw] px-[2.3vw] py-[2vw] rounded-full bg-transparent flex items-center justify-center border-[2px] border-white'>01</h2>
              </div>

              <div className="content2 flex items-center justify-between border-t-[2px] border-white">
                  <h2>Explore</h2>
                  <HiOutlineArrowRight className='text-5xl'/>
              </div>

            </div>
        </div>  
      </div>

      <div className="scrollx w-full h-[40vh] flex items-center overflow-hidden whitespace-nowrap">
  <div className="container flex items-center flex-shrink-0 h-[95%] w-full gap-3">
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1670521067474-e0cc150c94c8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1726621269258-84afda6e4ed3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1vZGVsJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  </div>

  <div className="container flex items-center flex-shrink-0  h-[95%] w-full gap-3">
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1670521067474-e0cc150c94c8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1726621269258-84afda6e4ed3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <img className="h-[95%] rounded-[50%] w-[16%] p-3 object-cover flex-shrink-0" src="https://images.unsplash.com/photo-1634746715098-6cafbc6a7a00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1vZGVsJTIwcG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
  </div>
    </div>

      <div className='h-[10vh] w-full border-t-[2px] border-b-[2px] border-black'>
          <div className='alphabets w-[80%] flex items-center justify-between px-[1vw] mx-auto h-full'>
              <h2 className='all-alphabet underline italic'>ALL</h2>
              <h3 class='italic'>A</h3>
              <h3 class='italic'>B</h3>
              <h3 class='italic'>C</h3>
              <h3 class='italic'>D</h3>
              <h3 class='italic'>E</h3>
              <h3 class='italic'>F</h3>
              <h3 class='italic'>G</h3>
              <h3 class='italic'>H</h3>
              <h3 class='italic'>I</h3>
              <h3 class='italic'>J</h3>
              <h3 class='italic'>K</h3>
              <h3 class='italic'>L</h3>
              <h3 class='italic'>M</h3>
              <h3 class='italic'>N</h3>
              <h3 class='italic'>O</h3>
              <h3 class='italic'>P</h3>
              <h3 class='italic'>Q</h3>
              <h3 class='italic'>R</h3>
              <h3 class='italic'>S</h3>
              <h3 class='italic'>T</h3>
              <h3 class='italic'>U</h3>
              <h3 class='italic'>V</h3>
              <h3 class='italic'>W</h3>
              <h3 class='italic'>X</h3>
              <h3 class='italic'>Y</h3>
              <h3 class='italic'>Z</h3>


          </div>
      </div>


      <div className='page2 mt-[10vh] h-[100vh] flex justify-between w-[80%] mx-auto'>

          <div className='h-full w-[50%]  bg-[url("./image1.png")] bg-cover'>
            {/* <img className='object-cover' src="./image1.png" alt="" /> */}
          </div>

          <div className='h-full w-[45%]'>

            <div className='h-[75%] bg-cover bg-[url("./image2.png")]'>
            </div>  

            <div className='content flex justify-between'>
                <h1 className='text-xl py-3'>Hanna Mother<br></br>
                  features in a <br></br>
                  fashion story by <br></br> 
                  the lake for <br></br>
                  Vogue new shot
                </h1>

                <p className='text-sm p-3'>Such exposure to the fashion and <br></br>
                beauty industries enabled her <br></br>
                passion for branding and <br></br>
                creativity to transition from one <br></br>
                side of the camera to the other.
                </p>
            </div>
          </div>

      </div>

      <h1 className='pt-5 h-[10vh] w-[80%] font-bold text-5xl mx-auto'>
          VOGUE / SHOT
      </h1>
    </div>
  )
}

export default App