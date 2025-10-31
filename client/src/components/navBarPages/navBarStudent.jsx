import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBarStudent() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#00489A", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Button color="inherit" component={Link} to="/homeStudent" sx={{ textTransform: "none", fontWeight: 500 }}>
          Home Student
        </Button>
        <AccountCircleIcon fontSize="large" sx={{ cursor: "pointer" }} onClick={() => navigate("/profile")} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarStudent;