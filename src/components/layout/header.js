import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar, Grid, IconButton, Tooltip } from "@mui/material";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useLogout, useSession } from "../../hooks/useSession";
import StyledMenu from "../common/styled-menu";
import useEvent from "@/hooks/useEvent";

export default function HeaderPage({ onCollapse }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();
  const qC = useQueryClient();

  const { data: profile } = useSession();

  const { mutateAsync: logout } = useLogout({
    onSuccess: () => {
      router.push("/login");
      qC.clear();
    },
  });

  const handleToggleMenu = useEvent((event) => {
    setAnchorEl(event?.currentTarget || null);
  });

  return (
    <nav
      className="flex-no-wrap px-6 min-h-[55px] max-h-[55px] relative flex w-full items-center justify-between border-b border-slate-300 dark-gbl-border bg-gray-100 dark:bg-zinc-800 py-2 shadow-md shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start"
      data-te-navbar-ref
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={6}>
          <IconButton size="medium" className="ml-[-9px]" onClick={onCollapse}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Tooltip title={profile?.email} placement="left">
            <IconButton
              onClick={handleToggleMenu}
              size="small"
              sx={{ ml: 2 }}
              aria-haspopup="true"
            >
              <Tooltip title={profile?.user?.email} placement="left">
                <Avatar sx={{ width: 32, height: 32 }}>
                  {profile?.user?.email?.[0]}
                </Avatar>
              </Tooltip>
            </IconButton>
          </Tooltip>
          <StyledMenu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => handleToggleMenu()}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => handleToggleMenu()} disableRipple>
              <AccountBoxIcon />
              Account
            </MenuItem>
            <MenuItem onClick={() => handleToggleMenu()} disableRipple>
              <SettingsIcon />
              Settings
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={() => handleToggleMenu()} disableRipple>
              <CorporateFareIcon />
              Organization
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                handleToggleMenu();
              }}
              disableRipple
            >
              <LogoutIcon />
              Logout
            </MenuItem>
          </StyledMenu>
        </Grid>
      </Grid>
    </nav>
  );
}
