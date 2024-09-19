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

      <div className='flex justify-between pt-5 h-[80vh] w-[80%] mx-auto'>
          <div className='h-full w-[40%]'>
              
              <div className='flex items-center justify-center h-[80%]'>
                  <div className='h-[50%] w-[50%] bg-[url("./image13.png")] bg-cover'></div>
              </div>
              <p className='flex h-[20%] items-end font-bold text-2xl justify-center w-full'>Maison ARTC: memories and culture, <br/>
              the base of futuristic fashion<br/>
              awareness. Tilila Oulhaj look</p>
          </div>

          <div className='h-full w-[55%] bg-[url("./image3.png")] bg-cover'>

          </div>

      </div>

      <div className='mt-[10vh] h-[80vh] w-[80%] mx-auto bg-[url("./image4.png")] bg-cover'>
      </div>

        
      <h1 className='my-[10vh] h-[10vh] w-[80%] font-bold text-5xl mx-auto flex justify-center items-center'>
          UPDATES
      </h1>

      <div className='h-[80vh] mx-auto w-[80%]'>
        <div className="elem px-5 h-[25%] w-full border-t-[2px] border-black">
          <div className='w-[70%] flex justify-between items-center h-full'>
          <h1 className='font-bold uppercase'>Men's <br/>Fashion</h1>
          <div className="content flex w-[30%] flex-col">
            <h1 className='font-bold text-3xl'>Khadim & Tom Ford</h1>
            <p>25Th March 2020</p>
          </div>
          </div>
        </div>
        <div className="elem px-5 h-[25%] w-full border-t-[2px] border-black">
        <div className='w-[70%] flex justify-between items-center h-full'>
          <h1 className='font-bold uppercase'>Women's <br/>Fashion</h1>
          <div className="content w-[30%] flex flex-col">
            <h1 className='font-bold text-3xl'>Arena Homme</h1>
            <p>25Th March 2020</p>
          </div>
          </div>
        </div>
        <div className="elem px-5 h-[25%] w-full border-t-[2px] border-black">
        <div className='w-[70%] flex justify-between items-center h-full'>
          <h1 className='font-bold uppercase'>Special <br/>View</h1>
          <div className="content flex w-[30%] flex-col">
            <h1 className='font-bold text-3xl'>Jing for Wonderland</h1>
            <p>25Th March 2020</p>
          </div>
          </div>
        </div>
        <div className="elem px-5 h-[25%] w-full border-t-[2px] border-black border-b-[2px]">
        <div className='w-[70%] flex justify-between items-center h-full'>
          <h1 className='font-bold uppercase'>Models<br/>Talk</h1>
          <div className="content flex w-[30%] flex-col">
            <h1 className='font-bold text-3xl'>Glass X Belle</h1>
            <p>25Th March 2020</p>
          </div>
          </div>
        </div>
      </div>

      <div className='flex justify-between mt-[10vh] h-[80vh] w-[80%] mx-auto'>

          <div className='w-[47%] h-full bg-cover bg-center bg-[url("./image5.png")]'>

          </div>

          
          <div className='w-[47%] h-full'>

              <div className='h-[50%] w-full'>
                  <h1 className='font-bold text-5xl '>MOVIE SHOT</h1>
                  <h2 className='text-xl py-3'>London based Tom Mitchell has <br/>a distinct aesthetic within his <br/>photography & moving image</h2>
                  <p className='py-4'>Tom's calm nature and eagerness to create; while still maintaing a high level of professsionalism; has seen him slide into the fashion industry - photographing campaingns, looks books, editorials, portraits, short films and TV commercials.</p>
              </div>
              <div className='flex justify-between h-[50%] w-full'>
                <div className='bg-cover bg-[url("./image6.png")] bg-center w-[47%] h-full'></div>                
                <div className='bg-cover bg-[url("./image7.png")] bg-center w-[47%] h-full'></div>
              </div>
          </div>
      </div>

      <div className='mt-[10vh] h-[80vh] w-[80%] mx-auto bg-[url("./image8.png")] bg-cover '>
      </div>


      <div className='mt-[10vh] h-[100vh] flex justify-between w-[80%] mx-auto'>
        <div className='w-[60%] bg-[url("./image9.png")] bg-cover bg-top'></div>
        <div className='w-[33%] flex flex-col justify-between'>
                <div className='w-full h-[75%] bg-[url("./image10.png")]'></div>
                <div className='w-full flex justify-between h-[20%]'>
                  <h2 className='font-bold text-md'>"Body" and "No Lie" - 90s inspired R&B sound that is drawing a new comparisons to Dua Lipa</h2>
                  <p className='text-sm'>There aren't many 22 year-olds with the introspection of Icelandic artist Glowie - real name Sara Pétursdóttir - but then again, she's always been one for doing her own thing.
                Sources and related content
                </p>
                </div>

        </div>
      </div>
    
        {/* Animated Marquee */}

        <div className='marquee my-[10vh]'>
        <h1 className='marquetext inline-block font-bold text-[4vw]'>PREMIER MODELS 2020</h1>
        <h1 className='marquetext inline-block font-bold text-[4vw]'>PREMIER MODELS 2020</h1>
        <h1 className='marquetext inline-block font-bold text-[4vw]'>PREMIER MODELS 2020</h1>
        <h1 className='marquetext inline-block font-bold text-[4vw]'>PREMIER MODELS 2020</h1>
        <h1 className='marquetext inline-block font-bold text-[4vw]'>PREMIER MODELS 2020</h1>
        </div>

        {/*  */}
      <div className='flex justify-between mt-[10vh] h-[60vh] w-[80%] mx-auto'>
        <div className='h-full w-[20%]'>
        <h1 className='text-black h-[10vh] w-[80%] font-bold text-5xl'>
          BLOG
      </h1>

        </div>
        <div className='flex flex-col justify-between px-5 h-full w-[40%]'>
          <h2 className='text-xl'>Jack Thompson is featured in a story crossing bridges for ID Magazine. The shot was taken by Maxwell Tomlinson and styled by Louise Prier Tisdall.</h2>
          <div className='h-[65%] bg-[url("./image11.png")] bg-cover bg-top'></div>          
        </div>
        <div className='flex flex-col justify-between px-5 h-full w-[40%]'>
          <h2 className='text-xl'>As London Fashion Week has concluded, we've compiled a list of fresh new faces and showgirls who have walked the runway for some of the biggest designers.</h2>
          <div className='h-[65%] bg-[url("./image12.png")] bg-cover bg-top'></div>
        </div>
      </div>

      <div className='flex mt-[20vh] border-t-[2px] border-b-[2px] border-black mb-[5vh] h-[40vh] w-full'>
          <div className=" h-full w-[40%]">
            <div className="h-[20%]  w-[80%] mx-auto flex items-center justify-between">
          <h1 className='tracking-[-3px] text-[40px] font-semibold'>premier</h1>
          <h2 className='text-lg'>Models</h2>
            </div>
          </div>
          <div className=" h-full w-[20%] border-l-[2px] border-r-[2px] border-black">
          <h2 className='text-lg w-[80%] mx-auto h-[20%] items-center flex justify-center'>Women/Man</h2>
          </div>
          <div className=" h-full w-[40%]">
            <div className='w-full h-[40%]  border-b-[2px] border-black flex items-center px-7 text-lg'>Agency/Blog/Information/Contact us</div>
            <div className='w-full h-[60%]  flex items-center px-7 text-lg'>© All content Copyright <br/>
PREMIER MODELS Inc. 1981-2020 / or their respective<br/>
owners where indicated</div>
          </div>
      </div>
    </div>
  )
}

export default App