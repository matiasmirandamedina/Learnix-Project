import NavBarTeacher from '../navBarPages/navBarTeacher'

function HomeTeacher() {
  return (
    <>
      <NavBarTeacher />
      <div className="teacher-page">
        <h1>Panel del Profesor</h1>
        <p>Gestione sus clases y calificaciones aquí.</p>
      </div>
    </>
  );
}

export default HomeTeacher;