import NavBarAdmin from '../navBarPages/NavBarAdmin'

function HomeAdmin() {
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