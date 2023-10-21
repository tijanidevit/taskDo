import {
  HomeIcon,
  PencilSquareIcon,
  ListBulletIcon,
  BellIcon,
  ChevronDownIcon,
  ChatBubbleBottomCenterTextIcon,
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <aside className="bg-white w-[20%] text-black p-6 border-r">
      <h1 className="mb-8 text-[28px] font-semibold	">MyWork</h1>

      <div className="flex flex-col space-y-8 px-4 text-[#898E99] leading-[162.5%] font-medium">
        <div className="flex space-x-3 items-center">
          <HomeIcon width={20} />
          <span className="w-[75%]">Home</span>
        </div>

        <div className="flex space-x-3 items-center">
          <ListBulletIcon width={20} />
          <span className="w-[75%]">Tasks</span>
        </div>

        <div className="flex space-x-3 items-center">
          <ChatBubbleBottomCenterTextIcon width={20} />
          <span className="w-[75%]">Message</span>
        </div>

        <div className="flex space-x-3 items-center">
          <BellIcon width={20} />
          <span className="w-[75%]">Notifications</span>
        </div>

        <div className="flex space-x-3 text-black font-medium items-center">
          <PencilSquareIcon width={20} />
          <span className="w-[75%]">Tools</span>
          <ChevronDownIcon width={20} />
        </div>

        <div className="flex space-x-3 text-black font-medium items-center">
          <ClipboardDocumentListIcon width={20} />
          <span className="w-[75%]">Files</span>
          <ChevronDownIcon width={20} />
        </div>
      </div>
    </aside>
  );
};
