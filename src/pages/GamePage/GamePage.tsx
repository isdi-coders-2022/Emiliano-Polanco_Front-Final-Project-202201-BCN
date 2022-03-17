import InputGame from "../../components/InputGame/InputGame";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const GamePage = () => {
  const textExample =
    ' <NavigationBar />\r\n      <div className={`grid grid-cols-6 h-[calc(100vh-4.5rem)] p-12`}>\r\n        <div>\r\n          <div className="bg-yellowSpace rounded-2xl h-44 w-24 -translate-y-16 flex items-end p-3">\r\n            <span className="text-2xl">Start typing</span>\r\n          </div>\r\n          <div className="w-10 my-10 ">\r\n            <p className="text-4xl font-semibold text-gray-600 pl-2">48 wpm</p>\r\n          </div>\r\n          <div className="w-10 my-10 ">\r\n            <p className="text-4xl font-semibold text-gray-600 pl-2">\r\n              98% accur.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div className="col-span-5">\r\n          <InputGame text={textExample} />';
  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className={`grid grid-cols-6 h-[calc(100vh-4.5rem)] p-12`}>
        <div>
          <div className="bg-yellowSpace rounded-2xl h-44 w-24 -translate-y-16 flex items-end p-3">
            <span className="text-2xl">Start typing</span>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">48 wpm</p>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">
              98% accur.
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <InputGame text={textExample} />
        </div>
      </div>
    </>
  );
};

export default GamePage;
