import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBarStudent() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#00489A", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        estudiante
      </Toolbar>
    </AppBar>
  );
}

export default NavBarStudent;