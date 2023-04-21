import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const IconWithToolTip = ({ collapse, children, text }) => (
  <Tooltip title={collapse ? text : ""} placement="right">
    {children}
  </Tooltip>
);

export default function SideBar({ collapse, onCollapse }) {
  const twCollapse = collapse ? "ml-[-225px]" : "ml-[0px]";

  return (
    <section
      className={`fixed transition-all z-[9999] duration-500 flex h-screen min-h-full w-[210px] min-w-[211px] items-start ${twCollapse} justify-center overflow-y-hidden bg-gray-50 dark:bg-zinc-700`}
    >
      <nav
        id="sidenav-8"
        className={`fixed transition-all duration-500 border-r border-slate-300 dark-gbl-border w-[210px] min-w-[211px] top-0 left-0 z-[1035] h-full ${twCollapse} -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      >
        <div className="flex items-center flex-col pr-[25px] border-b border-[#cbd5e1] pb-[10px]">
          <Image
            src="/site/fusus-main-logo.png"
            width={115}
            height={115}
            alt="Fusus Logo"
          />
          <Typography className="!mt-[-5px] !ml-[45px] !text-[16px] !font-semibold !text-[#1c4b59]">
            Assembly
          </Typography>
        </div>
        <ul
          className="relative m-0 mt-5 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref
        >
          <li className="relative mb-1">
            <Link
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-200 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              href="/dashboard"
              onClick={onCollapse}
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Dashboard" collapse={collapse}>
                  <DashboardIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Dashboard</Typography>
            </Link>
          </li>
          <li className="relative mb-1">
            <Link
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-200 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              href="/logs"
              onClick={onCollapse}
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Log" collapse={collapse}>
                  <WebStoriesIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Logs</Typography>
            </Link>
          </li>
          <li className="relative mb-1">
            <Link
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-200 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              href="/static-logs"
              onClick={onCollapse}
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Static Log" collapse={collapse}>
                  <ManageSearchIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Static Logs</Typography>
            </Link>
          </li>

          <li className="relative mb-1">
            <Link
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-200 hover:text-inherit hover:outline-none focus:bg-slate-200 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              href="/admin"
              onClick={onCollapse}
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Admin" collapse={collapse}>
                  <AdminPanelSettingsIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Admin</Typography>
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
