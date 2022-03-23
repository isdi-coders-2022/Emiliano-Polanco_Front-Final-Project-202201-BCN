const BenefitsInfo = () => {
  return (
    <>
      <div className="lg:h-[90vh] bg-white relative flex flex-col items-center justify-center">
        <div className="bg-purpleSpace rounded-full lg:h-[5rem] lg:w-[5rem] absolute top-96 left-10"></div>
        <div className="bg-orangeSpace rounded-full lg:h-[2rem] lg:w-[2rem] absolute top-[32rem] right-40"></div>
        <div className="bg-yellowSpace rounded-full h-[1rem] w-[1rem] absolute top-80 right-10"></div>
        <div className="bg-orangeSpace rounded-full h-[2rem] w-[2rem] absolute top-[2rem] left-32"></div>
        <div className="bg-blueSpace rounded-full h-[1rem] w-[1rem] absolute top-45 left-14"></div>
        <div className="bg-yellowSpace rounded-full h-[4rem] w-[4rem] absolute top-[5rem] right-40"></div>
        <div className="bg-purpleSpace rounded-full h-[1rem] w-[1rem] absolute top-4 left-11"></div>
        <div className="bg-yellowSpace rounded-full h-[2rem] w-[2rem] absolute top-[35rem] left-43"></div>
        <ul className="flex lg:flex-row flex-col bg-white xl:w-9/12 w-10/12 items-center xl:mt-0 mt-11">
          <li className="flex flex-col p-9 lg:w-1/3 ">
            <div className="flex justify-center">
              <img src="/phone.png" className="h-24 w-auto" alt="phone" />
              <div className="flex flex-col justify-center items-center pl-3">
                <span className="text-4xl font-medium z-10">Your code </span>
                <span className="text-4xl font-medium z-10"> anywhere</span>
              </div>
            </div>
            <p className="pl-5 mt-4 xl:w-full w-[18rem]">
              You can upload any snippet to your collection and acces to it
              whenever you need it
            </p>
          </li>
          <li className="flex flex-col p-9 lg:w-1/3">
            <div className="flex justify-center">
              <img src="/peace.png" className="h-24 w-auto" alt="inspire" />
              <div className="flex flex-col justify-center items-center pl-3">
                <span className="text-4xl font-medium self-start">Take </span>
                <span className="text-4xl font-medium">inspiration</span>
              </div>
            </div>
            <p className="pl-5 mt-4 xl:w-full w-[18rem]">
              If you write always the same code patrons , take a look at here
              and explore snippets around the world
            </p>
          </li>
          <li className="flex flex-col p-9 lg:w-1/3">
            <div className="flex justify-center">
              <img src="/share.png" className="h-24 w-auto" alt="share" />
              <div className="flex flex-col justify-center items-center pl-3">
                <span className="text-4xl font-medium z-10 self-start">
                  Share{" "}
                </span>
                <span className="text-4xl font-medium z-10">your work</span>
              </div>
            </div>
            <p className="pl-5 mt-4 xl:w-full w-[18rem]">
              Share your code with everyone and let the world see your aproach
              to that problem
            </p>
          </li>
          <li className="flex flex-col"></li>
        </ul>
      </div>
      <div className="flex items-center justify-end relative h-screen flex-col">
        <img
          src="/bottomBackground.png"
          alt="waves background"
          className="absolute w-screen h-screen"
        />
        <div className="flex flex-col  items-center justify-center z-30 mt-11 mb-20">
          <span className="text-white xl:text-7xl md:text-5xl text-3xl font-medium text-center">
            Join millions of coders and boost
          </span>
          <span className="text-white xl:text-7xl md:text-5xl text-3xl font-medium text-center">
            your productivity
          </span>
        </div>
      </div>
      <div className="h-20 bg-wavesGray"></div>
      <ul className="h-14 bg-gray-800 w-full z-30 flex justify-around items-center text-xs">
        <li className="text-white">© 2022 Codespace Inc.</li>
        <li className="text-white">Terms & conditions</li>
        <li className="text-white">Privacy policy.</li>
      </ul>
    </>
  );
};

export default BenefitsInfo;
