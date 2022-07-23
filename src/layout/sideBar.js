import React from 'react';
import {Divider, Drawer, ListItem, ListItemText} from "@mui/material";
import {BrowserRouter, Link, Switch} from "react-router-dom";
import Routes from "../routes/routes";
import List from "@mui/material/List";

const SideBar = ({open, setIsDrawerOpen}) => {
  const pages = [
    "Products",
    "Shopping cart",
  ]
  const drawer = (
    <div>
      <Divider/>
      <List style={{width: "300px"}}>
        {pages.map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text.toLowerCase().replace(/\s/g, '')} style={{color: "inherit"}}>
            <ListItemText primary={text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <BrowserRouter>
      <Drawer
        anchor={"left"}
        open={open}
        onClose={() => setIsDrawerOpen(false)}
        onClick={() => setIsDrawerOpen(false)}
      >
        {drawer}
      </Drawer>
      <main>
        <Switch>
          {Routes()}
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default SideBar;