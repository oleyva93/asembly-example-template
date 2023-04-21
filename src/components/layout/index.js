import { useState } from "react";
import HeaderPage from "./header";
import SideBar from "./sidebar";
import Head from "next/head";
import { Backdrop } from "@mui/material";
import useEvent from "@/hooks/useEvent";

function Layout({ children, headerTitle }) {
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = useEvent(() => {
    setCollapse((prev) => !prev);
  });

  const handleCloseCollapse = useEvent(() => {
    setCollapse(true);
  });

  return (
    <>
      <Head>
        <title>{headerTitle || "Fusus Assembly"}</title>
      </Head>
      <HeaderPage onCollapse={handleCollapse} />
      <div className="flex">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={!collapse}
          onClick={handleCollapse}
        />
        <SideBar collapse={collapse} onCollapse={handleCloseCollapse} />
        <section className="fixed w-full overflow-y-auto h-screen px-4 pt-[70px] pb-3 bg-gray-50 dark:bg-zinc-700">
          {children}
        </section>
      </div>
    </>
  );
}

export default Layout;
