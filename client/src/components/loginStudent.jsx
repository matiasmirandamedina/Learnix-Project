import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";

function LoginStudent() {
  const [cuil, setCuil] = useState("");
  const [tuition, setTuition] = useState("");

  const fetchLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", {
        cuil: Number(cuil),
        tuition: Number(tuition),
      });
      alert("Login exitoso");
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      if (error.response) alert(error.response.data.message);
      else if (error.request) alert("No hay respuesta del servidor.");
      else alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="login-container">
      <h1>Acceso Estudiantes</h1>
      <input type="text" placeholder="CUIL" onChange={(e) => setCuil(e.target.value)} />
      <input type="text" placeholder="Matrícula" onChange={(e) => setTuition(e.target.value)} />
      <Button variant="contained" onClick={fetchLogin} sx={{ mt: 2, backgroundColor: "#2196F3" }}>
        Ingresar <LoginIcon sx={{ ml: 1 }} />
      </Button>
    </div>
  );
}

export default LoginStudent;