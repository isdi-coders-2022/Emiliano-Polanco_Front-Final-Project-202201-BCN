const AboutInfo = () => {
  return (
    <div className="h-screen bg-yellowChill relative flex flex-col items-center justify-center overflow-hidden">
      <div className="bg-yellowSpace rounded-full h-60 w-60 absolute top-16 left-40"></div>
      <div className="bg-purpleSpace rounded-full h-[28rem] w-[28rem] absolute -top-16 -right-10"></div>
      <div className="bg-purpleSpace rounded-full h-[5rem] w-[5rem] absolute top-32 leftt-10"></div>
      <div className="bg-orangeSpace rounded-full h-[6rem] w-[6rem] absolute top-40 -left-10"></div>
      <div className="bg-purpleSpace rounded-full h-[1rem] w-[1rem] absolute top-96 left-10"></div>
      <div className="bg-orangeSpace rounded-full h-[2rem] w-[2rem] absolute top-[32rem] right-40"></div>
      <div className="bg-purpleSpace rounded-full h-[1rem] w-[1rem] absolute top-96 right-10"></div>
      <div className="bg-orangeSpace rounded-full h-[2rem] w-[2rem] absolute top-[32rem] left-40"></div>
      <div className="bg-blueSpace rounded-full h-[32rem] w-[32rem] absolute -bottom-[14rem] -right-20"></div>
      <div className="bg-orangeSpace rounded-full h-[13rem] w-[13rem] absolute bottom-[1rem] left-20"></div>
      <p className="text-7xl font-medium    mb-8  ">Coding can be</p>
      <p className="text-7xl font-medium mb-8">more fun when</p>
      <p className="text-7xl font-medium  ">you share your work</p>
    </div>
  );
};

export default AboutInfo;
