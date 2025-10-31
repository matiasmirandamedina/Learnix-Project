import { AppBar, Toolbar, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

function NavBarTeacher() {
  const navigate = useNavigate()
  return (
    <AppBar position="static" sx={{ backgroundColor: "#00489A", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Button color="inherit" component={Link} to="/homeTeacher" sx={{ textTransform: "none", fontWeight: 500 }}>
          Home Teacher
        </Button>
        <AccountCircleIcon fontSize="large" sx={{ cursor: "pointer" }} onClick={() => navigate("/profile")} />
      </Toolbar>
    </AppBar>
  );
}

export default NavBarTeacher;