import { IoMenu } from "react-icons/io5";

export default function SaleDropdown() {
  return (
    <>
      <div className="bg-black text-white px-4 py-4 flex flex-row justify-center items-center space-x-3 md:w-[30%] cursor-pointer">
        <IoMenu className="h-8 w-8" />
        <span className="font-semibold">New Bromptons for Sale</span>
      </div>
    </>
  );
}
