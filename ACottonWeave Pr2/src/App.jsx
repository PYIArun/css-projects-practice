import React from 'react'
import './App.css'
import { FaStar } from "react-icons/fa";
const App = () => {
  return (
    <>

      <div className='h-screen w-screen gap-[120px] flex flex-row pt-[150px] px-[80px]'>

        <div className='left h-full w-[48%] flex flex-col justify-between pb-8'>
              <h1 className='text-[6rem] leading-[5.5rem] font-medium'>
                a cotton <br/>
                weavee.
              </h1>

              <div className='h-[40%] flex flex-col justify-between'>
                <div className='py-1 px-2 rounded-full flex justify-between items-center w-[110px] bg-transparent border-[2px] border-black'>
                    <p>colors</p>
                    <div className='flex flex-rowg gap-1'>
                    <div className='w-[15px] h-[15px] rounded-full bg-gray-600'></div>
                    <div className='w-[15px] h-[15px] rounded-full bg-black'></div>
                    </div>
                </div>

                
                <div className='content'>
                  <h2 className='font-extrabold text-xl'>Details</h2>
                  <p className='font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>
                  Excepturi voluptatum natus neque dolor molestiae sunt quidem quibusdam odit
                  <br/> facere dolores! Nesciunt ex dicta minima quasi maxime dolor est nobis et. 
                  <br/>Nesciunt ex dicta minima quasi maxime dolor est nobis et.</p>
                </div>

              </div>
        </div>


      
        <div className='right relative w-[35%] h-full'>
              <h1 className='text-2xl font-bold rotate-[-90deg] absolute left-[-105px] bottom-[100px] '>Cotton twill cap</h1>
              <div className='w-[calc(100%-80px)] relative mx-auto flex flex-row justify-between items-center h-[10%]'>
              <div className='h-[150px] w-[150px] rounded-full bg-black text-white flex justify-center items-center font-light absolute right-[-80px] top-[150px]'>add to bag</div>
                  <h1 className='font-bold text-[15px]'>$488</h1>
                  <h1 className='font-bold text-[10px] items-center flex flex-row gap-2'>Rating 

                    <div className='flex'>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                    </div>

                  </h1>
              </div>
              <div className="h-[90%] w-[calc(100%-80px)] bg-slate-400 mx-auto bg-[url('./images/cotton.jpg')] bg-cover"></div>
              
        </div>

      </div>
       
    
    </>
    

  )
}

export default App