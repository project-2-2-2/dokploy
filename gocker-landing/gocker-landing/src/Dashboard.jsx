import React from "react";

const Dashboard = () => {
  return (
    <div className='relative z-20 -mt-10 min-h-[78vh] md:mt-0 md:min-h-[84vh] w-full overflow-visible bg-[url("/bg5.jpg")] bg-cover bg-center bg-no-repeat'>
      {/* <div className='absolute rounded-full bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-purple-600 blur-[50px]'></div> */}
      {/* <div className='absolute top-20 left-30 right-30 bottom-30 flex flex-col blur-[100px]'>
    <div className='flex-1 rounded-[1000px] bg-[#7a5fff] w-full'></div>
    <div className='flex-1 rounded-[1000px] bg-[#7a5fff] w-full'></div>
    <div className='flex-1 rounded-[1000px] bg-[#7a5fff] w-full'></div>
    <div className='flex-1 rounded-[1000px] bg-[#7a5fff] w-full'></div>

</div> */}

      <div className="absolute left-1/2 -top-16 h-130 w-240 -translate-x-1/2 md:-top-10">
        <div className="absolute z-999 w-full bottom-0 h-70 bg-linear-to-t from-black to-transparent "></div>
        <div className="bg-neutral-900 z-10 px-2 pt-2  w-full h-full absolute rounded-lg">
          <img
            className="w-full h-full rounded-lg"
            src="https://framerusercontent.com/images/uOkvXulKgJEGKyQvS6Q111yCsM.png?scale-down-to=2048"
          ></img>
        </div>
        <div className="bg-neutral-900 opacity-70 left-1/2 -translate-x-1/2 z-9 px-2 pt-2 -translate-y-3  w-[95%] h-[95%] absolute rounded-lg"></div>

        <div className="bg-neutral-900 opacity-50 left-1/2 -translate-x-1/2 z-9 px-2 pt-2 -translate-y-6  w-[90%] h-[90%] absolute rounded-lg"></div>
        <div className="bg-neutral-900 opacity-40 left-1/2 -translate-x-1/2 z-9 px-2 pt-2 -translate-y-9  w-[85%] h-[85%] absolute rounded-lg"></div>
      </div>

    </div>
  );
};

export default Dashboard;
