
import SidebarBtn from "@/components/SidebarBtn";
const SidebarTop = () => {
      console.log("sidebar top");
    return (
        <>
            <SidebarBtn />
            <div className="sidebar-top  ">
                <div className="flex items-center h-full w-full gap-4">
                    <div className="profile-img-con h-full aspect-square rounded-md bg-unit-bg dark:bg-bg-d ">
                        <img src="/fasf/asdfsa/fsad/f" alt="" />
                    </div>
                    <div className="info-con ">
                        <p className="text-sm">عرفان </p>
                        <small className=" text-[12px]">
                            2st.fncs@mgail.com
                        </small>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SidebarTop;
