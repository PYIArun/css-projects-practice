import React from 'react'
import './App.css'

const App = () => {
  return (
    <>

    <div className='main h-screen w-screen'>

        <div className='h-[50%] w-full'>

          <div className="h-[20%] px-5 items-center first-navbar flex flex-row justify-between">

            <div className='left-navbar flex flex-row '>
                  <div className='h-[20px] w-[20px] rounded-full bg-black'></div>
                  <div className='h-[20px] w-[20px] rounded-full bg-black'></div>
            </div>

            <div className='right-navbar flex flex-row gap-[30px]'>
                        <ul className='flex gap-[20px]'>
                          <li>EN</li>
                          <li className='opacity-60'>RU</li>
                        </ul>

                        <ul className='flex gap-[20px]'>
                          <li>Country: Russia</li>
                          <li>Profile</li>
                          <li>Wishlist(0)</li>
                          <li>Search</li>
                        </ul>
            </div>


          </div>

          <ul className='h-[20%] items-center second-navbar flex flex-row gap-[40px] px-5'>
              <li>SUN</li>   
              <li>OPTICAL</li>   
              <li>COLLECTIONS</li>   
              <li>STUDIO</li>   
              <li>ABOUT</li>   
              <li>SHOPS</li>   
              <li>JOURNAL</li>   
          </ul>

          <div className='h-[60%] flex flex-nowrap overflow-x-auto headline-section'>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl ">
                <h1>Trendline</h1>
              </div>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl ">
                <h1>Fashion</h1>
              </div>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl">
                <h1>Style</h1>
              </div>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl ">
                <h1>Trendline</h1>
              </div>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl ">
                <h1>Fashion</h1>
              </div>
              <div className="elem shrink-0 h-[100%] w-[60%] text-black flex justify-center items-center text-7xl">
                <h1>Style</h1>
              </div>
            </div>
        </div>

        <div className='image-section w-full h-[50%] flex-nowrap overflow-x-auto flex'>
                <img src="./images/image1.jpg" className='shrink-0 w-[60%] object-cover'alt="" />
                <img src="./images/image2.jpg" className='shrink-0 w-[60%] object-cover'alt="" />
                <img src="./images/image3.jpg" className='shrink-0 w-[60%] object-cover'alt="" />
                <img src="./images/image4.jpg" className='shrink-0 w-[60%] object-cover'alt="" />
        </div>
    </div>
    
    </>
    

  )
}

export default App