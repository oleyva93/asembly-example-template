import { useState } from "react";
import HeaderPage from "./header";
import SideBar from "./sidebar";

function Layout({ children }) {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <HeaderPage onCollapse={() => setCollapse((prev) => !prev)} />
      <div className="flex">
        <SideBar collapse={collapse}>{children}</SideBar>
        <section className="w-full py-[25px] px-[20px] bg-gray-50 dark:bg-zinc-700">
          {children}
        </section>
      </div>
    </>
  );
}

export default Layout;
