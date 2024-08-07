import Illustration from "../assets/img/Illustration.png";

function Hero() {
  return (
    <div className=" container ring-1 ring-gray-800 max-w-4xl md:max-w-full px-20 ">
      <div className="  flex flex-col lg:flex-row gap-20 py-24 relative ring-1 ring-gray-800">
        <div className="text-white lg:w-2/3 relative pl-8">
          <p className=" text-base font-normal tracking-widest text-gray-300 uppercase ">
            A HUB FOR DESIGNERS, DEVELOPERS & MARKETERS
          </p>
          <h1 className="  mt-10 text-4xl font-normal text-white sm:mt-12 sm:text-5xl lg:text-6xl xl:text-8xl ">
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
              Unlimited Design
            </span>{" "}
            Inspiration
          </h1>
          <p className=" max-w-lg mt-8 text-xl font-normal text-gray-400 sm:mt-10">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>

          <div className=" flex flex-col">
            <div>
                <div className=" relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
            <div className=" absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
            <a
              href="#"
              title=""
              className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
              role="button"
            >
              {" "}
              Start Exploring Inspiration{" "}
            </a>
          </div>
            </div>
          
            <div>
            <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
          <span className="ml-2 text-base font-normal text-white"> 42 new design inspiration was added last week </span>
          </div>
            </div>
        
         </div>
        </div>
        <div className=" xl:absolute top-10 right-14 w-2/3 lg:w-2/4  ">
          <img src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
