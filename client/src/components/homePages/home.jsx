import NavBar from '../navBarPages/navBar'

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <section className="hero">
          <div className="hero-text">
            <h1>Bienvenido a Learnix</h1>
            <p>Tu plataforma educativa moderna y segura. Accede a tus clases, notas y más desde cualquier dispositivo.</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;