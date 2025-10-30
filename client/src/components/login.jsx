import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", { email, password });
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
      <h1>Inicio de Sesión</h1>
      <input type="text" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={fetchLogin} sx={{ mt: 2, backgroundColor: "#2196F3" }}>
        Login <LoginIcon sx={{ ml: 1 }} />
      </Button>
    </div>
  );
}

export default Login;