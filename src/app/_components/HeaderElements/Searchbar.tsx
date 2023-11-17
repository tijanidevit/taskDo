import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export const Searchbar = () => {
  return (
    <div className="flex bg-gray-200 space-x-3 rounded px-3 py-2 w-[28%]">
      <MagnifyingGlassIcon color="#898E99" width={20} />
      <input
        type="text"
        className="bg-gray-200 border-0 outline-0 leading-[162.5%] font-normal"
        placeholder="Search"
      />
    </div>
  );
};
