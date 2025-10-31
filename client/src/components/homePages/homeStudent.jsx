import NavBarStudent from '../navBarPages/navBarStudent'

function HomeRector() {
  return (
    <>
      <NavBarStudent />
      <div className="student-page">
        <h1>Panel del Estudiante</h1>
        <p>Supervisa tus notas.</p>
      </div>
    </>
  );
}

export default HomeRector;