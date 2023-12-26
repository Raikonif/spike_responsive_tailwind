import { GiMicroscope } from "react-icons/gi";
function Menu() {
  const isMobile = () => {
    if (window.innerWidth < 768) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-violet-600 py-4 md:px-10 px-7 justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Arial] text-gray-800">
          <GiMicroscope className="text-white mx-2" size={40} />
          <h3 className="text-white">PANDY BLOG</h3>
        </div>
        <ul className="flex w-auto items-center justify-between">
          <li className="m-2 mx-5 text-2xl text-white">Home</li>
          <li className="m-2 mx-5 text-2xl text-white">About</li>
          <li className="m-2 mx-5 text-2xl text-white">Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
