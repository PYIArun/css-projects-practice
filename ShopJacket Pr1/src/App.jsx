import React from 'react'
import './App.css'
import { IoBagOutline } from 'react-icons/io5'
import { BsArrowUpRight } from "react-icons/bs";
const App = () => {
  return (
    <>

        <div className='main h-screen w-screen'>


            <div className='w-screen h-[60%]'>

                <div className='navbar h-[100px] flex justify-end items-center pr-6 font-semibold'>

                  <ul className='flex list-none gap-5 items-center'>
                    <li>About</li>
                    <li>News</li>
                    <li>Cart</li>
                    <div className='rounded-full hover:cursor-pointer hover:border-black hover:border hover:bg-transparent bg-black h-[30px] w-[30px] flex items-center justify-center '>
                    <IoBagOutline className='hover:text-black  text-white' />

                    </div>

                  </ul>

                </div>


                <div className='pl-20'>
                  <h1 className='text-6xl'>Lightly padded,
                    <br/>
                    quilted jacket in <br/>
                    recycled polyester.
                  </h1>


                  <div className='flex justify-between'>
                  <p className=' pt-7 font-medium'>
                    Exclusive brands aspire for the label haute<br/> couture, but the term is technically
                    limited to <br/> members of the Chambre Syndicale de la Haute
                  </p>


                    <div className='right-items w-[20%] pr-9 '>

                        <div className='py-3 border-t-2 border-black flex justify-between items-center'>
                          <div className='flex items-center justify-between group w-[100%]'>
                        <a href='#' className='hover:underline '>Add to Cart</a>
                        <BsArrowUpRight className='opacity-0 group-hover:opacity-100'/>
                          </div>
                        </div>

                        <div className='py-3 border-t-2 border-black flex justify-between items-center'>
                          <div className='flex items-center justify-between group w-[100%]'>
                        <a href='#' className='hover:underline '  >Product Details</a>
                        <BsArrowUpRight className='opacity-0 group-hover:opacity-100'/>
                          </div>
                        </div>

                        <div className='py-3 border-t-2 border-black flex justify-between items-center'>
                          <div className='flex items-center justify-between group w-[100%]'>
                        <a href='#' className='hover:underline '>Shipping</a>
                        <BsArrowUpRight className='opacity-0 group-hover:opacity-100'/>
                          </div>

                        </div>

                    </div>

                  </div>
                </div>



            </div>

              <div className="w-screen h-[40%] bg-black bg-[url('./images/image.png')] bg-cover">
                

              </div>

        </div>

    
    </>
    

  )
}

export default App