import mokup from '../assets/img/dashboard-mockup.png'

function Dashboard() {
  return (
    <div className="container ring-1 ring-gray-800  max-w-4xl md:max-w-full   px-20 ">
          <div className="ring-1 ring-gray-800 w-full  min-h-screen px-16  py-20 flex align-middle justify-between space-x-10 relative overflow-hidden">
              <div className="text-white w-2/3 ml-14 py-24">
                  <div className='mb-12'>
                      <p className='text-sm font-extralight tracking-widest text-gray-300 dark:text-gray-400 mb-10'>Level up with</p>
                      <h2 className=' text-6xl'>
                          <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-normal font-serif tracking-wider'>Connect apps</span>
                          with CRM
                      </h2>
                  </div>
                  <div className='flex align-middle justify-center gap-5'>
                      <div className='w-[70px] h-10 bg-slate-700 border flex align-middle justify-center rounded-full'>
                      <svg className="id vc xi w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
                            </svg>
                      </div>
                      <div className='mb-10'> 
                          <h3 className='text-xl font-normal mb-5'>1200+ Premium Apps</h3>
                          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                      </div>
                  </div>
                  <div className="flex align-middle justify-center gap-5">
                      <div className='w-[70px] h-10 bg-slate-700 border flex align-middle justify-center rounded-full'>
                      <svg className="id vc xi w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                            </svg>
                      </div>
                      <div>
                      <h3 className='text-xl font-normal mb-5'>Control Directly from Dashboard</h3>
                      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                      </div>
                  </div>
              </div>
              <div className="text-white w-full h-[830px]  relative bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg">
                  <img src={mokup} alt="mokup.png" className='max-w-6xl h-[750px] absolute top-10 left-16'/>
              </div>
      </div>
    </div>
  )
}

export default Dashboard
