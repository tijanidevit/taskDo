import { Searchbar } from "./HeaderElements/Searchbar";

export const Header = () => {
  return (
    <header className="bg-white text-black p-6 flex items-center justify-between border">
      <h1 className=" text-[28px] font-medium	leading-[142.857%] tracking-[-0.28px]">
        Team Seven
      </h1>
      <Searchbar />
      <div className="flex items-center space-x-4">
        <div className="flex">
          <div className="p-4 rounded-md bg-green-400 ml-[-0.4rem]"></div>
          <div className="p-4 rounded-md bg-yellow-400 ml-[-0.4rem]"></div>
          <div className="p-4 rounded-md bg-green-400 ml-[-0.4rem]"></div>
          <div className="p-2 rounded-md bg-yellow-400 ml-[-0.4rem] text-[14px] leading-[171.429%] font-medium text-[#2D3036]">
            +11
          </div>
        </div>

        <p className="leading-[162.5%] font-medium text-[#2D3036]">
          14 Members
        </p>

        <button className="rounded bg-blue-500 leading-[162.5%] font-medium px-5 py-2 text-white">
          Invite
        </button>
      </div>
    </header>
  );
};
