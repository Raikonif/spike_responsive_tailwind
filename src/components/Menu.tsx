import { GiMicroscope } from "react-icons/gi";
import { useState } from "react";
function Menu() {
  const [selected, setSelected] = useState<string>("HOME");
  const options: string[] = ["HOME", "ABOUT", "BLOG"];

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-violet-600 py-4 md:px-10 px-7 justify-between">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Arial] text-gray-800">
          <GiMicroscope className="text-white mx-2" size={40} />
          <h3 className="text-white">PANDY BLOG</h3>
        </div>
        <ul className="flex w-auto items-center justify-between">
          {options.map((option) => (
            <li
              key={option}
              className={`${
                selected === option ? "bg-fuchsia-600 rounded-xl" : ""
              } m-2 p-2 text-2xl text-white active:text-fuchsia-600 active:bg-violet-400 active:rounded-lg font-[Arial]`}
              onClick={() => {
                setSelected(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
