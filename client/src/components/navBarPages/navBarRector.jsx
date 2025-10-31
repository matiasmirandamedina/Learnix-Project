import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from "react-router-dom";

function NavBarRector() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#00489A", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Button color="inherit" component={Link} to="/homeRector" sx={{ textTransform: "none", fontWeight: 500 }}>
          Home Rector
        </Button>
        <AccountCircleIcon fontSize="large" sx={{ cursor: "pointer" }} onClick={() => navigate("/profile")} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarRector;