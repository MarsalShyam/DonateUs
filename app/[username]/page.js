import React from 'react'

const Username = async ({ params }) => {
  return (
    <>
      <div className='cover w-full relative'>
        <img className='object-cover w-full h-[350]' src="./banner.jpeg" alt="banner" />
        <div className='absolute flex right-[48%] -bottom-14 border-2 rounded-full'>
          <img width={100} height={100} className='rounded-full' src='./img2.webp' alt='img' />
        </div>
      </div>
      <div className="info flex justify-center items-center my-20 flex-col gap-2">
        <div className='font-bold text-lg'>
          <h1>@{params.username}</h1>
        </div>
        <div className='text-slate-400'>9,719 memeber . 82 posts . $12,343/release</div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-10">
            {/* show list of all the supporters as a leaderboarder  */}
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5'>
              <li className='my-4 flex gap-2 items-center' >

                <img class="w-10 h-10 rounded-full" src="./img2.webp" alt="profilePic" />

                <span> Shubgam donated <span className='font-bold'>$30</span> with a message "I support You ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center' >

                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg class="absolute w-10 h-1o text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>

                <span> Shubgam donated <span className='font-bold'>$30</span> with a message "I support You ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center' >
                <div class="relative">
                  <img class="w-10 h-10 rounded-full" src="./img2.webp" alt="" />
                  <span class="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                </div>

                <span> Shubgam donated <span className='font-bold'>$30</span> with a message "I support You ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center' >

                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg class="absolute w-10 h-1o text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>

                <span> Shubgam donated <span className='font-bold'>$30</span> with a message "I support You ❤️"</span>
              </li>
              <li className='my-4 flex gap-2 items-center' >

                <div className="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                  <svg class="absolute w-10 h-1o text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                </div>

                <span> Shubgam donated <span className='font-bold'>$30</span> with a message "I support You ❤️"</span>
              </li>
             
            </ul>

          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className='text-2xl font-bold my-5'>Make a Payment</h2>
            <div className='flex gap-2 flex-col'>
              {/* input for name and message */}
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Name' />
              </div>
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Message' />
              </div>
              <div>
                <input type="text" className='w-full p-3 rounded-lg bg-slate-800' placeholder='Enter Amount' />
              </div>
              <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pay</button>

            </div>
            {/* Or choose from these amount */}
            <div className='flex gap-2 mt-2'>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $10</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $20</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay $50</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
