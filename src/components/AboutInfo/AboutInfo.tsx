const AboutInfo = () => {
  return (
    <div className="h-screen bg-yellowChill relative flex flex-col items-center justify-center overflow-hidden">
      <div className="bg-yellowSpace rounded-full h-60 w-60 absolute top-16 left-40"></div>
      <div className="bg-purpleSpace rounded-full md:h-[28rem] md:w-[28rem] h-40 w-40   absolute -top-16 -right-10"></div>
      <div className="bg-purpleSpace rounded-full h-[5rem] w-[5rem]   absolute top-32 leftt-10"></div>
      <div className="bg-orangeSpace rounded-full h-[6rem] w-[6rem] absolute top-40 -left-10"></div>
      <div className="bg-purpleSpace rounded-full h-[1rem] w-[1rem] absolute top-96 md:left-10 left-2"></div>
      <div className="bg-orangeSpace rounded-full h-[2rem] w-[2rem] md:visible invisible absolute top-[32rem] right-40"></div>
      <div className="bg-purpleSpace rounded-full h-[1rem] w-[1rem] md:visible invisible absolute top-96 right-10"></div>
      <div className="bg-orangeSpace rounded-full h-[2rem] w-[2rem] absolute top-[32rem] md:left-40 left-3"></div>
      <div className="bg-blueSpace rounded-full h-[32rem] w-[32rem] absolute -bottom-[14rem] -right-20"></div>
      <div className="bg-orangeSpace rounded-full h-[13rem] w-[13rem] absolute bottom-[1rem] left-20"></div>
      <p className="md:text-7xl text-5xl font-medium z-10 mb-8  ">
        Coding can be
      </p>
      <p className="md:text-7xl text-5xl font-medium z-10 mb-8">
        more fun when
      </p>
      <p className="md:text-7xl text-5xl font-medium z-10 text-center">
        you share your work
      </p>
    </div>
  );
};

export default AboutInfo;
