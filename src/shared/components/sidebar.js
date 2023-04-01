import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import WebStoriesIcon from "@mui/icons-material/WebStories";
import { Tooltip, Typography } from "@mui/material";

const IconWithToolTip = ({ collapse, children, text }) => (
  <Tooltip title={collapse ? text : ""} placement="right">
    {children}
  </Tooltip>
);

export default function SideBar({ collapse }) {
  const twCollapse = collapse
    ? "w-[62px] min-w-[62px]"
    : "w-[210px] min-w-[211px]";

  return (
    <section
      className={`relative transition-all duration-500 flex h-screen min-h-full items-start ${twCollapse} justify-center overflow-y-hidden bg-gray-50 dark:bg-zinc-700`}
    >
      <nav
        id="sidenav-8"
        className={`absolute transition-all duration-500 border-r border-slate-300 dark-gbl-border top-0 left-0 z-[1035] h-full ${twCollapse} -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800`}
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-position="absolute"
        data-te-sidenav-accordion="true"
      >
        <ul
          className="relative m-0 mt-5 list-none px-[0.2rem] pb-12"
          data-te-sidenav-menu-ref
        >
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <span className="mr-2 ml-[-4px] [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Dashboard" collapse={collapse}>
                  <HomeIcon fontSize="large" />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Dashboard</Typography>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Log" collapse={collapse}>
                  <WebStoriesIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Log</Typography>
            </a>
          </li>
          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Static Log" collapse={collapse}>
                  <ManageSearchIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Static Log</Typography>
            </a>
          </li>

          <li className="relative">
            <a
              className="flex cursor-pointer items-center truncate rounded-[5px] py-[0.45rem] px-6 text-[0.85rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
              data-te-sidenav-link-ref
            >
              <span className="mr-4 [&>svg]:h-3.9 [&>svg]:w-3.9 [&>svg]:text-gray-600 dark:[&>svg]:text-gray-300">
                <IconWithToolTip text="Admin" collapse={collapse}>
                  <AdminPanelSettingsIcon />
                </IconWithToolTip>
              </span>
              <Typography variant="body1">Admin</Typography>
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
