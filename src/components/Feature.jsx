import feature from "../assets/img/feature.png";

function Feature() {
    return (
    //   bg-[#111827]
    <div className=" conatiner  max-w-4xl md:max-w-full px-20 overflow-hidden ">
      <div className=" ring-1 ring-gray-800 relative px-10 py-32 flex align-middle justify-between z-20">
        {/* <div className=" absolute top-60 right-1/4 w-[350px] h-[380px]  rounded-full bg-gradient-to-br from-cyan-500 to-purple-500  -z-10  blur-3xl translate-x-20"></div> */}
        <div className=" text-white w-full h-full text-left mt-32 space-y-8">
        <h1 className="text-6xl font-semibold leading-tight tracking-wides">Analysis Data</h1>
          <h3 className="text-2xl mb-4 ">
            <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent text-2xl font-light">Keep control on your projects.</span> Don't make the same mistakes.
          </h3>
          <p className="text-lg font-medium leading-relaxed max-w-lg text-gray-400 dark:text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.
          </p>
        </div>
        <div className=" w-full h-full relative pl-32 flex align-middle justify-center">
        <div className=" absolute  w-[650px] -left-44  blur-[80px] opacity-80 -right-10 rotate-90">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#7f60f9"
                d="M27.4,-32.2C36.3,-18.6,44.8,-9.3,47.6,2.8C50.4,14.9,47.5,29.8,38.7,45.5C29.8,61.2,14.9,77.7,1.8,75.9C-11.2,74,-22.4,53.8,-32.3,38.1C-42.3,22.4,-50.9,11.2,-54.4,-3.5C-57.9,-18.2,-56.2,-36.3,-46.3,-50C-36.3,-63.6,-18.2,-72.7,-4.4,-68.3C9.3,-63.8,18.6,-45.8,27.4,-32.2Z"
                  transform="translate(120 100)"
                  
                 
                /> 
                 <path
                  // fill="#CE5AED"
                  fill="#17bdca"
                  d="M27.4,-32.2C36.3,-18.6,44.8,-9.3,47.6,2.8C50.4,14.9,47.5,29.8,38.7,45.5C29.8,61.2,14.9,77.7,1.8,75.9C-11.2,74,-22.4,53.8,-32.3,38.1C-42.3,22.4,-50.9,11.2,-54.4,-3.5C-57.9,-18.2,-56.2,-36.3,-46.3,-50C-36.3,-63.6,-18.2,-72.7,-4.4,-68.3C9.3,-63.8,18.6,-45.8,27.4,-32.2Z"
                  transform="translate(50 30)"
                />
                
                </svg>
             
          </div>
          <div className="relative h-[550px]">
            <img src={feature} alt="feature.png" className="h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
