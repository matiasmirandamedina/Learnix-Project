import { search } from '../../../../api/routes/teacherRoutes';
import NavBarAdmin from '../navBarPages/NavBarAdmin'

function HomeAdmin() {
  const [activos, setActivos] = useState();

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:3000/api/getUser")
    setActivos(response)
  };

  return (
    <>
        <NavBarAdmin/>
        <div className="admin-page">
          <h1>Panel del Administrador</h1>
          <p>Usuarios activos: {activos}</p>
        </div>
    </>
  );
}

export default HomeAdmin;