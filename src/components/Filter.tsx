interface FilterProps {
  selected: string;
  setSelected: (value: string) => void;
}

function Filter({ selected, setSelected }: FilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value);
  };

  return (
    <div className="m-1 mt-3 p-3 sm:mt-6 w-full justify-center">
      <select
        name="study"
        id="study-select"
        className=" border w-full p-3 md:px-10 grid grid-cols-3 rounded-lg justify-between items-center text-violet-600 font-[Arial] font-semibold text-sm"
        onChange={handleChange}
        value={selected}
      >
        <option
          value={"ALL"}
          className="text-violet-600 font-[Arial] font-semibold text-sm w-auto"
        >
          ALL
        </option>
        <option
          value={"PAP"}
          className="text-violet-600 font-[Arial] font-semibold text-sm w-auto"
        >
          PAPS
        </option>
        <option
          value={"CITHOLOGY"}
          className="text-violet-600 font-[Arial] font-semibold text-sm w-auto"
        >
          CITHOLOGY
        </option>
        <option
          value={"HISTOPATHOLOGY"}
          className="text-violet-600 font-[Arial] font-semibold text-sm w-auto"
        >
          HISTOPATHOLOGY
        </option>
        {/* <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="PAPS"
          />
          <label className="text-white font-[Arial] font-bold">PAPS</label>
        </div>
        <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="CITHOLOGY"
          />
          <label className="text-white font-[Arial] font-bold">CITO</label>
        </div>
        <div>
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="HISTOLOGY"
          />
          <label className="text-white font-[Arial] font-bold">HISTO</label>
        </div>
        <div className="flex items-center w-full justify-center grid-col-span-3">
          <input
            className="text-white mx-5 text-bold text-[Arial] text-xl"
            type="radio"
            name="study_type"
            value="ALL"
          />
          <label className="text-white font-[Arial] font-bold w-full">
            TODOS
          </label>
        </div> */}
      </select>
    </div>
  );
}

export default Filter;
