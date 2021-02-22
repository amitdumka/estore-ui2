import React from "react";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Button from '@material-ui/core/Button'

const Employee = () => {
  return (
    <div className="employee_page">
      <div class="employee_navbar">
        <AppBar position="absolute" color="primary">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">eStore: Employee</Typography>
            <div className="login_message">   
            <Button
              variant="outlined"
              color="default    "
              startIcon={<UserIcon />}              
            >
              UserName:
            </Button>            
            </div>
           
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={true}>
        
        </Drawer>
      </div>
    </div>
  );
};

export default Employee;
