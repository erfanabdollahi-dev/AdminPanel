
import { LuSearch } from "react-icons/lu";

const Header = () => {


  return (
    <header className="al-header">
      <div className="al-header-right h-full flex gap-4">

        <div className=" flex items-center px-2 gap-2 h-full bg-gray-600 border-2 border-gray-600 rounded-md focus-within:border-indigo-500 duration-200 transition-colors">
          <LuSearch size={25} />
          <input
            type="text"
            placeholder="جست و جو"
            className="border-none outline-0"
          />
        </div>
      </div>
      <div className="al-header-left h-full ">
        <div className="flex items-center h-full gap-4">
          <div className="profile-img-con h-full aspect-square rounded-full bg-white ">
            <img src="/fasf/asdfsa/fsad/f" alt="" />
          </div>
          <div className="info-con ">
            <p className="text-sm">عرفان </p>
            <small className=" text-[12px]">2st.fncs@mgail.com</small>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
