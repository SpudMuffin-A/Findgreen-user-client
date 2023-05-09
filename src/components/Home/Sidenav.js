import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
HomeIcon,  
BellIcon,
Booking,
  HistoryIcon,
  OutlineLogoutIcon,
  FormsIcon,
  SearchIcon,
  WalletIcon,
  FavouriteIcon,
  UserIcon,
  RoleIcon,
  ReportIcon,
} from "../../icons";
import { useHistory } from 'react-router-dom'
import Header from "../Header";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);


export default function Sidenav(props) {
    const history =useHistory()
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={` ${props.mode === 'dark' ? 'text-white' : 'text-gray-800'}`}>

    <Box sx={{ display: "flex" }} >
      <CssBaseline />

      <Drawer
      
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          marginTop: "64px",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            marginTop: "66px",
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={{handleDrawerOpen}}
        
      >
        <Divider />
        <List>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/dashboard"})}}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/chargingStation"})}}>
            <ListItemButton>
              <ListItemIcon>
                <Booking />
              </ListItemIcon>
              <ListItemText primary="Charging Station Management" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/reports"})}}>
            <ListItemButton>
              <ListItemIcon>
                <ReportIcon />
              </ListItemIcon>
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/notification"})}}>
            <ListItemButton>
              <ListItemIcon>
                <BellIcon />
              </ListItemIcon>
              <ListItemText primary="Notification Management" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/user-management"})}}>
            <ListItemButton>
              <ListItemIcon>
                <UserIcon />
              </ListItemIcon>
              <ListItemText primary="User Management" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/role-management"})}}>
            <ListItemButton>
              <ListItemIcon>
                <RoleIcon />
              </ListItemIcon>
              <ListItemText primary="Role Management" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/app/Favouritestation"})}}>
            <ListItemButton>
              <ListItemIcon>
                <FavouriteIcon />
              </ListItemIcon>
              <ListItemText primary="Support and Feedback" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>{history.push({pathname:"/"})}}>
            <ListItemButton>
              <ListItemIcon>
                <OutlineLogoutIcon style={{width:"35px"}} />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open} sx={{ marginTop: 64 }}>
        {/* <DrawerHeader /> */}
        
      </Main>
      
    </Box>
    </div>
  );
}
