import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  alpha,
  Avatar,
  Grid,
  IconButton,
  styled,
  Tooltip,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQueryClient } from "react-query";
import { useLogout, useSession } from "../hooks/useSession";

export default function HeaderPage({ onCollapse }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const qC = useQueryClient();

  const { data: profile } = useSession();

  const { mutateAsync: logout } = useLogout({
    onSuccess: () => {
      router.push("/login");
      qC.clear();
    },
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {profile?.email?.[0]}
              </Avatar>
            </IconButton>
          </Tooltip>
          <StyledMenu
            id="account-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <AccountBoxIcon />
              Account
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <SettingsIcon />
              Settings
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <CorporateFareIcon />
              Organization
            </MenuItem>
            <MenuItem
              onClick={() => {
                logout();
                handleClose();
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

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));
