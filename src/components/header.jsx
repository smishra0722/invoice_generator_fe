import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { FaFileInvoice } from "react-icons/fa";

const Header = () => {
  return (
    <div className={"header"}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <span className={"text-2xl mr-2"}>
            <FaFileInvoice />
          </span>
          <span className={"text-2xl"}>Invoice Generator</span>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
