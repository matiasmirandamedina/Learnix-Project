import NavBarAdmin from '../navBarPages/NavBarAdmin'

function HomeAdmin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const fetchLogin = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/teacher/courses", {
        email,
        password
      });

      const { token, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      if (role === "admin") navigate("/homeAdmin");
      else if (role === "teacher") navigate("/homeTeacher");
      else if (role === "rector") navigate("/homeRector");
      else alert("Rol no reconocido");
    } catch (error) {
      if (error.response)
        alert(error.response.data.message);

      else if (error.request)
        alert("No hay respuesta del servidor.");

      else
        alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <NavBarAdmin />
      <div className="admin-page">
        <h1>Panel del Administrador</h1>
        <p>Bienvenido al panel de control de Learnix.</p>
      </div>
    </>
  );
}

export default HomeAdmin;