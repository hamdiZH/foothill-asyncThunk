import React, {useState} from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./sideBar";

const AppLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Box sx={{flexGrow: 1}} style={{marginTop: "100px"}}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{mr: 2}}
              onClick={() => setIsDrawerOpen(true)}
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
              {/*Mail Delivery Service /!*Mail Delivery Service / {title}*!/*/}
            </Typography>
          </Toolbar>
        </AppBar>
        <SideBar open={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen}/>
      </Box>
    </>
  );
};

export default AppLayout;