import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GridViewIcon from "@mui/icons-material/GridView";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LogoutIcon from "@mui/icons-material/Logout";

const drawerWidth = 250;


export default function Sidebar() {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          fontWeight:"300",
          fontSize:"14px",
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "rgb(39, 24, 124)",
            color: "white",
  
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{marginTop:"15px",}}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white",  }}>
                <GridViewIcon />
              </ListItemIcon>
            <ListItemText primary={"Dashboard"}/>
            </ListItemButton>
          </ListItem>

          {[
            "Manage Subscription",
            "Young Brain",
            "Mid Career",
            "Vendor",
            "Consultant",
          ].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: "white" }}>
                  <BusinessCenterIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <GridViewIcon />
              </ListItemIcon>
              <ListItemText primary={"Reports"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={"Sign Out"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
